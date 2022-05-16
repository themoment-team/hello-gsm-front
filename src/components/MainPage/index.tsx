import React, { useState } from 'react';
import type { NextPage } from 'next';
import Header from 'components/Common/Header';
import * as S from './style';
import Link from 'next/link';
import Footer from 'components/Common/Footer';
import MainPageDescription from 'components/MainPageDescription';
import { css } from '@emotion/react';

const MainPage: NextPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);

  const selectedStyle = (index: number) =>
    selectedIndex === index &&
    css`
      color: #ffffff;
      font-weight: 700;
      font-size: '24px';
      &:before,
      &:after {
        content: 'ㅣ';
      }
    `;

  return (
    <S.MainPage>
      <Header />
      <S.MainContent>
        <S.TitleWrap>
          <S.TitleBox>
            <S.Title>
              광주소프트웨어
              <br />
              마이스터고등학교
            </S.Title>
            <S.Description>
              광주소프트웨어마이스터고등학교 입학 지원 시스템
            </S.Description>
          </S.TitleBox>
          <S.ApplyBox>
            <Link href="/information" passHref>
              <S.ToApply>
                <S.ToApplyText>원서 접수</S.ToApplyText>
              </S.ToApply>
            </Link>
            <S.ApplyTerm>접수 기간: 10.18~10.21</S.ApplyTerm>
            <S.Underline />
          </S.ApplyBox>
        </S.TitleWrap>
        <S.ContentBox>
          <S.ContentHeader>
            <S.ContentSelect
              css={selectedStyle(1)}
              onClick={() => setSelectedIndex(1)}
            >
              원서 작성
            </S.ContentSelect>
            <S.ContentSelect
              css={selectedStyle(2)}
              onClick={() => setSelectedIndex(2)}
            >
              원서 학교 제출
            </S.ContentSelect>
            <S.ContentSelect
              css={selectedStyle(3)}
              onClick={() => setSelectedIndex(3)}
            >
              1차 서류 전형
            </S.ContentSelect>
            <S.ContentSelect
              css={selectedStyle(4)}
              onClick={() => setSelectedIndex(4)}
            >
              2차 면접
            </S.ContentSelect>
            <S.ContentSelect
              css={selectedStyle(5)}
              onClick={() => setSelectedIndex(5)}
            >
              최종 결과 발표
            </S.ContentSelect>
          </S.ContentHeader>
          <MainPageDescription selectedIndex={selectedIndex} />
        </S.ContentBox>
      </S.MainContent>
      <S.GreenBall />
      <S.BigBlueBall />
      <S.YellowBall />
      <S.OrangeBall />
      <S.SmallBlueBall />
      <S.MintBall />
      <S.NanoBlueBall />
      <Footer />
    </S.MainPage>
  );
};

export default MainPage;
