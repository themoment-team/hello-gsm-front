import React from 'react';
import type { NextPage } from 'next';
import Header from 'components/Common/Header';
import * as S from './style';
import * as I from '../../Assets/svg';
import { useForm } from 'react-hook-form';

const CalculatorPage: NextPage = () => {
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
  const { register, handleSubmit, watch } = useForm();

  const onValid = validForm => {
    console.log(validForm.과학 + validForm.수학);
  };

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
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                  <option value={2}>D</option>
                  <option value={1}>E</option>
                  <option value="자유학기제">자유학기제</option>
                </S.Select>
              ))}
            </S.SemesterSection>
            <S.SemesterSection>
              <S.Semester>1학년 2학기</S.Semester>
              {subjects.map((subject, i) => (
                <S.Select {...register(subject)}>
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                  <option value={2}>D</option>
                  <option value={1}>E</option>
                  <option value="자유학기제">자유학기제</option>
                </S.Select>
              ))}
            </S.SemesterSection>
            <S.SemesterSection>
              <S.Semester>2학년 1학기</S.Semester>
              {subjects.map((subject, i) => (
                <S.Select {...register(subject)}>
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                  <option value={2}>D</option>
                  <option value={1}>E</option>
                  <option value="자유학기제">자유학기제</option>
                </S.Select>
              ))}
            </S.SemesterSection>
            <S.SemesterSection>
              <S.Semester>2학년 2학기</S.Semester>
              {subjects.map((subject, i) => (
                <S.Select {...register(subject)}>
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                  <option value={2}>D</option>
                  <option value={1}>E</option>
                  <option value="자유학기제">자유학기제</option>
                </S.Select>
              ))}
            </S.SemesterSection>
            <S.SemesterSection>
              <S.Semester>3학년 1학기</S.Semester>
              {subjects.map((subject, i) => (
                <S.Select {...register(subject)}>
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                  <option value={2}>D</option>
                  <option value={1}>E</option>
                  <option value="자유학기제">자유학기제</option>
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
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                  <option value={2}>D</option>
                  <option value={1}>E</option>
                  <option value="자유학기제">자유학기제</option>
                </S.Select>
              ))}
            </S.SemesterSection>
            <S.SemesterSection>
              <S.Semester>1학년 2학기</S.Semester>
              {nonSubjects.map((subject, i) => (
                <S.Select {...register('1_1')}>
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                  <option value={2}>D</option>
                  <option value={1}>E</option>
                  <option value="자유학기제">자유학기제</option>
                </S.Select>
              ))}
            </S.SemesterSection>
            <S.SemesterSection>
              <S.Semester>2학년 1학기</S.Semester>
              {nonSubjects.map((subject, i) => (
                <S.Select {...register('1_1')}>
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                  <option value={2}>D</option>
                  <option value={1}>E</option>
                  <option value="자유학기제">자유학기제</option>
                </S.Select>
              ))}
            </S.SemesterSection>
            <S.SemesterSection>
              <S.Semester>2학년 2학기</S.Semester>
              {nonSubjects.map((subject, i) => (
                <S.Select {...register('1_1')}>
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                  <option value={2}>D</option>
                  <option value={1}>E</option>
                  <option value="자유학기제">자유학기제</option>
                </S.Select>
              ))}
            </S.SemesterSection>
            <S.SemesterSection>
              <S.Semester>3학년 1학기</S.Semester>
              {nonSubjects.map((subject, i) => (
                <S.Select {...register('1_1')}>
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                  <option value={2}>D</option>
                  <option value={1}>E</option>
                  <option value="자유학기제">자유학기제</option>
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
                  <option value={5}>A</option>
                  <option value={4}>B</option>
                  <option value={3}>C</option>
                  <option value={2}>D</option>
                  <option value={1}>E</option>
                  <option value="자유학기제">자유학기제</option>
                </S.Select>
              ))}
            </S.SemesterSection>
          </S.Section>
          <div>
            <input type="submit" value="테스트" />
            <button>..</button>
          </div>
        </S.CalculateSection>
      </S.CalculatePage>
    </>
  );
};

export default CalculatorPage;
