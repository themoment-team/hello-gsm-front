import type { NextPage } from 'next';
import { Header, ScoreSelect } from 'components';
import * as S from './style';
import * as I from 'Assets/svg';
import { FieldErrors, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Calculate, Volunteer, Rounds, Attendance } from 'Utils/Calculate';
import ScoreResultModal from 'components/Modals/ScoreResultModal';
import useLocalstorage from 'hooks/useLocalstorage';
import application from 'Api/application';
import auth from 'Api/auth';
import { ScoreType } from 'type/application';
import useStore from 'Stores/StoreContainer';
interface ScoreForm {
  score2_1: number[];
  score2_2: number[];
  score3_1: number[];
  artSportsScore: number[];
  volunteerScore: number[];
  absentScore: number[];
  attendanceScore: number[];
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

  const score2_1 = useLocalstorage('score2_1');
  const score2_2 = useLocalstorage('score2_2');
  const score3_1 = useLocalstorage('score3_1');
  const artSportsScore = useLocalstorage('artSportsScore');
  const absentScore = useLocalstorage('absentScore');
  const attendanceScore = useLocalstorage('attendanceScore');
  const volunteerScore = useLocalstorage('volunteerScore');
  const getSubjects = useLocalstorage('newSubjects');

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
  const [newSubjects, setNewSubjects] = useState<Array<string | number>>([]);

  // 로컬스토리지 값이 있을 때 초기 값 설정
  useEffect(() => {
    score2_1 !== undefined && setValue('score2_1', score2_1);
    score2_2 !== undefined && setValue('score2_2', score2_2);
    score3_1 !== undefined && setValue('score3_1', score3_1);
    artSportsScore !== undefined && setValue('artSportsScore', artSportsScore);
    absentScore !== undefined && setValue('absentScore', absentScore);
    attendanceScore !== undefined &&
      setValue('attendanceScore', attendanceScore);
    volunteerScore !== undefined && setValue('volunteerScore', volunteerScore);
    getSubjects !== undefined && setNewSubjects(getSubjects);
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
  const PostData = async ({
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
  }: ScoreType) => {
    await application.postSecondSubmisson({
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
    });
  };

  // 저장 버튼을 눌렀을 때
  const onValid = async (validForm: ScoreForm) => {
    const score2_1: number = Calculate(validForm.score2_1, 2); // 2학년 1학기
    const score2_2: number = Calculate(validForm.score2_2, 2); // 2학년 2학기
    const score3_1: number = Calculate(validForm.score3_1, 3); // 3학년 1학기
    const generalCurriculumScoreSubtotal: number =
      score2_1 + score2_2 + score3_1;
    // 교과성적 소계

    const artSportsScore: number = Calculate(validForm.artSportsScore, 4); // 예체능
    const curriculumScoreSubtotal: number = Rounds(
      generalCurriculumScoreSubtotal + artSportsScore,
      4,
    );
    // 교과성적 + 예체능

    const attendanceScore: number = Attendance(
      validForm.absentScore,
      validForm.attendanceScore,
    ); // 출석점수
    const volunteerScore: number = Volunteer(validForm.volunteerScore); // 봉사점수
    const nonCurriculumScoreSubtotal: number = Rounds(
      attendanceScore + volunteerScore,
      4,
    );
    //비교과 성적 소계

    const scoreTotal = Rounds(
      curriculumScoreSubtotal + nonCurriculumScoreSubtotal,
      3,
    );
    // 총합
    try {
      await PostData({
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
      });
      // 결과 모달 제어
      setResultArray([
        generalCurriculumScoreSubtotal,
        artSportsScore,
        nonCurriculumScoreSubtotal,
        scoreTotal,
      ]);
      setShowScoreResult();
      // 원서 파일 페이지에서 불러오기 위해 localstorage에 저장
      window.localStorage.setItem(
        'score2_1',
        JSON.stringify(validForm.score2_1),
      );
      window.localStorage.setItem(
        'score2_2',
        JSON.stringify(validForm.score2_2),
      );
      window.localStorage.setItem(
        'score3_1',
        JSON.stringify(validForm.score3_1),
      );
      window.localStorage.setItem(
        'artSportsScore',
        JSON.stringify(validForm.artSportsScore),
      );
      window.localStorage.setItem(
        'absentScore',
        JSON.stringify(validForm.absentScore),
      );
      window.localStorage.setItem(
        'attendanceScore',
        JSON.stringify(validForm.attendanceScore),
      );
      window.localStorage.setItem(
        'volunteerScore',
        JSON.stringify(validForm.volunteerScore),
      );
      window.localStorage.setItem('subjects', JSON.stringify(subjects));
      window.localStorage.setItem(
        'newSubjects',
        JSON.stringify(validForm.newSubjects),
      );
      window.localStorage.setItem('nonSubjects', JSON.stringify(nonSubjects));
    } catch (error: any) {
      // accessToken 없을 시에 accessToken 발급 후 PostData 요청
      if (error.response.status === 401) {
        try {
          // accessToken 발급
          await auth.refresh();
          await PostData({
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
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log(error);
      }
    }
  };

  const inValid = (errors: FieldErrors) => {
    console.log(errors);
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

                {newSubjects?.map((newSubject, i) => (
                  <S.SubjectInput
                    {...register(`newSubjects.${i}`, {
                      required: true,
                    })}
                    placeholder="추가과목입력"
                    key={i}
                    defaultValue={newSubject ? newSubject : ''}
                  />
                ))}
              </S.ValueSection>

              <S.ValueSection>
                <S.Semester>2학년 1학기</S.Semester>
                {subjects.map((subject, i) => (
                  <ScoreSelect
                    key={subject}
                    register={register(`score2_1.${i}`, {
                      validate: {
                        notNaN: value => !isNaN(value), // value가 NaN이면 focus 되어 다시 선택하게 함
                      },
                    })}
                    index={i}
                    scoreArray={watch('score2_1')}
                  />
                ))}
                {newSubjects?.map((newSubject, i) => (
                  <ScoreSelect
                    key={i}
                    register={register(`score2_1.${subjects.length + i}`, {
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
                    register={register(`score2_2.${i}`, {
                      validate: {
                        notNaN: value => !isNaN(value), // value가 NaN이면 focus 되어 다시 선택하게 함
                      },
                    })}
                    index={i}
                    scoreArray={watch('score2_2')}
                  />
                ))}
                {newSubjects?.map((newSubject, i) => (
                  <ScoreSelect
                    key={i}
                    register={register(`score2_2.${subjects.length + i}`, {
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
                    register={register(`score3_1.${i}`, {
                      validate: {
                        notNaN: value => !isNaN(value), // value가 NaN이면 focus 되어 다시 선택하게 함
                      },
                    })}
                    index={i}
                    scoreArray={watch('score3_1')}
                  />
                ))}
                {newSubjects?.map((newSubject, i) => (
                  <ScoreSelect
                    key={i}
                    register={register(`score3_1.${subjects.length + i}`, {
                      validate: {
                        notNaN: value => !isNaN(value), // value가 NaN이면 focus 되어 다시 선택하게 함
                      },
                    })}
                    index={subjects.length + i}
                  />
                ))}
              </S.ValueSection>
            </S.CurriculumValue>

            {/* 과목추가 버튼 클릭 시 newSubjects 배열에 빈 문자열 추가 */}
            <S.Plus onClick={() => setNewSubjects([...newSubjects, ''])}>
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
                  register={register(`artSportsScore.${i}`, {
                    validate: {
                      notNaN: value => !isNaN(value),
                    },
                  })}
                  index={i}
                  scoreArray={artSportsScore}
                />
              ))}
            </S.ValueSection>

            <S.ValueSection>
              <S.Semester>2학년 2학기</S.Semester>
              {nonSubjects.map((subject, i) => (
                <ScoreSelect
                  key={subject}
                  register={register(`artSportsScore.${3 + i}`, {
                    validate: {
                      notNaN: value => !isNaN(value),
                    },
                  })}
                  index={3 + i}
                  scoreArray={artSportsScore}
                />
              ))}
            </S.ValueSection>

            <S.ValueSection>
              <S.Semester>3학년 1학기</S.Semester>
              {nonSubjects.map((subject, i) => (
                <ScoreSelect
                  key={subject}
                  register={register(`artSportsScore.${6 + i}`, {
                    validate: {
                      notNaN: value => !isNaN(value),
                    },
                  })}
                  index={6 + i}
                  scoreArray={artSportsScore}
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
                      {...register(`absentScore.${i}`, {
                        required: true,
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
                      {...register(`attendanceScore.${i}`, {
                        required: true,
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
                      {...register(`attendanceScore.${3 + i}`, {
                        required: true,
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
                      {...register(`attendanceScore.${6 + i}`, {
                        required: true,
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
                      {...register(`volunteerScore.${i}`, {
                        required: true,
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
