import type { NextPage } from 'next';
import Header from 'components/Common/Header';
import * as S from './style';
import * as I from '../../Assets/svg';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Calculate, Volunteer, Rounds, Attendance } from './function';

interface ScoreForm {
  score2_1: number[];
  score2_2: number[];
  score3_1: number[];
  artSportsScore: number[];
  volunteerScore: number[];
  absentScore: number[];
  attendanceScore: number[];
}

const CalculatorPage: NextPage = () => {
  const { register, handleSubmit } = useForm<ScoreForm>();

  const onValid = (validForm: ScoreForm) => {
    const score2_1: number = Calculate(validForm.score2_1, 2); // 2학년 1학기
    const score2_2: number = Calculate(validForm.score2_2, 2); // 2학년 2학기
    const score3_1: number = Calculate(validForm.score3_1, 3); // 3학년 1학기

    const generalCurriculumScoreSubtotal: number = Rounds(
      score2_1 + score2_2 + score3_1,
    ); // 교과성적 소계
    const artSportsScore: number = Calculate(validForm.artSportsScore, 4); // 예체능
    const attendanceScore: number = Attendance(
      validForm.absentScore,
      validForm.attendanceScore,
    ); // 출석점수

    const volunteerScore: number = Volunteer(validForm.volunteerScore); // 봉사점수
    const curriculumScoreSubtotal: number = Rounds(
      generalCurriculumScoreSubtotal + artSportsScore,
    );
    const nonCurriculumScoreSubtotal: number = Rounds(
      attendanceScore + volunteerScore,
    ); //비교과 성적 소계
    const scoreTotal: number = Rounds(
      curriculumScoreSubtotal + nonCurriculumScoreSubtotal,
    ); // 총합
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

  return (
    <>
      <Header />
      <S.Title>성적입력</S.Title>
      <S.CalculatePage>
        <S.LineList>
          {lines.map((line, i) => (
            <S.Line key={i}>{line}</S.Line>
          ))}
        </S.LineList>
        <S.CalculateSection onSubmit={handleSubmit(onValid)}>
          <S.Section>
            <S.ValueSection>
              <div>
                <I.CrossRectangle />
              </div>
              {subjects.map((subject, i) => (
                <S.Subject key={i}>{subject}</S.Subject>
              ))}
            </S.ValueSection>

            <S.ValueSection>
              <S.Semester>2학년 1학기</S.Semester>
              {subjects.map((subject, i) => (
                <S.Select {...register(`score2_1.${i}`)} key={i}>
                  {/* <option>선택</option> */}
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                  <option value={2}>D</option>
                  <option value={1}>E</option>
                </S.Select>
              ))}
            </S.ValueSection>
            <S.ValueSection>
              <S.Semester>2학년 2학기</S.Semester>
              {subjects.map((subject, i) => (
                <S.Select {...register(`score2_2.${i}`)} key={i}>
                  {/* <option>선택</option> */}
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                  <option value={2}>D</option>
                  <option value={1}>E</option>
                </S.Select>
              ))}
            </S.ValueSection>
            <S.ValueSection>
              <S.Semester>3학년 1학기</S.Semester>
              {subjects.map((subject, i) => (
                <S.Select {...register(`score3_1.${i}`)} key={i}>
                  {/* <option>선택</option> */}
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                  <option value={2}>D</option>
                  <option value={1}>E</option>
                </S.Select>
              ))}
            </S.ValueSection>
          </S.Section>

          <S.Section style={{ height: 230 }}>
            <S.ValueSection>
              <div>
                <I.CrossRectangle />
              </div>
              {nonSubjects.map((subject, i) => (
                <S.Subject key={i}>{subject}</S.Subject>
              ))}
            </S.ValueSection>
            <S.ValueSection>
              <S.Semester>1학년 1학기</S.Semester>
              {nonSubjects.map((subject, i) => (
                <S.Select key={i} {...register(`artSportsScore.${i}`)}>
                  {/* <option>선택</option> */}
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                </S.Select>
              ))}
            </S.ValueSection>
            <S.ValueSection>
              <S.Semester>1학년 2학기</S.Semester>
              {nonSubjects.map((subject, i) => (
                <S.Select key={i} {...register(`artSportsScore.${3 + i}`)}>
                  {/* <option>선택</option> */}
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                </S.Select>
              ))}
            </S.ValueSection>
            <S.ValueSection>
              <S.Semester>2학년 1학기</S.Semester>
              {nonSubjects.map((subject, i) => (
                <S.Select key={i} {...register(`artSportsScore.${6 + i}`)}>
                  {/* <option>선택</option> */}
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                </S.Select>
              ))}
            </S.ValueSection>
            <S.ValueSection>
              <S.Semester>2학년 2학기</S.Semester>
              {nonSubjects.map((subject, i) => (
                <S.Select key={i} {...register(`artSportsScore.${9 + i}`)}>
                  {/* <option>선택</option> */}
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                </S.Select>
              ))}
            </S.ValueSection>
            <S.ValueSection>
              <S.Semester>3학년 1학기</S.Semester>
              {nonSubjects.map((subject, i) => (
                <S.Select key={i} {...register(`artSportsScore.${12 + i}`)}>
                  {/* <option>선택</option> */}
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
                  {grades.map((grade, i) => (
                    <S.AttendanceGrade key={i}>{grade}</S.AttendanceGrade>
                  ))}
                </S.ValueSection>
                <S.ValueSection>
                  {grades.map((_, i) => (
                    <S.AttendanceInput
                      key={i}
                      {...register(`absentScore.${i}`)}
                    />
                  ))}
                </S.ValueSection>
                <S.ValueSection>
                  {grades.map((_, i) => (
                    <S.AttendanceInput
                      key={i}
                      {...register(`attendanceScore.${i}`)}
                    />
                  ))}
                </S.ValueSection>
                <S.ValueSection>
                  {grades.map((_, i) => (
                    <S.AttendanceInput
                      key={i}
                      {...register(`attendanceScore.${3 + i}`)}
                    />
                  ))}
                </S.ValueSection>
                <S.ValueSection>
                  {grades.map((_, i) => (
                    <S.AttendanceInput
                      key={i}
                      {...register(`attendanceScore.${6 + i}`)}
                    />
                  ))}
                </S.ValueSection>
                <S.ValueSection>
                  {grades.map((_, i) => (
                    <S.AttendanceInput
                      key={i}
                      {...register(`volunteerScore.${i}`)}
                    />
                  ))}
                </S.ValueSection>
              </S.AttendanceSection>
            </div>
          </S.Section>
          <S.Submit type="submit">저장</S.Submit>
        </S.CalculateSection>
      </S.CalculatePage>
    </>
  );
};

export default CalculatorPage;
