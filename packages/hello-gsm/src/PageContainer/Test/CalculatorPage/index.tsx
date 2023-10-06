import type { NextPage } from 'next';
import { ScoreSelect, ScoreResultModal, FreeSemesterBtn } from 'components';
import * as S from 'styles/Calculate';
import * as I from 'Assets/svg';
import { FieldErrors, useForm } from 'react-hook-form';
import { useState } from 'react';
import {
  Calculate,
  Volunteer,
  Rounds,
  Attendance,
  ArtSport,
} from 'Utils/Calculate';
import useStore from 'Stores/StoreContainer';
import { usePreventBackAndClose } from 'hooks/usePreventBackAndClose';
import { toast } from 'react-toastify';

interface ScoreForm {
  // 과목/점수 배열
  value1_1: number[];
  value1_2: number[];
  value2_1: number[];
  value2_2: number[];
  value3_1: number[];
  artSportsValue: number[];
  volunteerValue: number[];
  absentValue: number[];
  attendanceValue: number[];
  newSubjects: string[];
}

const TestCalculatorPage: NextPage = () => {
  const { register, handleSubmit, watch, setValue } = useForm<ScoreForm>();

  const {
    showScoreResult,
    setShowScoreResult,
    system,
    setSystem,
    freeSemester,
  } = useStore();
  const [resultArray, setResultArray] = useState<Array<number>>([]); // 결과 점수 배열

  const lines = ['일반교과', '예체능 교과', '비교과'];
  const subjects = [
    '국어',
    '도덕',
    '사회',
    '역사',
    '수학',
    '과학',
    '기술가정',
    '정보',
    '영어',
  ];
  const nonSubjects = ['체육', '음악', '미술'];
  const grades = [1, 2, 3];

  // 저장 버튼을 눌렀을 때
  const onValid = async ({
    value1_1,
    value1_2,
    value2_1,
    value2_2,
    value3_1,
    artSportsValue,
    volunteerValue,
    absentValue,
    attendanceValue,
  }: ScoreForm) => {
    const score1_1 = Calculate(value1_1, '1-1', system, freeSemester) ?? 0; // 1학년 1학기
    const score1_2 = Calculate(value1_2, '1-2', system, freeSemester) ?? 0; // 1학년 2학기
    const score2_1 = Calculate(value2_1, '2-1', system, freeSemester) ?? 0; // 2학년 1학기
    const score2_2 = Calculate(value2_2, '2-2', system, freeSemester) ?? 0; // 2학년 2학기
    const score3_1 = Calculate(value3_1, '3-1', system, freeSemester) ?? 0; // 3학년 1학기

    const generalCurriculumScoreSubtotal = Rounds(
      score1_1 + score1_2 + score2_1 + score2_2 + score3_1,
      3,
    );
    // 교과성적 소계

    const artSportsScore: number = isNaN(ArtSport(artSportsValue))
      ? 36
      : ArtSport(artSportsValue); // 예체능
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

    // 결과 모달 제어
    setResultArray([
      generalCurriculumScoreSubtotal,
      artSportsScore,
      nonCurriculumScoreSubtotal,
      scoreTotal,
    ]);
    setShowScoreResult(); // 결과창 보여지게
  };

  const inValid = (errors: FieldErrors) => {
    console.error(errors);
    toast.error('문제가 발생했어요. 다시 시도해주세요.');
  };

  // 추가과목 삭제
  const DeleteNewSubjects = (index: number) => {
    const newSubjects = watch('newSubjects');
    const value1_1 = watch('value1_1');
    const value1_2 = watch('value1_2');
    const value2_1 = watch('value2_1');
    const value2_2 = watch('value2_2');
    const value3_1 = watch('value3_1');
    setValue(
      'newSubjects',
      newSubjects?.filter((_, i) => index !== i),
    ); // newSubjects 배열에서 인덱스가 N인 값 제거
    setValue(
      'value1_1',
      value1_1?.filter((_, i) => subjects.length + index !== i),
    ); // value1_1 배열에서 인덱스가 기본과목.length + index인 값 제거 (삭제 버튼 클릭한 인덱스 제거)
    setValue(
      'value1_2',
      value1_2?.filter((_, i) => subjects.length + index !== i),
    );
    setValue(
      'value2_1',
      value2_1?.filter((_, i) => subjects.length + index !== i),
    );
    setValue(
      'value2_2',
      value2_2?.filter((_, i) => subjects.length + index !== i),
    );
    setValue(
      'value3_1',
      value3_1?.filter((_, i) => subjects.length + index !== i),
    );
  };

  usePreventBackAndClose();
  return (
    <>
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

                {system === '자유학기제' && <S.Subject>자유학기제</S.Subject>}

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
                        register={register(`value1_1.${i}`, {
                          valueAsNumber: true,
                          validate: {
                            unSelected: value =>
                              value !== -1 || freeSemester === '1-1', // 선택하지 않으면 focus 되어 다시 선택하게 함 1학년1학기가 자유학기제일 경우 validate 무효
                          },
                        })}
                        freeSemesterProps={'1-1'}
                      />
                    ))}
                    {watch('newSubjects')?.map((newSubject, i) => (
                      <ScoreSelect
                        key={i}
                        register={register(`value1_1.${subjects.length + i}`, {
                          valueAsNumber: true,
                          validate: {
                            unSelected: value =>
                              value !== -1 || freeSemester === '1-1', // 선택하지 않으면 focus 되어 다시 선택하게 함
                          },
                        })}
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
                        register={register(`value1_2.${i}`, {
                          valueAsNumber: true,
                          validate: {
                            unSelected: value =>
                              value !== -1 || freeSemester === '1-2', // 선택하지 않으면 focus 되어 다시 선택하게 함
                          },
                        })}
                        freeSemesterProps={'1-2'}
                      />
                    ))}
                    {watch('newSubjects')?.map((newSubject, i) => (
                      <ScoreSelect
                        key={i}
                        register={register(`value1_2.${subjects.length + i}`, {
                          valueAsNumber: true,
                          validate: {
                            unSelected: value =>
                              value !== -1 || freeSemester === '1-2', // 선택하지 않으면 focus 되어 다시 선택하게 함
                          },
                        })}
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
                    register={register(`value2_1.${i}`, {
                      valueAsNumber: true,
                      validate: {
                        unSelected: value =>
                          value !== -1 || freeSemester === '2-1', // 선택하지 않으면 focus 되어 다시 선택하게 함
                      },
                    })}
                    freeSemesterProps={'2-1'}
                  />
                ))}
                {watch('newSubjects')?.map((newSubject, i) => (
                  <ScoreSelect
                    key={i}
                    register={register(`value2_1.${subjects.length + i}`, {
                      valueAsNumber: true,
                      validate: {
                        unSelected: value =>
                          value !== -1 || freeSemester === '2-1', // 선택하지 않으면 focus 되어 다시 선택하게 함
                      },
                    })}
                    freeSemesterProps={'2-1'}
                  />
                ))}
              </S.ValueSection>

              <S.ValueSection>
                <S.Semester>2학년 2학기</S.Semester>
                <FreeSemesterBtn freeSemesterProps="2-2" />

                {subjects.map((subject, i) => (
                  <ScoreSelect
                    key={subject}
                    register={register(`value2_2.${i}`, {
                      valueAsNumber: true,
                      validate: {
                        unSelected: value =>
                          value !== -1 || freeSemester === '2-2', // 선택하지 않으면 focus 되어 다시 선택하게 함
                      },
                    })}
                    freeSemesterProps={'2-2'}
                  />
                ))}
                {watch('newSubjects')?.map((newSubject, i) => (
                  <ScoreSelect
                    key={i}
                    register={register(`value2_2.${subjects.length + i}`, {
                      valueAsNumber: true,
                      validate: {
                        unSelected: value =>
                          value !== -1 || freeSemester === '2-2', // 선택하지 않으면 focus 되어 다시 선택하게 함
                      },
                    })}
                    freeSemesterProps={'2-2'}
                  />
                ))}
              </S.ValueSection>

              <S.ValueSection>
                <S.Semester>3학년 1학기</S.Semester>
                <FreeSemesterBtn freeSemesterProps="3-1" />

                {subjects.map((subject, i) => (
                  <ScoreSelect
                    key={subject}
                    register={register(`value3_1.${i}`, {
                      valueAsNumber: true,
                      validate: {
                        unSelected: value =>
                          value !== -1 || freeSemester === '3-1', // 선택하지 않으면 focus 되어 다시 선택하게 함
                      },
                    })}
                    freeSemesterProps={'3-1'}
                  />
                ))}
                {watch('newSubjects')?.map((newSubject, i) => (
                  <span key={i}>
                    <ScoreSelect
                      register={register(`value3_1.${subjects.length + i}`, {
                        valueAsNumber: true,
                        validate: {
                          unSelected: value =>
                            value !== -1 || freeSemester === '3-1', // 선택하지 않으면 focus 되어 다시 선택하게 함
                        },
                      })}
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
                  register={register(`artSportsValue.${i}`, {
                    valueAsNumber: true,
                    validate: {
                      unSelected: value => value !== -1,
                    },
                  })}
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
                      unSelected: value => value !== -1,
                    },
                  })}
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
                      unSelected: value => value !== -1,
                    },
                  })}
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
                    <S.Attendance rowSpan={2}>봉사활동(시간)</S.Attendance>
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
                        validate: {
                          nagativeNumber: value => !(value < 0),
                        },
                      })}
                      placeholder="입력"
                      type="number"
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
                        validate: {
                          nagativeNumber: value => !(value < 0),
                        },
                      })}
                      placeholder="입력"
                      type="number"
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
                        validate: {
                          nagativeNumber: value => !(value < 0),
                        },
                      })}
                      placeholder="입력"
                      type="number"
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
                        validate: {
                          nagativeNumber: value => !(value < 0),
                        },
                      })}
                      placeholder="입력"
                      type="number"
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
                        validate: {
                          nagativeNumber: value => !(value < 0),
                        },
                      })}
                      type="number"
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
