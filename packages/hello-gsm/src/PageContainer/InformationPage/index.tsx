import type { NextPage } from 'next';
import { Header } from 'components';
import Link from 'next/link';
import * as S from './style';
import { css } from '@emotion/react';
import useStore from 'Stores/StoreContainer';
import { useEffect, useState } from 'react';

const InformationPage: NextPage = () => {
  const { setLogged } = useStore();
  const [progressIndex, setProgressIndex] = useState<number>(1);

  const progressArray = [
    '원서 작성',
    '성적 작성',
    '원서 학교 제출',
    '1차 전형',
    '2차 전형',
    '결과 발표',
  ];

  useEffect(() => {
    setLogged(true);
  }, []);

  return (
    <S.InformationPage>
      <Header />
      <S.InformationContent>
        <S.InformationHeader>
          <S.Title>입학 절차</S.Title>
          <S.ProgressBox>
            <S.ProgressContent>
              {progressArray.map((item, index) => (
                <S.Progress key={index}>
                  <S.ProgressText>{item}</S.ProgressText>
                  <S.Point />
                </S.Progress>
              ))}
            </S.ProgressContent>
            <S.ProgressBar />
          </S.ProgressBox>
        </S.InformationHeader>
        {progressIndex === (1 || 6) ? (
          <S.NextController>다음</S.NextController>
        ) : (
          <S.ControllerBox>
            <S.PrevController>이전</S.PrevController>
            <S.NextController>다음</S.NextController>
          </S.ControllerBox>
        )}
      </S.InformationContent>
    </S.InformationPage>
  );
};

export default InformationPage;
