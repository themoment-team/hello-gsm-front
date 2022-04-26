import Header from 'components/Common/Header';
import { NextPage } from 'next';
import Link from 'next/link';
import * as S from './style';
import * as I from '../../Assets/svg';
import { useState } from 'react';
import { css } from '@emotion/react';

const MyPage: NextPage = () => {
  const [gender, setGender] = useState<string>('W');
  const [saved, setSaved] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  return (
    <S.MyPage>
      <Header />
      <S.Content>
        <S.UserBox>
          {gender === 'W' ? <I.Woman /> : <I.Man />}
          <S.Name>김형록님</S.Name>
        </S.UserBox>
        {saved ? (
          submitted ? (
            <S.ButtonBox
              css={css`
                width: 335px;
              `}
            >
              <Link href="/apply" passHref>
                <S.Button>원서 다운</S.Button>
              </Link>
              <Link href="/apply" passHref>
                <S.Button>제출 서류 다운</S.Button>
              </Link>
            </S.ButtonBox>
          ) : (
            <S.ButtonBox
              css={css`
                width: 100%;
              `}
            >
              <Link href="/apply" passHref>
                <S.Button>입학 취소</S.Button>
              </Link>
              <Link href="/apply" passHref>
                <S.Button>원서 수정</S.Button>
              </Link>
              <Link href="/apply" passHref>
                <S.Button>최종제출</S.Button>
              </Link>
            </S.ButtonBox>
          )
        ) : (
          <S.ButtonBox
            css={css`
              width: 160px;
            `}
          >
            <Link href="/apply" passHref>
              <S.Button>원서 작성</S.Button>
            </Link>
          </S.ButtonBox>
        )}
      </S.Content>
      <S.GreenBall />
      <S.BigBlueBall />
      <S.MiddleBlueBall />
      <S.SmallBlueBall />
    </S.MyPage>
  );
};

export default MyPage;
