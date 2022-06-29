import type { NextPage } from 'next';
import { Header, ScoreSelect } from 'components';
import * as S from '../CalculatorPage/style';
import * as I from 'Assets/svg';
import { FieldErrors, useForm } from 'react-hook-form';
import { useState } from 'react';
import { Calculate, Volunteer, Rounds, Attendance } from 'Utils/Calculate';
import ScoreResultModal from 'components/Modals/ScoreResultModal';

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
    formState: { errors },
  } = useForm<ScoreForm>();

  const [showResult, setShowResult] = useState(false); // 결과 모달 제어
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
  const [newSubjects, setNewSubjects] = useState<Array<string | null>>([]);

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
    setShowResult(true);
  };

  const inValid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <>
      <Header />
      {showResult && <ScoreResultModal result={resultArray} />}
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
                    {...register(`newSubjects.${i}`)}
                    placeholder="추가과목입력"
                    key={i}
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
                {newSubjects?.map((newSubject, i) => (
                  <S.Select
                    key={i}
                    {...register(`score2_1.${subjects.length + i}`)} // 기존 2_1 점수 배열에 추가과목 점수 추가
                  >
                    <option>선택</option>
                    <option value={5}>A</option>
                    <option value={4}>B</option>
                    <option value={3}>C</option>
                    <option value={2}>D</option>
                    <option value={1}>E</option>
                    <option value={0}>없음</option>
                  </S.Select>
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
                {newSubjects?.map((newSubject, i) => (
                  <S.Select
                    key={i}
                    {...register(`score2_2.${subjects.length + i}`)}
                  >
                    <option>선택</option>
                    <option value={5}>A</option>
                    <option value={4}>B</option>
                    <option value={3}>C</option>
                    <option value={2}>D</option>
                    <option value={1}>E</option>
                    <option value={0}>없음</option>
                  </S.Select>
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
                {newSubjects?.map((newSubject, i) => (
                  <S.Select
                    key={i}
                    {...register(`score3_1.${subjects.length + i}`)}
                  >
                    <option>선택</option>
                    <option value={5}>A</option>
                    <option value={4}>B</option>
                    <option value={3}>C</option>
                    <option value={2}>D</option>
                    <option value={1}>E</option>
                    <option value={0}>없음</option>
                  </S.Select>
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
