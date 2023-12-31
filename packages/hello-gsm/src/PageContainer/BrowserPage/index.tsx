import type { NextPage } from 'next';
import * as S from './style';
import * as I from 'assets/svg';

const BrowserPage: NextPage = () => {
  return (
    <>
      <S.BrowserPage>
        <S.SkyBlueBall />
        <S.GreenBall />
        <S.BlueBall />
        <S.BlueBall style={{ right: '20vw', top: '33vh' }} />
        <I.ChromeLogo />
        <p>
          구글 크롬 브라우저를 <br /> 이용해서 접속해 주시기 바랍니다.
        </p>
      </S.BrowserPage>
    </>
  );
};

export default BrowserPage;
