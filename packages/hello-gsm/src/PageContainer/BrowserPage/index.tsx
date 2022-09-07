import type { NextPage } from 'next';
import * as S from './style';
import * as I from 'Assets/svg';
import { Header } from 'components';

const BrowserPage: NextPage = () => {
  return (
    <>
      <Header />
      <S.BrowserPage>
        <I.ChromeLogo />
        <p>
          구글 크롬 브라우저를 <br /> 이용해서 접속해 주시기 바랍니다.
        </p>
      </S.BrowserPage>
    </>
  );
};

export default BrowserPage;
