import type { NextPage } from 'next';
import { Header, ScoreSelect } from 'components';
import * as S from '../CalculatorPage/style';
import * as I from 'Assets/svg';
import { FieldErrors, useForm } from 'react-hook-form';
import { useState } from 'react';
import { Calculate, Volunteer, Rounds, Attendance } from 'Utils/Calculate';
import ScoreResultModal from 'components/Modals/ScoreResultModal';
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

const TestCalculatorPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ScoreForm>();

  const { showScoreResult, setShowScoreResult } = useStore();
  const [resultArray, setResultArray] = useState<Array<number>>([]); // 결과 점수 배열

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

  const onValid = async (validForm: ScoreForm) => {
    const score2_1: number = Calculate(validForm.score2_1, 2); // 2학년 1학기
    const score2_2: number = Calculate(validForm.score2_2, 2); // 2학년 2학기
    const score3_1: number = Calculate(validForm.score3_1, 3); // 3학년 1학기
    const generalCurriculumScoreSubtotal: number =
      score2_1 + score2_2 + score3_1;
    // 교과성적 소계

    const artSportsScore: number = Calculate(validForm.artSportsScore, 4); // 예체능
    const curriculumScoreSubtotal: number =
      generalCurriculumScoreSubtotal + artSportsScore;
    // 교과성적 + 예체능

    const attendanceScore: number = Attendance(
      validForm.absentScore,
      validForm.attendanceScore,
    ); // 출석점수
    const volunteerScore: number = Volunteer(validForm.volunteerScore); // 봉사점수
    const nonCurriculumScoreSubtotal: number = attendanceScore + volunteerScore;
    //비교과 성적 소계

    const scoreTotal = Rounds(
      curriculumScoreSubtotal + nonCurriculumScoreSubtotal,
      3,
    );
    // 총합

    setResultArray([
      generalCurriculumScoreSubtotal,
      artSportsScore,
      nonCurriculumScoreSubtotal,
      scoreTotal,
    ]);
    setShowScoreResult();
  };

  const inValid = (errors: FieldErrors) => {
    console.log(errors);
  };

  // 추가과목 삭제
  const DeleteNewSubjects = (index: number) => {
    const newSubjects = watch('newSubjects');
    const score2_1 = watch('score2_1');
    const score2_2 = watch('score2_2');
    const score3_1 = watch('score3_1');
    setValue(
      'newSubjects',
      newSubjects?.filter((arr, i) => index !== i),
    ); // newSubjects 배열에서 인덱스가 N인 값 제거
    setValue(
      'score2_1',
      score2_1?.filter((arr, i) => subjects.length + index !== i),
    ); // score2_1 배열에서 인덱스가 기본과목.length + index인 값 제거
    setValue(
      'score2_2',
      score2_2?.filter((arr, i) => subjects.length + index !== i),
    );
    setValue(
      'score3_1',
      score3_1?.filter((arr, i) => subjects.length + index !== i),
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
                    register={register(`score2_1.${i}`, {
                      validate: {
                        notNaN: value => !isNaN(value), // value가 NaN이면 focus 되어 다시 선택하게 함
                      },
                    })}
                    index={i}
                  />
                ))}
                {watch('newSubjects')?.map((newSubject, i) => (
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
                  />
                ))}
                {watch('newSubjects')?.map((newSubject, i) => (
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
                  />
                ))}
                {watch('newSubjects')?.map((newSubject, i) => (
                  <span key={i}>
                    <ScoreSelect
                      register={register(`score3_1.${subjects.length + i}`, {
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
                  register={register(`artSportsScore.${i}`, {
                    validate: {
                      notNaN: value => !isNaN(value),
                    },
                  })}
                  index={i}
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
                  index={i}
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
                  index={i}
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

export default TestCalculatorPage;
