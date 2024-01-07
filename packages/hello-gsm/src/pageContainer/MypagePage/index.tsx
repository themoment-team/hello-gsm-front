import type { NextPage } from 'next';

import { css } from '@emotion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import useStore from 'stores/StoreContainer';

import {
  LinkButton,
  MypageInformation,
  MypageModal,
  MypageSuccessModal,
} from 'components';

import { applyAcceptable } from 'shared/Date/firstScreening';

import { ApplicationIdentityType } from 'types/data';

import { theme } from 'styles/theme';

import * as S from './style';

const MyPage: NextPage<ApplicationIdentityType> = ({
  applicationData,
  identityData,
}) => {
  const saved = applicationData?.admissionInfo ? true : false;
  const submitted = applicationData?.admissionStatus.isFinalSubmitted
    ? true
    : false;
  const [isPC, setIsPC] = useState<boolean>(true);
  const [isAcceptable] = useState<boolean>(applyAcceptable);

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
    <S.ButtonBox>
      <LinkButton href="/application" color={theme.color.primary.sky}>
        🖨️ 원서 출력
      </LinkButton>

      <LinkButton
        color={theme.color.primary.lime}
        onClick={() => showModal('download')}
      >
        📂 제출 서류 다운로드
      </LinkButton>
    </S.ButtonBox>
  );

  const isNotSubmitted = () => (
    <S.ButtonAndDescription
      css={css`
        height: 13.125rem;
      `}
    >
      <S.ButtonBox>
        <LinkButton
          color={theme.color.sub.orange}
          onClick={() => showModal('delete')}
        >
          🗑️ 원서 삭제
        </LinkButton>
        <LinkButton color={theme.color.primary.sky} href="/apply">
          📑 원서 수정하기
        </LinkButton>
        <LinkButton href="/application" color={theme.color.white}>
          🖨️ 원서 미리보기
        </LinkButton>
        <LinkButton
          color={theme.color.primary.lime}
          onClick={() => showModal('final')}
        >
          📩 최종 제출하기
        </LinkButton>
      </S.ButtonBox>
      <MypageInformation admissionInfo={applicationData?.admissionInfo} />
    </S.ButtonAndDescription>
  );

  const isNotSaved = () => (
    <S.ButtonAndDescription>
      <LinkButton href="/information" color={theme.color.primary.sky}>
        📑 원서 작성하기
      </LinkButton>
    </S.ButtonAndDescription>
  );

  const isNotAcceptable = () => (
    <S.ButtonAndDescription>
      <LinkButton disabled>❌ 지원 기간이 아닙니다.</LinkButton>
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
          <S.Title>마이페이지</S.Title>
          <S.UserImgBox>
            <Image
              src={
                applicationData?.admissionInfo.applicantImageUri ??
                '/Images/DefaultProfileImage.png'
              }
              alt="image"
              layout="fill"
            />
          </S.UserImgBox>
          <S.Name>
            {applicationData?.admissionInfo.applicantName ?? identityData?.name}
            님
          </S.Name>
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
