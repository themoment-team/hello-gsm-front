import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import Link from 'next/link';
import { Header, Footer, MainPageDescription } from 'components';
import { css } from '@emotion/react';
import { StatusType } from 'type/user';
import useStore from 'Stores/StoreContainer';

const MainPage: NextPage<StatusType> = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const [isPC, setIsPC] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const { logged } = useStore();

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

  useEffect(() => {
    setIsMobile(window.innerWidth < 640 ? true : false);
    setIsPC(
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi|mobi/i.test(
        navigator.userAgent,
      ),
    );
    window.onresize = () => {
      setIsMobile(window.innerWidth < 640 ? true : false);
    };
  }, []);

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
            {isPC ? (
              !data?.application?.isFinalSubmission ? (
                <Link href={logged ? '/information' : '/auth/signin'} passHref>
                  <S.ToApply>원서 접수 하러가기</S.ToApply>
                </Link>
              ) : (
                <S.ToApply
                  css={css`
                    background: #a2a2a2;
                    border-radius: 12px;
                    box-shadow: 0px 5px 20px 0px #a2a2a2;
                    pointer-events: none;
                  `}
                >
                  접수 완료
                </S.ToApply>
              )
            ) : (
              <S.ToApply
                css={css`
                  height: 65px;
                  background: #615d6c;
                  box-shadow: none;
                  :hover {
                    box-shadow: none;
                  }
                `}
              >
                원서 접수는 pc로만 가능해요
              </S.ToApply>
            )}
            <S.ApplyTerm>접수 기간: 10.18~10.21</S.ApplyTerm>
            <S.Underline />
          </S.ApplyBox>
        </S.TitleWrap>
        <Link href="/calculator/test" passHref>
          <S.ToCalculator>모의 성적 계산 해보기</S.ToCalculator>
        </Link>
        <S.ContentBox>
          {!isMobile ? (
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
                결과 발표
              </S.ContentSelect>
            </S.ContentHeader>
          ) : (
            <S.ContentHeader>
              <S.ContentHeaderLine>
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
              </S.ContentHeaderLine>
              <S.ContentHeaderLine>
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
                  결과 발표
                </S.ContentSelect>
              </S.ContentHeaderLine>
            </S.ContentHeader>
          )}
          <MainPageDescription selectedIndex={selectedIndex} data={data} />
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
