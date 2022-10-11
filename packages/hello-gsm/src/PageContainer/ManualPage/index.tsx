import { Header } from 'components';
import type { NextPage } from 'next';
import * as S from 'PageContainer/InformationPage/style';
import * as DS from 'components/InformationDescription/style';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

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

const ManualPage: NextPage = () => {
  const location = () =>
    window.open('https://accounts.kakao.com/weblogin/account');

  return (
    <ManualPageStyle>
      <Header />
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
            한 PC에서 여러 계정으로 로그인 하기 위해서는{' '}
            <DS.Highlight>아래의 이동 버튼</DS.Highlight>을 클릭하여 <br />
            <DS.Highlight>카카오 계정 홈페이지</DS.Highlight>로{' '}
            <DS.Highlight>이동 후 로그아웃 한 후</DS.Highlight>에
            <br />
            다시 <DS.Highlight>Hello,GSM</DS.Highlight> 에서{' '}
            <DS.Highlight>로그인</DS.Highlight> 부탁드립니다.
          </DS.DescriptionText>
        </DS.Description>
        <S.NextController onClick={location}>이동</S.NextController>
      </S.InformationContent>
      <S.YellowBall />
      <S.BlueBall />
      <S.SmallBlueBall />
    </ManualPageStyle>
  );
};

export default ManualPage;
