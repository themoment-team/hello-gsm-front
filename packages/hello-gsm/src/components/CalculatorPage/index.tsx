import type { NextPage } from 'next';
import Header from 'components/Common/Header';
import * as S from './style';
import * as I from '../../Assets/svg';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

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
  const { register, handleSubmit, watch, control } = useForm<ScoreForm>();

  const Rounds = (num: number) => {
    return Number(num.toFixed(4));
  }; // 소수점 넷째 자리에서 반올림 후 형변환

  // 출석점수 환산
  const Attendance = (absent: Array<number>, attendance: Array<number>) => {
    let result = 30;
    absent.map((arr, i) => {
      absent[i] = Number(arr);
    }); // 배열을 number형변환
    attendance.map((arr, i) => {
      attendance[i] = Number(arr);
    }); // 배열을 number형변환
    const absentSum = absent.reduce((accumulator, curr) => accumulator + curr); // 배열 총합계 저장
    if (absentSum >= 10) return 0;

    const attendanceSum = Math.floor(
      attendance.reduce((accumulator, curr) => accumulator + curr) / 3,
    ); // 배열 총합계 저장, 소수점 버림

    result = result - 3 * (absentSum + attendanceSum);
    if (result < 0) return 0; // 결과가 음수이면 0 반환
    return result;
  };

  // 봉사점수 환산
  const Volunteer = (array: Array<number>) => {
    let result = 0;
    array.map((arr, i) => {
      const score = array[i];
      if (score >= 7) result += 10;
      else if (score >= 6) result += 8;
      else if (score >= 5) result += 6;
      else if (score >= 4) result += 4;
      else result += 2;
    });
    return result;
  };

  // 성적 계산
  const Calculate = (array: Array<number>, grade: number) => {
    array.map((arr, i) => {
      array[i] = Number(arr);
    }); // 배열을 number형변환

    const sum = array.reduce((accumulator, curr) => accumulator + curr); // 배열 총합계 저장
    let result = 0; // 결과
    switch (grade) {
      case 2:
        result = 54 * (sum / (array.length * 5)); // 2학년 공식 적용
        break;
      case 3:
        result = 72 * (sum / (array.length * 5)); // 3학년 공식 적용
        break;
      case 4:
        result = 60 * (sum / (array.length * 5)); // 예체능 공식 적용
        break;
    }
    return Rounds(result);
  };

  const onValid = (validForm: ScoreForm) => {
    const score2_1 = Calculate(validForm.score2_1, 2); // 2학년 1학기
    const score2_2 = Calculate(validForm.score2_2, 2); // 2학년 2학기
    const score3_1 = Calculate(validForm.score3_1, 3); // 3학년 1학기

    const generalCurriculumScoreSubtotal = Rounds(
      score2_1 + score2_2 + score3_1,
    ); // 소계
    const artSportsScore = Calculate(validForm.artSportsScore, 4); // 예체능
    const attendanceScore = Attendance(
      validForm.absentScore,
      validForm.attendanceScore,
    ); // 출석점수
    const volunteerScore = Volunteer(validForm.volunteerScore); // 봉사점수
    const curriculumScoreSubtotal = Rounds(
      generalCurriculumScoreSubtotal + artSportsScore,
    );
    const nonCurriculumScoreSubtotal = Rounds(attendanceScore + volunteerScore); //비교과 성적 소계
    const scoreTotal = Rounds(
      curriculumScoreSubtotal + nonCurriculumScoreSubtotal,
    );
  };

  const lines = ['일반교과', '체육•예술 교과', '비교과'];
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
