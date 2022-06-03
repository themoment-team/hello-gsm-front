import type { NextPage } from 'next';
import { Header } from 'components';
import * as S from './style';
import * as I from '../../Assets/svg';
import { FieldErrors, useForm } from 'react-hook-form';
import { useState } from 'react';
import { Calculate, Volunteer, Rounds, Attendance } from './function';
import application from 'Api/application';
import Result from '../Result';

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
    formState: { errors },
  } = useForm<ScoreForm>();

  const [showResult, setShowResult] = useState(false);
  const [resultArray, setResultArray] = useState<Array<number>>([]);

  const onValid = async (validForm: ScoreForm) => {
    const score2_1: number = Calculate(validForm.score2_1, 2); // 2학년 1학기
    const score2_2: number = Calculate(validForm.score2_2, 2); // 2학년 2학기
    const score3_1: number = Calculate(validForm.score3_1, 3); // 3학년 1학기

    const generalCurriculumScoreSubtotal: number = Rounds(
      score2_1 + score2_2 + score3_1,
    ); // 교과성적 소계
    const artSportsScore: number = Calculate(validForm.artSportsScore, 4); // 예체능
    const curriculumScoreSubtotal: number = Rounds(
      generalCurriculumScoreSubtotal + artSportsScore,
    ); // 교과성적 + 예체능

    const attendanceScore: number = Attendance(
      validForm.absentScore,
      validForm.attendanceScore,
    ); // 출석점수
    const volunteerScore: number = Volunteer(validForm.volunteerScore); // 봉사점수
    const nonCurriculumScoreSubtotal: number = Rounds(
      attendanceScore + volunteerScore,
    ); //비교과 성적 소계
    const scoreTotal = Rounds(
      curriculumScoreSubtotal + nonCurriculumScoreSubtotal,
    ); // 총합

    console.log(score2_1);
    console.log(validForm);
    console.log(
      `2학년 1학기 : ${score2_1}\n2학년 2학기 : ${score2_2}\n3학기 1학기 : ${score3_1}\n교과성적 소계 : ${generalCurriculumScoreSubtotal}\n`,
    );
    console.log(`예체능 점수 : ${artSportsScore}\n`);
    console.log(`교과성적 + 예체능 점수 : ${curriculumScoreSubtotal}\n`);
    console.log(
      `출석 점수 : ${attendanceScore}\n봉사 점수 : ${volunteerScore}\n비교과 성적 소계 : ${nonCurriculumScoreSubtotal}\n`,
    );
    console.log(`총합 : ${scoreTotal}`);
    setResultArray([
      generalCurriculumScoreSubtotal,
      artSportsScore,
      nonCurriculumScoreSubtotal,
      scoreTotal,
    ]);
    try {
      // await application.postSecondSubmisson({
      //   score2_1,
      //   score2_2,
      //   score3_1,
      //   generalCurriculumScoreSubtotal,
      //   artSportsScore,
      //   attendanceScore,
      //   curriculumScoreSubtotal,
      //   volunteerScore,
      //   nonCurriculumScoreSubtotal,
      //   scoreTotal,
      // });
    } catch (e) {
      console.error(e);
    } finally {
      setShowResult(true);
    }
  };

  const inValid = (errors: FieldErrors) => {
    console.log(errors);
  };

  const lines = ['일반교과', '예체능 교과', '비교과'];
  const [subjects] = useState([
    '국어',
    '도덕',
    '사회',
    '역사',
    '수학',
    '과학',
    '기술가정',
    '영어',
  ]);
  const [nonSubjects] = useState(['체육', '미술', '음악']);
  const [grades] = useState([1, 2, 3]);
  const [newsubjects, setNewSubjects] = useState<Array<string | null>>([]);
  return (
    <>
      <Header />
      {showResult && <Result result={resultArray} />}
      <S.Title>성적입력</S.Title>
      <S.CalculatePage>
        <S.CalculateSection onSubmit={handleSubmit(onValid, inValid)}>
          <S.CurriculumSection>
            <S.CurriculumValue>
              <S.ValueSection>
                <div>
                  <I.CrossRectangle />
                </div>
                {subjects.map(subject => (
                  <S.Subject key={subject}>{subject}</S.Subject>
                ))}
                {newsubjects.map((test, i) => (
                  <S.SubjectInput
                    {...register(`newSubjects.${i}`)}
                    placeholder="추가과목입력"
                    key={i}
                  />
                ))}
              </S.ValueSection>
              <S.ValueSection>
                <S.Semester>2학년 1학기</S.Semester>
                {subjects.map((subject, i: number) => (
                  <S.Select
                    key={subject}
                    {...register(`score2_1.${i}`, {
                      validate: {
                        notNaN: value => !isNaN(value) || '선택해주세요.',
                      },
                    })}
                  >
                    <option>선택</option>
                    <option value={5}>A</option>
                    <option value={4}>B</option>
                    <option value={3}>C</option>
                    <option value={2}>D</option>
                    <option value={1}>E</option>
                  </S.Select>
                ))}
                {newsubjects.map((subject, i) => (
                  <S.Select
                    key={i}
                    {...register(`score2_1.${subjects.length + i}`)}
                  >
                    <option>선택</option>
                    <option value={5}>A</option>
                    <option value={4}>B</option>
                    <option value={3}>C</option>
                    <option value={2}>D</option>
                    <option value={1}>E</option>
                    <option>없음</option>
                  </S.Select>
                ))}
              </S.ValueSection>
              <S.ValueSection>
                <S.Semester>2학년 2학기</S.Semester>
                {subjects.map((subject, i: number) => (
                  <S.Select
                    key={subject}
                    {...register(`score2_2.${i}`, {
                      validate: {
                        notNaN: value => !isNaN(value) || '선택해주세요.',
                      },
                    })}
                  >
                    <option>선택</option>
                    <option value={5}>A</option>
                    <option value={4}>B</option>
                    <option value={3}>C</option>
                    <option value={2}>D</option>
                    <option value={1}>E</option>
                  </S.Select>
                ))}
                {newsubjects.map((subject, i) => (
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
                    <option>없음</option>
                  </S.Select>
                ))}
              </S.ValueSection>
              <S.ValueSection>
                <S.Semester>3학년 1학기</S.Semester>
                {subjects.map((subject, i: number) => (
                  <S.Select
                    key={subject}
                    {...register(`score3_1.${i}`, {
                      validate: {
                        notNaN: value => !isNaN(value) || '선택해주세요.',
                      },
                    })}
                  >
                    <option>선택</option>
                    <option value={5}>A</option>
                    <option value={4}>B</option>
                    <option value={3}>C</option>
                    <option value={2}>D</option>
                    <option value={1}>E</option>
                  </S.Select>
                ))}
                {newsubjects.map((subject, i) => (
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
                    <option>없음</option>
                  </S.Select>
                ))}
              </S.ValueSection>
            </S.CurriculumValue>

            <S.Plus onClick={() => setNewSubjects([...newsubjects, ''])}>
              +과목추가
            </S.Plus>
          </S.CurriculumSection>

          <S.Section>
            <S.ValueSection>
              <div>
                <I.CrossRectangle />
              </div>
              {nonSubjects.map(subject => (
                <S.Subject key={subject}>{subject}</S.Subject>
              ))}
            </S.ValueSection>
            <S.ValueSection>
              <S.Semester>1학년 1학기</S.Semester>
              {nonSubjects.map((subject, i: number) => (
                <S.Select
                  key={subject}
                  {...register(`artSportsScore.${i}`, {
                    validate: {
                      notNaN: value => !isNaN(value) || '선택해주세요.',
                    },
                  })}
                >
                  <option>선택</option>
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                </S.Select>
              ))}
            </S.ValueSection>
            <S.ValueSection>
              <S.Semester>1학년 2학기</S.Semester>
              {nonSubjects.map((subject, i: number) => (
                <S.Select
                  key={subject}
                  {...register(`artSportsScore.${3 + i}`, {
                    validate: {
                      notNaN: value => !isNaN(value) || '선택해주세요.',
                    },
                  })}
                >
                  <option>선택</option>
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                </S.Select>
              ))}
            </S.ValueSection>
            <S.ValueSection>
              <S.Semester>2학년 1학기</S.Semester>
              {nonSubjects.map((subject, i: number) => (
                <S.Select
                  key={subject}
                  {...register(`artSportsScore.${6 + i}`, {
                    validate: {
                      notNaN: value => !isNaN(value) || '선택해주세요.',
                    },
                  })}
                >
                  <option>선택</option>
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                </S.Select>
              ))}
            </S.ValueSection>
            <S.ValueSection>
              <S.Semester>2학년 2학기</S.Semester>
              {nonSubjects.map((subject, i: number) => (
                <S.Select
                  key={subject}
                  {...register(`artSportsScore.${9 + i}`, {
                    validate: {
                      notNaN: value => !isNaN(value) || '선택해주세요.',
                    },
                  })}
                >
                  <option>선택</option>
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                </S.Select>
              ))}
            </S.ValueSection>
            <S.ValueSection>
              <S.Semester>3학년 1학기</S.Semester>
              {nonSubjects.map((subject, i: number) => (
                <S.Select
                  key={subject}
                  {...register(`artSportsScore.${12 + i}`, {
                    validate: {
                      notNaN: value => !isNaN(value) || '선택해주세요.',
                    },
                  })}
                >
                  <option>선택</option>
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                </S.Select>
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
                  {grades.map((grade, i: number) => (
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
                  {grades.map((grade, i: number) => (
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
                  {grades.map((grade, i: number) => (
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
                  {grades.map((grade, i: number) => (
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
                  {grades.map((grade, i: number) => (
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

export default CalculatorPage;
