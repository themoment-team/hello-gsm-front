import type { NextPage } from 'next';
import { FreeSemesterBtn, Header, ScoreSelect } from 'components';
import * as S from 'shared/Styles/Calculate';
import * as I from 'Assets/svg';
import { FieldErrors, useForm } from 'react-hook-form';
import { useState } from 'react';
import {
  Calculate,
  Volunteer,
  Rounds,
  Attendance,
  ArtSports,
} from 'Utils/Calculate';
import ScoreResultModal from 'components/Modals/ScoreResultModal';
import useStore from 'Stores/StoreContainer';

interface ScoreForm {
  score1_1: number[];
  score1_2: number[];
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

  const {
    showScoreResult,
    setShowScoreResult,
    system,
    setSystem,
    freeSemester,
  } = useStore();
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
    const score1_1 =
      Calculate(validForm.score1_1, '1-1', system, freeSemester) ?? 0; // 2학년 1학기
    const score1_2 =
      Calculate(validForm.score1_2, '1-2', system, freeSemester) ?? 0; // 2학년 1학기
    const score2_1 =
      Calculate(validForm.score2_1, '2-1', system, freeSemester) ?? 0; // 2학년 1학기
    const score2_2 =
      Calculate(validForm.score2_2, '2-2', system, freeSemester) ?? 0; // 2학년 2학기
    const score3_1 =
      Calculate(validForm.score3_1, '3-1', system, freeSemester) ?? 0; // 3학년 1학기
    const generalCurriculumScoreSubtotal: number =
      score1_1 + score1_2 + score2_1 + score2_2 + score3_1;
    // 교과성적 소계

    const artSportsScore: number = ArtSports(validForm.artSportsScore); // 예체능
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
    const score1_1 = watch('score1_1');
    const score1_2 = watch('score1_2');
    const score2_1 = watch('score2_1');
    const score2_2 = watch('score2_2');
    const score3_1 = watch('score3_1');
    setValue(
      'newSubjects',
      newSubjects?.filter((arr, i) => index !== i),
    ); // newSubjects 배열에서 인덱스가 N인 값 제거
    setValue(
      'score1_1',
      score1_1?.filter((arr, i) => subjects.length + index !== i),
    );
    setValue(
      'score1_2',
      score1_2?.filter((arr, i) => subjects.length + index !== i),
    );
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

      <S.SystemSection>
        <S.SystemLabel>
          <input
            type="radio"
            checked={system === '자유학년제'}
            onChange={() => setSystem('자유학년제')}
            id="system"
          />
          <div>자유학년제</div>
        </S.SystemLabel>
        <S.SystemLabel>
          <input
            type="radio"
            checked={system === '자유학기제'}
            onChange={() => setSystem('자유학기제')}
            id="system"
          />
          <div>자유학기제</div>
        </S.SystemLabel>
      </S.SystemSection>

      <S.CalculatePage>
        <S.CalculateSection onSubmit={handleSubmit(onValid, inValid)}>
          <S.CurriculumSection>
            <S.CurriculumValue>
              <S.ValueSection>
                <I.CrossRectangle />
                <S.Subject>자유학기제</S.Subject>
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
              {system === '자유학기제' && (
                <>
                  <S.ValueSection>
                    <S.Semester>1학년 1학기</S.Semester>
                    <FreeSemesterBtn freeSemesterProps="1-1" />
                    {subjects.map((subject, i) => (
                      <ScoreSelect
                        key={subject}
                        register={register(`score1_1.${i}`, {
                          valueAsNumber: true,
                          validate: {
                            unSelected: value =>
                              value !== -1 || freeSemester === '1-1', // 선택하지 않으면 focus 되어 다시 선택하게 함
                          },
                        })}
                        index={i}
                        freeSemesterProps={'1-1'}
                      />
                    ))}
                    {watch('newSubjects')?.map((newSubject, i) => (
                      <ScoreSelect
                        key={i}
                        register={register(`score1_1.${subjects.length + i}`, {
                          valueAsNumber: true,
                          validate: {
                            unSelected: value =>
                              value !== -1 || freeSemester === '1-1', // 선택하지 않으면 focus 되어 다시 선택하게 함
                          },
                        })}
                        index={subjects.length + i}
                        freeSemesterProps={'1-1'}
                      />
                    ))}
                  </S.ValueSection>
                  <S.ValueSection>
                    <S.Semester>1학년 2학기</S.Semester>
                    <FreeSemesterBtn freeSemesterProps="1-2" />

                    {subjects.map((subject, i) => (
                      <ScoreSelect
                        key={subject}
                        register={register(`score1_2.${i}`, {
                          valueAsNumber: true,
                          validate: {
                            unSelected: value =>
                              value !== -1 || freeSemester === '1-2', // 선택하지 않으면 focus 되어 다시 선택하게 함
                          },
                        })}
                        index={i}
                        freeSemesterProps={'1-2'}
                      />
                    ))}
                    {watch('newSubjects')?.map((newSubject, i) => (
                      <ScoreSelect
                        key={i}
                        register={register(`score1_2.${subjects.length + i}`, {
                          valueAsNumber: true,
                          validate: {
                            unSelected: value =>
                              value !== -1 || freeSemester === '1-2', // 선택하지 않으면 focus 되어 다시 선택하게 함
                          },
                        })}
                        index={subjects.length + i}
                        freeSemesterProps={'1-2'}
                      />
                    ))}
                  </S.ValueSection>
                </>
              )}
              <S.ValueSection>
                <S.Semester>2학년 1학기</S.Semester>
                <FreeSemesterBtn freeSemesterProps="2-1" />

                {subjects.map((subject, i) => (
                  <ScoreSelect
                    key={subject}
                    register={register(`score2_1.${i}`, {
                      valueAsNumber: true,
                      validate: {
                        unSelected: value =>
                          value !== -1 || freeSemester === '2-1',
                      },
                    })}
                    freeSemesterProps={'2-1'}
                    index={i}
                  />
                ))}
                {watch('newSubjects')?.map((newSubject, i) => (
                  <ScoreSelect
                    key={i}
                    register={register(`score2_1.${subjects.length + i}`, {
                      valueAsNumber: true,
                      validate: {
                        unSelected: value =>
                          value !== -1 || freeSemester === '2-1',
                      },
                    })}
                    freeSemesterProps={'2-1'}
                    index={subjects.length + i}
                  />
                ))}
              </S.ValueSection>

              <S.ValueSection>
                <S.Semester>2학년 2학기</S.Semester>
                <FreeSemesterBtn freeSemesterProps="2-2" />

                {subjects.map((subject, i) => (
                  <ScoreSelect
                    key={subject}
                    register={register(`score2_2.${i}`, {
                      valueAsNumber: true,
                      validate: {
                        unSelected: value =>
                          value !== -1 || freeSemester === '2-2',
                      },
                    })}
                    freeSemesterProps={'2-2'}
                    index={i}
                  />
                ))}
                {watch('newSubjects')?.map((newSubject, i) => (
                  <ScoreSelect
                    key={i}
                    register={register(`score2_2.${subjects.length + i}`, {
                      valueAsNumber: true,
                      validate: {
                        unSelected: value =>
                          value !== -1 || freeSemester === '2-2',
                      },
                    })}
                    freeSemesterProps={'2-2'}
                    index={subjects.length + i}
                  />
                ))}
              </S.ValueSection>

              <S.ValueSection>
                <S.Semester>3학년 1학기</S.Semester>
                <FreeSemesterBtn freeSemesterProps="3-1" />
                {subjects.map((subject, i) => (
                  <ScoreSelect
                    key={subject}
                    register={register(`score3_1.${i}`, {
                      valueAsNumber: true,
                      validate: {
                        unSelected: value =>
                          value !== -1 || freeSemester === '3-1',
                      },
                    })}
                    freeSemesterProps={'3-1'}
                    index={i}
                  />
                ))}
                {watch('newSubjects')?.map((newSubject, i) => (
                  <span key={i}>
                    <ScoreSelect
                      register={register(`score3_1.${subjects.length + i}`, {
                        valueAsNumber: true,
                        validate: {
                          unSelected: value =>
                            value !== -1 || freeSemester === '3-1',
                        },
                      })}
                      index={subjects.length + i}
                      freeSemesterProps={'3-1'}
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
                    valueAsNumber: true,
                    validate: {
                      unSelected: value => value !== -1,
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
                    valueAsNumber: true,
                    validate: {
                      unSelected: value => value !== -1,
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
                    valueAsNumber: true,
                    validate: {
                      unSelected: value => value !== -1,
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
                        valueAsNumber: true,
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
                        valueAsNumber: true,
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
                        valueAsNumber: true,
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
                        valueAsNumber: true,
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
                        valueAsNumber: true,
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
