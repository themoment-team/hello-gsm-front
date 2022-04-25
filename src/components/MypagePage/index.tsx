import Header from 'components/Common/Header';
import { NextPage } from 'next';
import Link from 'next/link';
import * as S from './style';

const MyPage: NextPage = () => {
  return (
    <S.MyPage>
      <Header />
      <S.Content>
        <S.UserBox>
          <S.GenderAvatar></S.GenderAvatar>
          <S.Name>김형록님</S.Name>
        </S.UserBox>
        <S.ButtonBox>
          <Link href="/apply" passHref>
            <S.Button>원서 작성</S.Button>
          </Link>
          <Link href="/apply" passHref>
            <S.Button>원서 작성</S.Button>
          </Link>
        </S.ButtonBox>
      </S.Content>
      <S.GreenBall />
      <S.BigBlueBall />
      <S.MiddleBlueBall />
      <S.SmallBlueBall />
    </S.MyPage>
  );
};

export default MyPage;
