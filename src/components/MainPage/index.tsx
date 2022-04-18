import React from 'react';
import type { NextPage } from 'next';
import Header from 'components/Common/Header';
import * as S from './style';
import Link from 'next/link';

const MainPage: NextPage = () => {
  return (
    <>
      <Header />
      <S.TitleWrap>
        <S.TitleBox>
          <S.Title>광주 소프트웨어 마이스터고등학교</S.Title>
          <S.Description>
            광주소프트웨어마이스터고등학교 입학 지원 시스템
          </S.Description>
        </S.TitleBox>
        <S.ApplyBox>
          <Link href="/apply" passHref>
            <S.ToApply>
              <S.ToApplyText>원서 접수</S.ToApplyText>
            </S.ToApply>
          </Link>
          <S.ApplyTerm>접수 기간: 4.03~4.15</S.ApplyTerm>
          <S.Underline />
        </S.ApplyBox>
      </S.TitleWrap>
    </>
  );
};

export default MainPage;
