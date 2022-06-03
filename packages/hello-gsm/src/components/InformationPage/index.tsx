import React from 'react';
import type { NextPage } from 'next';
import { Header, SEOHelmet } from 'components';
import Link from 'next/link';
import * as S from './style';
import { css } from '@emotion/react';

const InformationPage: NextPage = () => {
  return (
    <>
      <SEOHelmet seoTitle="유의사항 및 입학 절차" />
      <S.InformationPage>
        <Header />
        <S.InformationContent>
          <S.InformationBox>
            <S.Number>1.</S.Number>
            <S.Title>원서 작성</S.Title>
            <S.Point />
            <S.Content>
              확인버튼을 눌러 원서를 작성한 후 마이페이지에서 최종 제출버튼을
              눌러
              <br />
              입학 신청을 완료합니다.
              <br />
              원서 작성 중에 웹 사이트에서 나가더라도 내 정보 페이지에서
              계속해서
              <br />
              수정할 수 있습니다.
            </S.Content>
          </S.InformationBox>
          <S.InformationBox>
            <S.Number>2.</S.Number>
            <S.Title>성적 작성</S.Title>
            <S.Point />
            <S.Content>
              중학교 성적 또는 검정고시 성적을 바탕으로 성적 점수를 산출합니다.
              <br />
              증명서류를 제출해야 하니 입력한 점수와 실제 점수가 같은지 꼭
              확인해
              <br />
              주시기 바랍니다.
            </S.Content>
          </S.InformationBox>
          <S.InformationBox>
            <S.Number>3.</S.Number>
            <S.Title>원서 학교 제출</S.Title>
            <S.Point />
            <S.Content>
              작성하신 입학 원서와 그 외 서류들을 마이페이지에서 저장 후
              출력하여
              <br />
              수기 부분을 모두 작성하신 후 10월 17일 부터 10월 20일까지 학교
              행정실에
              <br />
              제출해야 합니다.
            </S.Content>
          </S.InformationBox>
          <S.InformationBox>
            <S.Number>4.</S.Number>
            <S.Title>1차 서류 심사</S.Title>
            <S.Point />
            <S.Content>
              내신과 봉사시간, 출결현황을 점수로 환산하여
              <br />
              정원의 1.5배의 인원을 선출합니다.
            </S.Content>
          </S.InformationBox>
          <S.InformationBox>
            <S.Number>5.</S.Number>
            <S.Title>2차 면접</S.Title>
            <S.Point />
            <S.Content>
              인성과 문제해결 능력을 중심으로 시험을 치룹니다.
            </S.Content>
          </S.InformationBox>
          <S.InformationBox>
            <S.Number>6.</S.Number>
            <S.Title>결과 발표</S.Title>
            <S.Point />
            <S.Content>
              1차 서류 심사와 2차 면접을 통해 최종 합격자를 선출합니다.
            </S.Content>
          </S.InformationBox>
          <Link href="/apply" passHref>
            <S.Confirm>확인</S.Confirm>
          </Link>
        </S.InformationContent>
        <S.GreenBall
          css={css`
            top: 514px;
            left: 14%;
          `}
        />
        <S.BigBlueBall
          css={css`
            top: 438px;
            left: 83.5%;
          `}
        />
        <S.SmallBlueBall
          css={css`
            top: 1004px;
            left: 22%;
          `}
        />
        <S.LightBlueBall />
        <S.BigBlueBall
          css={css`
            top: 2500px;
            right: 80%;
          `}
        />
        <S.SmallBlueBall
          css={css`
            top: 3152px;
            left: 86%;
          `}
        />
        <S.GreenBall
          css={css`
            top: 3247px;
            left: 78%;
          `}
        />
      </S.InformationPage>
    </>
  );
};

export default InformationPage;
