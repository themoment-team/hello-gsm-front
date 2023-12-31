import { useState } from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import { Enterprises } from 'components';

const EmploymentRate = [
  {
    year: 2020,
    ratio: 82,
    number: 59,
  },
  {
    year: 2021,
    ratio: 87,
    number: 66,
  },
  {
    year: 2022,
    ratio: 81,
    number: 59,
  },
  {
    year: 2023,
    ratio: 79,
    number: 59,
  },
];

const SchoolPage: NextPage = () => {
  const [curIndex, setCurIndex] = useState<number>(0);

  const handleStickClick = (index: number) => {
    if (EmploymentRate[index].ratio) setCurIndex(index);
  };

  return (
    <>
      <S.SchoolPage>
        <S.Section1>
          <S.SchoolName>광주소프트웨어마이스터고등학교</S.SchoolName>
          <S.VideoWrapper>
            <S.VideoBox>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/FBEBPnWafTk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </S.VideoBox>
            <S.VideoBox>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9J78QKkSvwg?si=IF3Zxb_eB-Oz_rjF"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </S.VideoBox>
          </S.VideoWrapper>
          <S.ToHomepage href="https://official.hellogsm.kr/" target="_blank">
            홈페이지
          </S.ToHomepage>
        </S.Section1>
        <S.Section2>
          <S.Section2Title>MOU 기업</S.Section2Title>
          <Enterprises />
        </S.Section2>
        <S.Section3>
          <S.Section3Title>취업률</S.Section3Title>
          <S.ColorMarkerWrapper>
            <S.ColorMarker>
              취업
              <S.Square />
            </S.ColorMarker>
          </S.ColorMarkerWrapper>
          <S.GraphWrapper>
            <S.Blank />
            {EmploymentRate.map(({ year, ratio }, index) => (
              <S.StickWrapper
                ratio={ratio}
                key={index}
                onClick={() => handleStickClick(index)}
              >
                {curIndex === index && ratio && (
                  <S.RatioText>{ratio}%</S.RatioText>
                )}
                <S.Stick ratio={ratio ?? 2.5} isCurIndex={curIndex === index} />
                <S.Dot />
                {curIndex === index ? (
                  <S.YearText>{year}년</S.YearText>
                ) : (
                  <S.NotCurrentYearText onClick={() => handleStickClick(index)}>
                    {year}년
                  </S.NotCurrentYearText>
                )}
              </S.StickWrapper>
            ))}
            <S.Line />
            <S.TotalWrapper>
              <S.MiddleTotal>
                {EmploymentRate[curIndex].year} 취업자 수
              </S.MiddleTotal>
              <S.BigTotal>{EmploymentRate[curIndex].number}명</S.BigTotal>
              <S.FlippedTotal>
                {EmploymentRate[curIndex].number}명
              </S.FlippedTotal>
            </S.TotalWrapper>
          </S.GraphWrapper>
        </S.Section3>
      </S.SchoolPage>
      <S.GreenBall />
      <S.BlueBall />
      <S.SkyBlueBall />
      <S.SmallBlueBall />
      <S.BigGreenBall />
    </>
  );
};

export default SchoolPage;
