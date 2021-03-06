import type { NextPage } from 'next';
import { Header, ScoreSelect, ScoreResultModal } from 'components';
import * as S from './style';
import * as I from 'Assets/svg';
import { FieldErrors, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Calculate, Volunteer, Rounds, Attendance } from 'Utils/Calculate';
import useLocalstorage from 'hooks/useLocalstorage';
import application from 'Api/application';
import auth from 'Api/auth';
import { ScoreType } from 'type/score';
import useStore from 'Stores/StoreContainer';
import setLocalstorage from 'hooks/setLocalstorage';
import useSubjectsLocalstorage from 'hooks/useSubjectsLocalstorage';
import { toast } from 'react-toastify';

interface ScoreForm {
  // 과목/점수 배열
  value2_1: number[];
  value2_2: number[];
  value3_1: number[];
  artSportsValue: number[];
  volunteerValue: number[];
  absentValue: number[];
  attendanceValue: number[];
  newSubjects: string[];
}

const CalculatorPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ScoreForm>();

  const { showScoreResult, setShowScoreResult } = useStore();
  const [resultArray, setResultArray] = useState<Array<number>>([]); // 결과 점수 배열

  // 로컬스토리지 값 가져오기
  const score2_1 = useLocalstorage('score2_1');
  const score2_2 = useLocalstorage('score2_2');
  const score3_1 = useLocalstorage('score3_1');
  const artSportsScore = useLocalstorage('artSportsScore');
  const absentScore = useLocalstorage('absentScore');
  const attendanceScore = useLocalstorage('attendanceScore');
  const volunteerScore = useLocalstorage('volunteerScore');
  const getSubjects = useSubjectsLocalstorage('newSubjects');

  // 이전에 제출한 경험 여부 판단
  const [isSubmission, setIsSubmission] = useState<boolean>();

  const lines = ['일반교과', '예체능 교과', '비교과'];
  const [subjects, setSubjects] = useState([
    '국어',
    '도덕',
    '사회',
    '역사',
    '수학',
    '과학',
    '기술가정',
    '영어',
  ]);
  const [nonSubjects, setNonSubjects] = useState(['체육', '미술', '음악']);
  const [grades, setGrades] = useState([1, 2, 3]);

  // 로컬스토리지 값이 있을 때 초기 값 설정
  useEffect(() => {
    score2_1 && setValue('value2_1', score2_1);
    score2_2 && setValue('value2_2', score2_2);
    score3_1 && setValue('value3_1', score3_1);
    artSportsScore && setValue('artSportsValue', artSportsScore);
    absentScore && setValue('absentValue', absentScore);
    attendanceScore && setValue('attendanceValue', attendanceScore);
    volunteerScore && setValue('volunteerValue', volunteerScore);
    getSubjects && setValue('newSubjects', getSubjects);
    setIsSubmission(score2_1 ? true : false); // 이전 값이 있다면 true
  }, [
    score2_1,
    score2_2,
    score3_1,
    setValue,
    getSubjects,
    artSportsScore,
    absentScore,
    attendanceScore,
    volunteerScore,
  ]);

  // api 요청 보내기
  const TrySubmission = async ({
    score2_1,
    score2_2,
    score3_1,
    generalCurriculumScoreSubtotal,
    artSportsScore,
    attendanceScore,
    curriculumScoreSubtotal,
    volunteerScore,
    nonCurriculumScoreSubtotal,
    scoreTotal,
    rankPercentage,
  }: ScoreType) => {
    // 이전에 제출한 적이 있으면 patch / 없다면 post
    isSubmission
      ? await application.patchSecondSubmisson({
          score2_1,
          score2_2,
          score3_1,
          generalCurriculumScoreSubtotal,
          artSportsScore,
          attendanceScore,
          curriculumScoreSubtotal,
          volunteerScore,
          nonCurriculumScoreSubtotal,
          scoreTotal,
          rankPercentage,
        })
      : await application.postSecondSubmisson({
          score2_1,
          score2_2,
          score3_1,
          generalCurriculumScoreSubtotal,
          artSportsScore,
          attendanceScore,
          curriculumScoreSubtotal,
          volunteerScore,
          nonCurriculumScoreSubtotal,
          scoreTotal,
          rankPercentage,
        });
  };

  // 저장 버튼을 눌렀을 때
  const onValid = async ({
    value2_1,
    value2_2,
    value3_1,
    artSportsValue,
    volunteerValue,
    absentValue,
    attendanceValue,
    newSubjects,
  }: ScoreForm) => {
    const score2_1: number = Calculate(value2_1, 2); // 2학년 1학기
    const score2_2: number = Calculate(value2_2, 2); // 2학년 2학기
    const score3_1: number = Calculate(value3_1, 3); // 3학년 1학기
    const generalCurriculumScoreSubtotal: number = Rounds(
      score2_1 + score2_2 + score3_1,
      3,
    );
    // 교과성적 소계

    const artSportsScore: number = Calculate(artSportsValue, 4); // 예체능
    const curriculumScoreSubtotal: number = Rounds(
      generalCurriculumScoreSubtotal + artSportsScore,
      4,
    );
    // 교과성적 + 예체능

    const attendanceScore: number = Attendance(absentValue, attendanceValue); // 출석점수
    const volunteerScore: number = Volunteer(volunteerValue); // 봉사점수
    const nonCurriculumScoreSubtotal: number = Rounds(
      attendanceScore + volunteerScore,
      4,
    );
    //비교과 성적 소계

    const scoreTotal = Rounds(
      curriculumScoreSubtotal + nonCurriculumScoreSubtotal,
      3,
    ); // 총점
    const rankPercentage = Rounds((1 - scoreTotal / 300) * 100, 3); // 석채백분율

    try {
      await TrySubmission({
        score2_1,
        score2_2,
        score3_1,
        generalCurriculumScoreSubtotal,
        artSportsScore,
        attendanceScore,
        curriculumScoreSubtotal,
        volunteerScore,
        nonCurriculumScoreSubtotal,
        scoreTotal,
        rankPercentage,
      });
      // 원서 파일 페이지에서 불러오기 위해 localstorage에 저장
      setLocalstorage('score2_1', value2_1);
      setLocalstorage('score2_2', value2_2);
      setLocalstorage('score3_1', value3_1);
      setLocalstorage('artSportsScore', artSportsValue);
      setLocalstorage('absentScore', absentValue);
      setLocalstorage('attendanceScore', attendanceValue);
      setLocalstorage('volunteerScore', volunteerValue);
      setLocalstorage('subjects', subjects);
      setLocalstorage('newSubjects', newSubjects);
      setLocalstorage('nonSubjects', nonSubjects);

      // 결과 모달 제어
      setResultArray([
        generalCurriculumScoreSubtotal,
        artSportsScore,
        nonCurriculumScoreSubtotal,
        scoreTotal,
      ]);
      setShowScoreResult();
      setIsSubmission(true);
    } catch (error: any) {
      // accessToken 없을 시에 accessToken 발급 후 다시 요청
      if (error.response.status === 401) {
        try {
          // accessToken 발급
          await auth.refresh();
          await onValid({
            value2_1,
            value2_2,
            value3_1,
            artSportsValue,
            volunteerValue,
            absentValue,
            attendanceValue,
            newSubjects,
          });
        } catch (error) {
          console.log(error);
          toast.error('문제가 발생하였습니다. 다시 시도해주세요.');
        }
      } else {
        console.log(error);
        toast.error('문제가 발생하였습니다. 다시 시도해주세요.');
      }
    }
  };
  const inValid = (errors: FieldErrors) => {
    console.log(errors);
    toast.error('문제가 발생하였습니다. 다시 시도해주세요.');
  };

  // 추가과목 삭제
  const DeleteNewSubjects = (index: number) => {
    const newSubjects = watch('newSubjects');
    const value2_1 = watch('value2_1');
    const value2_2 = watch('value2_2');
    const value3_1 = watch('value3_1');
    setValue(
      'newSubjects',
      newSubjects?.filter((arr, i) => index !== i),
    ); // newSubjects 배열에서 인덱스가 N인 값 제거
    setValue(
      'value2_1',
      value2_1?.filter((arr, i) => subjects.length + index !== i),
    ); // value2_1 배열에서 인덱스가 기본과목.length + index인 값 제거
    setValue(
      'value2_2',
      value2_2?.filter((arr, i) => subjects.length + index !== i),
    );
    setValue(
      'value3_1',
      value3_1?.filter((arr, i) => subjects.length + index !== i),
    );
  };

  return (
    <>
      <Header />
      {showScoreResult && <ScoreResultModal result={resultArray} />}
      <S.Title>성적입력</S.Title>
      <S.CalculatePage>
        <S.CalculateSection onSubmit={handleSubmit(onValid, inValid)}>
          <S.CurriculumSection>
            <S.CurriculumValue>
              <S.ValueSection>
                <I.CrossRectangle />
                {subjects.map(subject => (
                  <S.Subject key={subject}>{subject}</S.Subject>
                ))}

                {watch('newSubjects')?.map((newSubject, i) => (
                  <S.SubjectInput
                    {...register(`newSubjects.${i}`, {
                      required: true,
                    })}
                    placeholder="추가과목입력"
                    key={i}
                    // 추가과목이 이전에 입력이 되어있었으면 기본 값에 추가과목 값 넣기
                    defaultValue={newSubject ? newSubject : ''}
                  />
                ))}
              </S.ValueSection>

              <S.ValueSection>
                <S.Semester>2학년 1학기</S.Semester>
                {subjects.map((subject, i) => (
                  <ScoreSelect
                    key={subject}
                    register={register(`value2_1.${i}`, {
                      valueAsNumber: true,
                      validate: {
                        notNaN: value => !isNaN(value), // value가 NaN이면 focus 되어 다시 선택하게 함
                      },
                    })}
                    index={i}
                    scoreArray={watch('value2_1')}
                  />
                ))}
                {watch('newSubjects')?.map((newSubject, i) => (
                  <ScoreSelect
                    key={i}
                    register={register(`value2_1.${subjects.length + i}`, {
                      valueAsNumber: true,
                      validate: {
                        notNaN: value => !isNaN(value), // value가 NaN이면 focus 되어 다시 선택하게 함
                      },
                    })}
                    index={subjects.length + i}
                  />
                ))}
              </S.ValueSection>

              <S.ValueSection>
                <S.Semester>2학년 2학기</S.Semester>
                {subjects.map((subject, i) => (
                  <ScoreSelect
                    key={subject}
                    register={register(`value2_2.${i}`, {
                      valueAsNumber: true,
                      validate: {
                        notNaN: value => !isNaN(value), // value가 NaN이면 focus 되어 다시 선택하게 함
                      },
                    })}
                    index={i}
                    scoreArray={watch('value2_2')}
                  />
                ))}
                {watch('newSubjects')?.map((newSubject, i) => (
                  <ScoreSelect
                    key={i}
                    register={register(`value2_2.${subjects.length + i}`, {
                      valueAsNumber: true,
                      validate: {
                        notNaN: value => !isNaN(value), // value가 NaN이면 focus 되어 다시 선택하게 함
                      },
                    })}
                    index={subjects.length + i}
                  />
                ))}
              </S.ValueSection>

              <S.ValueSection>
                <S.Semester>3학년 1학기</S.Semester>
                {subjects.map((subject, i) => (
                  <ScoreSelect
                    key={subject}
                    register={register(`value3_1.${i}`, {
                      valueAsNumber: true,
                      validate: {
                        notNaN: value => !isNaN(value), // value가 NaN이면 focus 되어 다시 선택하게 함
                      },
                    })}
                    index={i}
                    scoreArray={watch('value3_1')}
                  />
                ))}
                {watch('newSubjects')?.map((newSubject, i) => (
                  <span key={i}>
                    <ScoreSelect
                      register={register(`value3_1.${subjects.length + i}`, {
                        valueAsNumber: true,
                        validate: {
                          notNaN: value => !isNaN(value), // value가 NaN이면 focus 되어 다시 선택하게 함
                        },
                      })}
                      index={subjects.length + i}
                    />
                    <S.DeleteNewSubject onClick={() => DeleteNewSubjects(i)}>
                      삭제
                    </S.DeleteNewSubject>
                  </span>
                ))}
              </S.ValueSection>
            </S.CurriculumValue>

            {/* 과목추가 버튼 클릭 시 newSubjects 배열에 빈 문자열 추가 */}
            <S.Plus
              onClick={() =>
                // newSubjects.length가 0이면 빈 문자열 추가, 1 이상이면 기존 값에서 빈 문자열 추가
                setValue(
                  'newSubjects',
                  watch('newSubjects')?.length > 0
                    ? [...watch('newSubjects'), '']
                    : [''],
                )
              }
            >
              +과목추가
            </S.Plus>
          </S.CurriculumSection>

          <S.Section>
            <S.ValueSection>
              <I.CrossRectangle />
              {nonSubjects.map(subject => (
                <S.Subject key={subject}>{subject}</S.Subject>
              ))}
            </S.ValueSection>

            <S.ValueSection>
              <S.Semester>2학년 1학기</S.Semester>
              {nonSubjects.map((subject, i) => (
                <ScoreSelect
                  key={subject}
                  register={register(`artSportsValue.${i}`, {
                    valueAsNumber: true,
                    validate: {
                      notNaN: value => !isNaN(value),
                    },
                  })}
                  index={i}
                  scoreArray={artSportsScore}
                  artSports
                />
              ))}
            </S.ValueSection>

            <S.ValueSection>
              <S.Semester>2학년 2학기</S.Semester>
              {nonSubjects.map((subject, i) => (
                <ScoreSelect
                  key={subject}
                  register={register(`artSportsValue.${3 + i}`, {
                    valueAsNumber: true,
                    validate: {
                      notNaN: value => !isNaN(value),
                    },
                  })}
                  index={3 + i}
                  scoreArray={artSportsScore}
                  artSports
                />
              ))}
            </S.ValueSection>

            <S.ValueSection>
              <S.Semester>3학년 1학기</S.Semester>
              {nonSubjects.map((subject, i) => (
                <ScoreSelect
                  key={subject}
                  register={register(`artSportsValue.${6 + i}`, {
                    valueAsNumber: true,
                    validate: {
                      notNaN: value => !isNaN(value),
                    },
                  })}
                  index={6 + i}
                  scoreArray={artSportsScore}
                  artSports
                />
              ))}
            </S.ValueSection>
          </S.Section>

          <S.Section style={{ height: 260 }}>
            <div style={{ height: 260 }}>
              <table>
                <tbody>
                  <tr>
                    <S.Grade rowSpan={2}>학년</S.Grade>
                    <S.Attendance colSpan={4}>출결상황</S.Attendance>
                    <S.Attendance rowSpan={2}>봉사활동</S.Attendance>
                  </tr>
                  <tr>
                    <S.Attendance>결석</S.Attendance>
                    <S.Attendance>지각</S.Attendance>
                    <S.Attendance>조퇴</S.Attendance>
                    <S.Attendance>결과</S.Attendance>
                  </tr>
                </tbody>
              </table>

              <S.AttendanceSection>
                <S.ValueSection>
                  {grades.map(grade => (
                    <S.AttendanceGrade key={grade}>{grade}</S.AttendanceGrade>
                  ))}
                </S.ValueSection>
                <S.ValueSection>
                  {grades.map((grade, i) => (
                    <S.AttendanceInput
                      key={grade}
                      {...register(`absentValue.${i}`, {
                        required: true,
                        valueAsNumber: true,
                      })}
                      placeholder="입력"
                      defaultValue={absentScore ? absentScore[i] : ''}
                    />
                  ))}
                </S.ValueSection>

                <S.ValueSection>
                  {grades.map((grade, i) => (
                    <S.AttendanceInput
                      key={grade}
                      {...register(`attendanceValue.${i}`, {
                        required: true,
                        valueAsNumber: true,
                      })}
                      placeholder="입력"
                      defaultValue={attendanceScore ? attendanceScore[i] : ''}
                    />
                  ))}
                </S.ValueSection>

                <S.ValueSection>
                  {grades.map((grade, i) => (
                    <S.AttendanceInput
                      key={grade}
                      {...register(`attendanceValue.${3 + i}`, {
                        required: true,
                        valueAsNumber: true,
                      })}
                      placeholder="입력"
                      defaultValue={
                        attendanceScore ? attendanceScore[3 + i] : ''
                      }
                    />
                  ))}
                </S.ValueSection>

                <S.ValueSection>
                  {grades.map((grade, i) => (
                    <S.AttendanceInput
                      key={grade}
                      {...register(`attendanceValue.${6 + i}`, {
                        required: true,
                        valueAsNumber: true,
                      })}
                      placeholder="입력"
                      defaultValue={
                        attendanceScore ? attendanceScore[6 + i] : ''
                      }
                    />
                  ))}
                </S.ValueSection>
                <S.ValueSection>
                  {grades.map((grade, i) => (
                    <S.AttendanceInput
                      key={grade}
                      {...register(`volunteerValue.${i}`, {
                        required: true,
                        valueAsNumber: true,
                      })}
                      placeholder="입력"
                      defaultValue={volunteerScore ? volunteerScore[i] : ''}
                    />
                  ))}
                </S.ValueSection>
              </S.AttendanceSection>
            </div>
          </S.Section>

          <S.Submit type="submit">저장</S.Submit>
          <S.LineList>
            {lines.map(line => (
              <S.Line key={line}>{line}</S.Line>
            ))}
          </S.LineList>
        </S.CalculateSection>
      </S.CalculatePage>
    </>
  );
};

export default CalculatorPage;
