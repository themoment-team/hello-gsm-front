import type { NextPage } from 'next';
import { InformationDescription } from 'components';
import * as S from './style';
import { css } from '@emotion/react';
import useStore from 'Stores/StoreContainer';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const InformationPage: NextPage = () => {
  const { setLogged } = useStore();
  const [progressIndex, setProgressIndex] = useState<number>(0);
  const { push } = useRouter();

  const progressArray = [
    '유의 사항',
    '원서 및 성적 작성',
    '원서 학교 제출',
    '1차 전형',
    '2차 전형',
    '결과 발표',
  ];

  useEffect(() => {
    setLogged(true);
  }, []);

  const previusIndex = () => {
    setProgressIndex(index => (index > 0 ? --index : index));
  };

  const nextIndex = () => {
    progressIndex === 5 && push('/apply');
    setProgressIndex(index => (index < 5 ? ++index : index));
  };

  const highlightStyle = css`
    width: 127px;
    height: 41px;
    background: #19baff;
    p {
      color: #0f0921;
      font-weight: 700;
      font-size: 16px;
    }
    div {
      background: #ffffff;
      width: 10px;
      height: 10px;
      top: 36px;
    }
  `;

  return (
    <S.InformationPage>
      <S.InformationContent>
        <S.InformationHeader>
          <S.Title>입학 절차</S.Title>
          <S.ProgressBox>
            <S.ProgressContents>
              {progressArray.map((item, index) => (
                <S.Progress
                  key={index}
                  css={progressIndex === index && highlightStyle}
                >
                  <S.ProgressText>{item}</S.ProgressText>
                  <S.Point />
                </S.Progress>
              ))}
            </S.ProgressContents>
            <S.ProgressBar />
          </S.ProgressBox>
        </S.InformationHeader>
        <InformationDescription index={progressIndex} />
        {progressIndex > 0 ? (
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
