import React from 'react';
import type { NextPage } from 'next';
import Header from 'components/Common/Header';
import * as S from './style';
import * as I from '../../Assets/svg';
import { useForm, useFieldArray, Controller, useWatch } from 'react-hook-form';

const CalculatorPage: NextPage = () => {
  const { register, handleSubmit, watch, control } = useForm();
  const { fields, append, prepend, remove, swap, move, insert, replace } =
    useFieldArray({
      control,
      name: 'test',
    });
  const onValid = validForm => {
    console.log(validForm.과학 + validForm.수학);
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
  const semester = [
    '1학년 1학기',
    '1학년 2학기',
    '2학년 1학기',
    '2학년 2학기',
    '3학년 1학기',
  ];

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
              <S.Semester>1학년 1학기</S.Semester>
              {subjects.map((subject, i) => (
                <S.Select {...register(subject)}>
                  <option selected>선택</option>
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                  <option value={2}>D</option>
                  <option value={1}>E</option>
                </S.Select>
              ))}
            </S.SemesterSection>
            <S.SemesterSection>
              <S.Semester>1학년 2학기</S.Semester>
              {subjects.map((subject, i) => (
                <S.Select {...register(subject)}>
                  <option selected>선택</option>
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                  <option value={2}>D</option>
                  <option value={1}>E</option>
                </S.Select>
              ))}
            </S.SemesterSection>
            <S.SemesterSection>
              <S.Semester>2학년 1학기</S.Semester>
              {subjects.map((subject, i) => (
                <S.Select {...register(subject)}>
                  <option selected>선택</option>

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
                <S.Select {...register(subject)}>
                  <option selected>선택</option>
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
                <S.Select {...register(subject)}>
                  <option selected>선택</option>
                  <option value={5}>A</option>
                  <option value={4}>B</option>
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
                <S.Select {...register('1_1')}>
                  <option selected>선택</option>
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                  <option value={2}>D</option>
                  <option value={1}>E</option>
                </S.Select>
              ))}
            </S.SemesterSection>
            <S.SemesterSection>
              <S.Semester>1학년 2학기</S.Semester>
              {nonSubjects.map((subject, i) => (
                <S.Select {...register('1_1')}>
                  <option selected>선택</option>
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                  <option value={2}>D</option>
                  <option value={1}>E</option>
                </S.Select>
              ))}
            </S.SemesterSection>
            <S.SemesterSection>
              <S.Semester>2학년 1학기</S.Semester>
              {nonSubjects.map((subject, i) => (
                <S.Select {...register('1_1')}>
                  <option selected>선택</option>
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
              {nonSubjects.map((subject, i) => (
                <S.Select {...register('1_1')}>
                  <option selected>선택</option>
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
              {nonSubjects.map((subject, i) => (
                <S.Select {...register('1_1')}>
                  <option selected>선택</option>
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                  <option value={2}>D</option>
                  <option value={1}>E</option>
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
          <S.Submit value="저장" type="submit" />
        </S.CalculateSection>
      </S.CalculatePage>
    </>
  );
};

export default CalculatorPage;
