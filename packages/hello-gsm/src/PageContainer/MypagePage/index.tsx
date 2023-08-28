import type { NextPage } from 'next';
import Link from 'next/link';
import * as S from './style';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import useStore from 'Stores/StoreContainer';
import Image from 'next/image';
import {
  MypageModal,
  MypageSuccessModal,
  MypageInformation,
  LinkButton,
} from 'components';
import { toast } from 'react-toastify';
import { applyAcceptable } from 'shared/Date/firstScreening';
import { ApplicationDataType } from 'type/application';

const MyPage: NextPage<ApplicationDataType> = ({ data }) => {
  const saved = data.admissionInfo === null ? false : true;
  const submitted = data.admissionStatus.isFinalSubmitted ? true : false;
  const [isPC, setIsPC] = useState<boolean>(true);
  const finalSubmitAcceptable = data.middleSchoolGrade ? true : false;
  const [isAcceptable, setIsAcceptable] = useState<boolean>(applyAcceptable);

  const {
    showMypageModal,
    setShowMypageModal,
    setMypageModalContent,
    showMypageSuccessModal,
  } = useStore();

  const showModal = (content: string) => {
    setShowMypageModal();
    setMypageModalContent(content);
  };

  useEffect(() => {
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

  const isSubmitted = () => (
    <S.ButtonBox
      css={css`
        width: 20.9375rem;
      `}
    >
      <Link href="/application" passHref>
        <S.ApplicationLink
          target="_blank"
          rel="noopener noreferrer"
          css={css`
            background: #59c5ff;
            box-shadow: 0rem 0.8125rem 1.875rem -0.625rem #59c5ff;
          `}
        >
          원서 다운
        </S.ApplicationLink>
      </Link>
      <S.Button
        onClick={() => showModal('download')}
        css={css`
          background: #35dcbe;
          box-shadow: 0rem 0.8125rem 1.875rem -0.625rem #35dcbe;
        `}
      >
        제출 서류 다운
      </S.Button>
    </S.ButtonBox>
  );

  const isNotSubmitted = () => (
    <S.ButtonAndDescription
      css={css`
        height: 13.125rem;
      `}
    >
      <S.ButtonBox
        css={css`
          width: 41.25rem;
        `}
      >
        <S.Button
          onClick={() => showModal('delete')}
          css={css`
            background: #d82142;
            box-shadow: 0rem 0.8125rem 1.875rem -0.625rem #d82142;
          `}
        >
          원서 삭제
        </S.Button>
        <Link href="/apply" passHref>
          <S.Button
            css={css`
              background: #dbe44e;
              box-shadow: 0rem 0.8125rem 1.875rem -0.625rem #dbe44e;
            `}
          >
            원서 수정
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
                  box-shadow: 0rem 0.8125rem 1.875rem -0.625rem #49f58e;
                `
              : css`
                  color: #505050;
                  background: #a1a1a1;
                  box-shadow: 0rem 0.8125rem 1.875rem -0.625rem #a1a1a1;
                  cursor: default;
                `
          }
        >
          최종제출
        </S.Button>
      </S.ButtonBox>
      <MypageInformation admissionInfo={data.admissionInfo} />
    </S.ButtonAndDescription>
  );

  const isNotSaved = () => (
    <S.ButtonAndDescription>
      <LinkButton href="/information" color="sky">
        📑 원서 작성하기
      </LinkButton>
    </S.ButtonAndDescription>
  );

  const isNotAcceptable = () => (
    <S.ButtonAndDescription>
      <S.Button
        css={css`
          color: #505050;
          background: #a1a1a1;
          box-shadow: 0rem 0.8125rem 1.875rem -0.625rem #a1a1a1;
          cursor: default;
        `}
      >
        지원 기간 아님
      </S.Button>
      <S.MypageDescription>
        지원 기간은 10월 16일부터 10월 19일까지 입니다.
      </S.MypageDescription>
    </S.ButtonAndDescription>
  );

  return (
    <S.MyPage>
      {showMypageModal && <MypageModal />}
      {showMypageSuccessModal && <MypageSuccessModal />}
      <S.Content>
        <S.UserSection>
          <S.Title>내정보</S.Title>
          <S.UserImgBox>
            <Image
              src={
                data.admissionInfo.applicantImageUri ??
                '/images/DefaultProfileImage.png'
              }
              alt="image"
              layout="fill"
            />
          </S.UserImgBox>
          <S.Name>{data.admissionInfo.applicantName}님</S.Name>
        </S.UserSection>
        {isPC
          ? isAcceptable
            ? saved
              ? submitted
                ? isSubmitted()
                : isNotSubmitted()
              : isNotSaved()
            : isNotAcceptable()
          : isNotPC()}
      </S.Content>
    </S.MyPage>
  );
};

export default MyPage;
