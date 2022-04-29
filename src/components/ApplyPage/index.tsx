import React, { useRef } from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import * as I from '../../Assets/svg';
import Header from 'components/Common/Header';

const ApplyPage: NextPage = () => {
  const imgInput = useRef<HTMLInputElement>(null);

  const onImgInput = (event: any) => {
    event.preventDefault();
    imgInput.current.click();
  }

  return (
    <>
      <Header />
      <S.ApplyPage>
        <S.ApplyPageContent>
          <S.Title>지원자 인적사항</S.Title>
          <S.ImgInputBox htmlFor="img-input">
            <I.InputImg />
            <S.Description>사진을 업로드 해주세요</S.Description>
          </S.ImgInputBox>
          <S.ImgInput
            type="file"
            id="img-input"
            accept="image/*"
            ref={imgInput}
          />
        </S.ApplyPageContent>
      </S.ApplyPage>
    </>
  );
};

export default ApplyPage;
