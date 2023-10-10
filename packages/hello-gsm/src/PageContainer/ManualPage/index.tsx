import type { NextPage } from 'next';
import * as S from 'PageContainer/InformationPage/style';
import * as DS from 'components/InformationDescription/style';
import * as I from 'Assets/svg';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Image from 'next/image';

const ManualPageStyle = styled.div`
  height: 100vh;
  position: relative;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 10px;
    border: 4px solid #0f0921;
    height: 56px;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #cbcbcb;
  }
`;

const KakaoAccountButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 328px;
  height: 45px;
  background: #fee500;
  border-radius: 10px;
  cursor: pointer;
  color: #0f0921;
  font-size: 20px;
  border: none;
  p {
    text-align: center;
    line-height: 45px;
  }
  svg {
    width: 25px;
    height: 45px;
    margin: 0 40px 0 20px;
  }
`;

const ManualPage: NextPage = () => {
  const location = () =>
    window.open('https://accounts.kakao.com/weblogin/account');

  return (
    <ManualPageStyle>
      <S.InformationContent
        css={css`
          height: 460px;
        `}
      >
        <S.Title>다른 계정으로 로그인 하는법</S.Title>
        <DS.Description>
          <DS.DescriptionText
            css={css`
              font-size: 20px;
              text-align: center;
            `}
          >
            다른 계정으로 로그인이 필요하신 지원자 분들은 아래의
            <br />
            <DS.Highlight>카카오계정 홈페이지</DS.Highlight>에서{' '}
            <DS.Highlight>로그아웃 후</DS.Highlight>
            <br />
            <DS.Highlight>Hello,GSM</DS.Highlight> 에서 다른 계정으로{' '}
            <DS.Highlight>로그인</DS.Highlight> 부탁드립니다.
          </DS.DescriptionText>
        </DS.Description>
        <KakaoAccountButton onClick={location}>
          <Image
            src="/Images/KakaoIcon.png"
            alt="kakao아이콘"
            width={30}
            height={30}
          />
          <p>카카오계정 홈페이지</p>
        </KakaoAccountButton>
      </S.InformationContent>
      <S.YellowBall />
      <S.BlueBall />
      <S.SmallBlueBall />
    </ManualPageStyle>
  );
};

export default ManualPage;
