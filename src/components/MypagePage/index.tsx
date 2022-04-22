import Header from 'components/Common/Header';
import { NextPage } from 'next';
import * as S from './style';

const MyPage: NextPage = () => {
  return (
    <S.MyPage>
      <Header />
      <S.GreenBall />
      <S.BigBlueBall />
      <S.MiddleBlueBall />
      <S.SmallBlueBall />
    </S.MyPage>
  );
};

export default MyPage;
