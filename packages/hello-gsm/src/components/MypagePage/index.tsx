import type { NextPage } from 'next';
import Link from 'next/link';
import * as S from './style';
import * as I from 'Assets/svg';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import useStore from 'Stores/StoreContainer';
import { Header, MypageModal } from 'components';
import { StatusType } from 'type/user';
import Image from 'next/image';

interface UserStatusType {
  status: StatusType;
}

const MyPage: NextPage<UserStatusType> = ({ status }) => {
  const [name, setName] = useState<string>('');
  const [imgURL, setImgURL] = useState<string>('');
  const [saved, setSaved] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const { showMypageModal, setShowMypageModal, setMypageModalContent } =
    useStore();

  const showModal = (content: string) => {
    setShowMypageModal();
    setMypageModalContent(content);
  };

  useEffect(() => {
    setSaved(status.application === null ? false : true);
    setSubmitted(status.application?.isFinalSubmission === true ? true : false);
    setImgURL(status.userImg);
    setName(status.name);
  }, []);

  return (
    <S.MyPage>
      {showMypageModal && <MypageModal />}
      <Header />
      <S.Content>
        <S.UserBox>
          <Image
            src={imgURL}
            alt="image"
            width="140"
            height="140"
            css={{ borderRadius: '100%' }}
          />
          <S.Name>{name}</S.Name>
        </S.UserBox>
        {saved ? (
          submitted ? (
            <S.ButtonBox
              css={css`
                width: 335px;
              `}
            >
              <S.Button>원서 다운</S.Button>
              <S.Button onClick={() => showModal('download')}>
                제출 서류 다운
              </S.Button>
            </S.ButtonBox>
          ) : (
            <S.ButtonBox
              css={css`
                width: 510px;
              `}
            >
              <S.Button onClick={() => showModal('cancel')}>원서 삭제</S.Button>
              <Link href="/apply" passHref>
                <S.Button>원서 수정</S.Button>
              </Link>
              <S.Button onClick={() => showModal('final')}>최종제출</S.Button>
            </S.ButtonBox>
          )
        ) : (
          <S.ButtonBox
            css={css`
              width: 160px;
            `}
          >
            <Link href="/information" passHref>
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
