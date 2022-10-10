import type { NextPage } from 'next';
import Link from 'next/link';
import * as S from './style';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import useStore from 'Stores/StoreContainer';
import { StatusType } from 'type/user';
import Image from 'next/image';
import {
  Header,
  MypageModal,
  MypageSuccessModal,
  MypageInformation,
} from 'components';
import { toast } from 'react-toastify';
import acceptable from 'shared/acceptable';

const MyPage: NextPage<StatusType> = ({
  data: { name, userImg, application },
}) => {
  const saved = application === null ? false : true;
  const submitted = application?.isFinalSubmission ? true : false;
  const [isPC, setIsPC] = useState<boolean>(true);
  const isGED =
    application?.application_details?.educationStatus === '검정고시'
      ? true
      : false;
  const finalSubmitAcceptable = application?.application_score ? true : false;

  const {
    showMypageModal,
    setShowMypageModal,
    setMypageModalContent,
    setLogged,
    showMypageSuccessModal,
  } = useStore();

  const showModal = (content: string) => {
    setShowMypageModal();
    setMypageModalContent(content);
  };

  useEffect(() => {
    setLogged(true);
    setIsPC(
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi|mobi/i.test(
        navigator.userAgent,
      ),
    );
  }, []);

  const isNotPC = () => (
    <S.IsNotPCWrap>
      <S.Point />
      <S.IsNotPC>
        원서 삭제 및 수정, 최종 제출은 PC로만 할 수 있습니다
      </S.IsNotPC>
    </S.IsNotPCWrap>
  );

  const isSumitted = () => (
    <S.ButtonBox
      css={css`
        width: 335px;
      `}
    >
      <Link href="/application" passHref>
        <S.ApplicationLink
          target="_blank"
          rel="noopener noreferrer"
          css={css`
            background: #59c5ff;
            box-shadow: 0px 13px 30px -10px #59c5ff;
          `}
        >
          원서 다운
        </S.ApplicationLink>
      </Link>
      <S.Button
        onClick={() => showModal('download')}
        css={css`
          background: #35dcbe;
          box-shadow: 0px 13px 30px -10px #35dcbe;
        `}
      >
        제출 서류 다운
      </S.Button>
    </S.ButtonBox>
  );

  const isNotSumitted = () => (
    <S.ButtonAndDescription
      css={css`
        height: 210px;
      `}
    >
      <S.ButtonBox
        css={css`
          width: 660px;
        `}
      >
        <S.Button
          onClick={() => showModal('delete')}
          css={css`
            background: #d82142;
            box-shadow: 0px 13px 30px -10px #d82142;
          `}
        >
          원서 삭제
        </S.Button>
        <Link href="/apply" passHref>
          <S.Button
            css={css`
              background: #dbe44e;
              box-shadow: 0px 13px 30px -10px #dbe44e;
            `}
          >
            원서 수정
          </S.Button>
        </Link>
        <Link href={isGED ? '/calculator/ged' : '/calculator'} passHref>
          <S.Button
            css={css`
              background: #5fc4fb;
              box-shadow: 0px 13px 30px -10px #5fc4fb;
            `}
          >
            성적 입력
          </S.Button>
        </Link>
        <S.Button
          onClick={() => {
            finalSubmitAcceptable
              ? showModal('final')
              : toast.error('성적을 입력하여야 최종제출이 가능합니다.');
          }}
          css={
            finalSubmitAcceptable
              ? css`
                  background: #49f58e;
                  box-shadow: 0px 13px 30px -10px #49f58e;
                `
              : css`
                  color: #505050;
                  background: #a1a1a1;
                  box-shadow: 0px 13px 30px -10px #a1a1a1;
                  cursor: default;
                `
          }
        >
          최종제출
        </S.Button>
      </S.ButtonBox>
      <MypageInformation application={application} />
      <S.MypageDescription>
        최종제출은 성적입력 후에 하실 수 있습니다.
      </S.MypageDescription>
    </S.ButtonAndDescription>
  );

  const isNotSaved = () => (
    <S.ButtonAndDescription>
      <S.ButtonBox
        css={css`
          width: 160px;
        `}
      >
        <Link href="/information" passHref>
          <S.Button
            css={css`
              background: #dbe44e;
              box-shadow: 0px 13px 30px -10px #dbe44e;
            `}
          >
            원서 작성
          </S.Button>
        </Link>
      </S.ButtonBox>
      <S.MypageDescription>
        원서를 작성완료 하셨다면 새로고침 부탁드립니다.
      </S.MypageDescription>
    </S.ButtonAndDescription>
  );

  const isNotAcceptable = () => (
    <S.ButtonAndDescription>
      <S.Button
        css={css`
          color: #505050;
          background: #a1a1a1;
          box-shadow: 0px 13px 30px -10px #a1a1a1;
          cursor: default;
        `}
      >
        지원 기간 아님
      </S.Button>
      <S.MypageDescription>
        지원 기간은 10월 17일부터 10월 20일까지 입니다.
      </S.MypageDescription>
    </S.ButtonAndDescription>
  );

  return (
    <S.MyPage>
      {showMypageModal && <MypageModal />}
      {showMypageSuccessModal && <MypageSuccessModal />}
      <Header />
      <S.Content
        css={css`
          ${isPC && saved && !submitted && 'height: 440px'}
          ${isPC && !saved && 'height: 320px'}
        `}
      >
        <S.UserBox>
          <Image
            src={userImg}
            alt="image"
            width="140"
            height="140"
            css={{ borderRadius: '100%' }}
          />
          <S.Name>{name}</S.Name>
        </S.UserBox>
        {isPC
          ? acceptable
            ? saved
              ? submitted
                ? isSumitted()
                : isNotSumitted()
              : isNotSaved()
            : isNotAcceptable()
          : isNotPC()}
      </S.Content>
      <S.GreenBall />
      <S.BigBlueBall />
      <S.MiddleBlueBall />
      <S.SmallBlueBall />
    </S.MyPage>
  );
};

export default MyPage;
