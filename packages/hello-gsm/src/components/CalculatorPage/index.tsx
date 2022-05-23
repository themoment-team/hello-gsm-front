import type { NextPage } from 'next';
import Header from 'components/Common/Header';
import * as S from './style';
import * as I from '../../Assets/svg';
import { useForm, useFieldArray } from 'react-hook-form';

const CalculatorPage: NextPage = () => {
  const { register, handleSubmit, watch, control } = useForm();

  const calculate = (array: any, grade: number) => {
    let result = 0;
    let sum = 0;
    array.map((test, i) => {
      array[i] = Number(test);
    });
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    sum = array.reduce((accumulator, curr) => accumulator + curr);
    console.log(sum);

    switch (grade) {
      case 2:
        result = 54 * (sum / (array.length * 5));
        break;
      case 3:
        result = 72 * (sum / (array.length * 5));
        break;
      case 4:
        result = 60 * (sum / (array.length * 5));
        break;
    }

    return result;
  };

  const onValid = validForm => {
    console.log(validForm);
    const score2_1 = calculate(validForm.score2_1, 2);
    const score2_2 = calculate(validForm.score2_2, 2);
    const score3_1 = calculate(validForm.score3_1, 3);

    const generalCurriculumScoreSubtotal = score2_1 + score2_2 + score3_1;
    const artSportsScore = calculate(validForm.artSportsScore, 4);
    const curriculumScoreSubtotal =
      generalCurriculumScoreSubtotal + artSportsScore;
    console.log(
      score2_1,
      score2_2,
      score3_1,
      generalCurriculumScoreSubtotal,
      artSportsScore,
    );
  };

  const Lines = ['일반교과', '체육•예술 교과', '비교과'];
  const subjects = [
    '국어',
    '도덕',
    '사회',
    '역사',
    '수학',
    '과학',
    '기술가정',
    '영어',
  ];
  const nonSubjects = ['체육', '미술', '음악'];

  return (
    <>
      <Header />
      <S.Title>성적입력</S.Title>
      <S.CalculatePage>
        <S.LineList>
          {Lines.map((line, i) => (
            <S.Line key={i}>{line}</S.Line>
          ))}
        </S.LineList>
        <S.CalculateSection onSubmit={handleSubmit(onValid)}>
          <S.Section>
            <S.SemesterSection>
              <div>
                <I.CrossRectangle />
              </div>
              {subjects.map((subject, i) => (
                <S.Subject key={i}>{subject}</S.Subject>
              ))}
            </S.SemesterSection>

            <S.SemesterSection>
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
            </S.SemesterSection>
            <S.SemesterSection>
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
            </S.SemesterSection>
            <S.SemesterSection>
              <S.Semester>3학년 1학기</S.Semester>
              {subjects.map((subject, i) => (
                <S.Select {...register(`score3_1.${i}`)} key={i}>
                  {/* <option>선택</option> */}

                  <option value={5}>A</option>
                  {/* <option value={4}>B</option> */}
                  <option value={3}>C</option>
                  <option value={2}>D</option>
                  <option value={1}>E</option>
                </S.Select>
              ))}
            </S.SemesterSection>
          </S.Section>
          <S.Section style={{ height: 200 }}>
            <S.SemesterSection>
              <div>
                <I.CrossRectangle />
              </div>
              {nonSubjects.map((subject, i) => (
                <S.Subject key={i}>{subject}</S.Subject>
              ))}
            </S.SemesterSection>
            <S.SemesterSection>
              <S.Semester>1학년 1학기</S.Semester>
              {nonSubjects.map((subject, i) => (
                <S.Select key={i} {...register(`artSportsScore.${i}`)}>
                  {/* <option>선택</option> */}
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                </S.Select>
              ))}
            </S.SemesterSection>
            <S.SemesterSection>
              <S.Semester>1학년 2학기</S.Semester>
              {nonSubjects.map((subject, i) => (
                <S.Select key={i} {...register(`artSportsScore.${3 + i}`)}>
                  {/* <option>선택</option> */}
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                </S.Select>
              ))}
            </S.SemesterSection>
            <S.SemesterSection>
              <S.Semester>2학년 1학기</S.Semester>
              {nonSubjects.map((subject, i) => (
                <S.Select key={i} {...register(`artSportsScore.${6 + i}`)}>
                  {/* <option>선택</option> */}
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                </S.Select>
              ))}
            </S.SemesterSection>
            <S.SemesterSection>
              <S.Semester>2학년 2학기</S.Semester>
              {nonSubjects.map((subject, i) => (
                <S.Select key={i} {...register(`artSportsScore.${9 + i}`)}>
                  {/* <option>선택</option> */}
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                </S.Select>
              ))}
            </S.SemesterSection>
            <S.SemesterSection>
              <S.Semester>3학년 1학기</S.Semester>
              {nonSubjects.map((subject, i) => (
                <S.Select key={i} {...register(`artSportsScore.${12 + i}`)}>
                  {/* <option>선택</option> */}
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                </S.Select>
              ))}
            </S.SemesterSection>
          </S.Section>

          <S.Section style={{ height: 260 }}>
            <table style={{ height: 260 }}>
              <tbody>
                <tr>
                  <S.Grade rowSpan={2}>학년</S.Grade>
                  <S.Attendance colSpan={4}>출결상황</S.Attendance>
                  <S.Attendance rowSpan={2}>봉사활동</S.Attendance>
                </tr>
                <tr>
                  <S.Attendance>결석</S.Attendance>
                  <S.Attendance>결석</S.Attendance>
                  <S.Attendance>결석</S.Attendance>
                  <S.Attendance>결석</S.Attendance>
                </tr>
                <tr>
                  <S.Grade>1</S.Grade>
                  <td>
                    <S.AttendanceInput type="number" />
                  </td>
                  <td>
                    <S.AttendanceInput type="number" />
                  </td>
                  <td>
                    <S.AttendanceInput type="number" />
                  </td>
                  <td>
                    <S.AttendanceInput type="number" />
                  </td>
                  <td>
                    <S.AttendanceInput type="number" />
                  </td>
                </tr>
                <tr>
                  <S.Grade>2</S.Grade>
                  <td>
                    <S.AttendanceInput type="number" />
                  </td>
                  <td>
                    <S.AttendanceInput type="number" />
                  </td>
                  <td>
                    <S.AttendanceInput type="number" />
                  </td>
                  <td>
                    <S.AttendanceInput type="number" />
                  </td>
                  <td>
                    <S.AttendanceInput type="number" />
                  </td>
                </tr>
                <tr>
                  <S.Grade>3</S.Grade>
                  <td>
                    <S.AttendanceInput type="number" />
                  </td>
                  <td>
                    <S.AttendanceInput type="number" />
                  </td>
                  <td>
                    <S.AttendanceInput type="number" />
                  </td>
                  <td>
                    <S.AttendanceInput type="number" />
                  </td>
                  <td>
                    <S.AttendanceInput type="number" />
                  </td>
                </tr>
              </tbody>
            </table>
          </S.Section>
          <S.Submit type="submit">저장</S.Submit>
        </S.CalculateSection>
      </S.CalculatePage>
    </>
  );
};

export default CalculatorPage;
function calculate(score2_1: any, arg1: number) {
  throw new Error('Function not implemented.');
}
