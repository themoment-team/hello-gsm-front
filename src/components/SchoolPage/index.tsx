import React from 'react';
import type { NextPage } from 'next';
import Header from 'components/Common/Header';
import * as S from './style';
import Footer from 'components/Common/Footer';
import Link from 'next/link';
import { css } from '@emotion/react';
import Graph from './Graph';

const SchoolPage: NextPage = () => {
  const data = [
    { x: '취업성공', y: 35 },
    { x: '취업 실패', y: 40 },
  ];

  const enterprises = [
    '/Enterprises/samsung-sdi.png',
    '/Enterprises/samsung-sdi.png',
    '/Enterprises/samsung-sdi.png',
    '/Enterprises/samsung-sdi.png',
    '/Enterprises/samsung-sdi.png',
    '/Enterprises/samsung-sdi.png',
  ];

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
          <S.EnterpriseWrap>
            {enterprises.map((enterprise, index: number) => (
              <S.Enterprise
                key={index}
                css={css`
                  background-image: url(${enterprise});
                `}
              />
            ))}
          </S.EnterpriseWrap>
        </S.Section2>
        <S.Section3>
          <S.Section3Title>취업률</S.Section3Title>
          <S.GraphWrap>
            <S.SelectBox>
              <S.SelectBar></S.SelectBar>
            </S.SelectBox>
            <S.GraphBox>
              <S.Title>총 80명</S.Title>
              <S.Graph>
                <Graph data={data} />
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
