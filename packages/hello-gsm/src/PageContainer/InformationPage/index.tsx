import type { NextPage } from 'next';
import { Header, InformationDescription } from 'components';
import Link from 'next/link';
import * as S from './style';
import { css } from '@emotion/react';
import useStore from 'Stores/StoreContainer';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const InformationPage: NextPage = () => {
  const { setLogged } = useStore();
  const [progressIndex, setProgressIndex] = useState<number>(1);
  const { push } = useRouter();

  const progressArray = [
    '원서 작성',
    '성적 작성',
    '원서 학교 제출',
    '1차 전형',
    '2차 전형',
    '결과 발표',
  ];

  const previusIndex = () => {
    setProgressIndex(index => (index > 1 ? --index : index));
  };

  const nextIndex = () => {
    progressIndex === 6 && push('/apply');
    setProgressIndex(index => (index < 6 ? ++index : index));
  };

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
        <InformationDescription index={progressIndex} />
        {progressIndex > 1 ? (
          <S.ControllerBox>
            <S.PrevController onClick={previusIndex}>이전</S.PrevController>
            <S.NextController onClick={nextIndex}>다음</S.NextController>
          </S.ControllerBox>
        ) : (
          <S.NextController onClick={nextIndex}>다음</S.NextController>
        )}
      </S.InformationContent>
      <S.YellowBall />
      <S.BlueBall />
      <S.SmallBlueBall />
    </S.InformationPage>
  );
};

export default InformationPage;
