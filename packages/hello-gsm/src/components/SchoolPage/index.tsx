import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Header from '../Common/Header';
import * as S from './style';
import Footer from '../Common/Footer';
import Link from 'next/link';
import { css } from '@emotion/react';
import Graph from './Graph';

interface employType {
  x: string;
  y: number;
}

const SchoolPage: NextPage = () => {
  const [select, setSelect] = useState<number>(1);
  const [EmoployRate, setEmployRate] = useState<employType[]>([]);

  const data = [
    [
      { x: '취업 성공', y: 35 },
      { x: '취업 실패', y: 40 },
    ],
    [
      { x: '취업 성공', y: 50 },
      { x: '취업 실패', y: 30 },
    ],
    [
      { x: '취업 성공', y: 20 },
      { x: '취업 실패', y: 30 },
    ],
  ];
  const enterprises = [
    [
      '/Enterprises/samsung-sdi.png',
      '/Enterprises/samsung-sdi.png',
      '/Enterprises/samsung-sdi.png',
      '/Enterprises/samsung-sdi.png',
      '/Enterprises/samsung-sdi.png',
      '/Enterprises/samsung-sdi.png',
    ],
    [
      '/Enterprises/samsung-sdi.png',
      '/Enterprises/samsung-sdi.png',
      '/Enterprises/samsung-sdi.png',
      '/Enterprises/samsung-sdi.png',
      '/Enterprises/samsung-sdi.png',
      '/Enterprises/samsung-sdi.png',
    ],
    [
      '/Enterprises/samsung-sdi.png',
      '/Enterprises/samsung-sdi.png',
      '/Enterprises/samsung-sdi.png',
      '/Enterprises/samsung-sdi.png',
      '/Enterprises/samsung-sdi.png',
    ],
  ];

  const selectStyle = (index: number) =>
    select === index && { color: '#ffffff' };

  const selecting = (index: number) => setSelect(index);

  useEffect(() => {
    setEmployRate(data[select - 1]);
  }, [select]);

  return (
    <>
      <Header />
      <S.SchoolPage>
        <S.Section1>
          <S.SchoolName>광주소프트웨어마이스터고등학교</S.SchoolName>
          <S.VideoBox>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ajKbPblRU7Q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </S.VideoBox>
          <Link href="http://gsm.gen.hs.kr/main/main.php" passHref>
            <S.ToHomepage>
              <S.LinkText>홈페이지</S.LinkText>
            </S.ToHomepage>
          </Link>
        </S.Section1>
        <S.Section2>
          <S.Section2Title>MOU 기업</S.Section2Title>
          <S.EnterpriseWrap>
            {enterprises.map((enterprise, index: number) => (
              <S.EnterpriseLine
                key={index}
                css={css`
                  ${index === 2 && 'width: 935px'}
                `}
              >
                {enterprise.map((name: string, index: number) => (
                  <S.Enterprise
                    key={index}
                    css={css`
                      background-image: url(${name});
                    `}
                  ></S.Enterprise>
                ))}
              </S.EnterpriseLine>
            ))}
          </S.EnterpriseWrap>
        </S.Section2>
        <S.Section3>
          <S.Section3Title>취업률</S.Section3Title>
          <S.GraphWrap>
            <S.SelectBox>
              <S.SelectBar />
              <S.SelectOptionBox>
                <S.SelectOption
                  css={selectStyle(1)}
                  onClick={() => selecting(1)}
                >
                  1기
                </S.SelectOption>
                <S.SelectOption
                  css={selectStyle(2)}
                  onClick={() => selecting(2)}
                >
                  2기
                </S.SelectOption>
                <S.SelectOption
                  css={selectStyle(3)}
                  onClick={() => selecting(3)}
                >
                  3기
                </S.SelectOption>
              </S.SelectOptionBox>
            </S.SelectBox>
            <S.GraphBox>
              <S.Title>총 80명</S.Title>
              <S.Graph>
                <Graph data={EmoployRate} />
              </S.Graph>
            </S.GraphBox>
          </S.GraphWrap>
        </S.Section3>
      </S.SchoolPage>
      <S.GreenBall />
      <S.BlueBall />
      <S.SkyBlueBall />
      <S.SmallBlueBall />
      <Footer />
    </>
  );
};

export default SchoolPage;
