import React from 'react';
import type { NextPage } from 'next';
import Header from 'components/Common/Header';
import * as S from './style';
import Footer from 'components/Common/Footer';
import Link from 'next/link';

const SchoolPage: NextPage = () => {
  return (
    <>
      <Header />
      <S.SchoolPage>
        <S.Section1>
          <S.SchoolName>광주소프트웨어마이스터고등학교</S.SchoolName>
          <S.VideoBox>
            {/* <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ajKbPblRU7Q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> */}
          </S.VideoBox>
          <Link href="http://gsm.gen.hs.kr/main/main.php" passHref>
            <S.ToHomepage>
              <S.LinkText>홈페이지</S.LinkText>
            </S.ToHomepage>
          </Link>
        </S.Section1>
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
