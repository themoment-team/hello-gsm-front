import React, { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import * as I from '../../Assets/svg';
import Header from 'components/Common/Header';

const ApplyPage: NextPage = () => {
  const imgInput = useRef<HTMLInputElement>(null);

  const [imgURL, setImgURL] = useState<string>('');

  const readImg = (event: any) => {
    const reader = new FileReader();

    reader.onload = function (event) {
      setImgURL(event.target.result);
    };

    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  useEffect(() => {
    console.log(imgInput.current.files[0]);
  }, [imgURL]);

  return (
    <>
      <Header />
      <S.ApplyPage>
        <S.BarBox>
          <S.BarElement>증명사진</S.BarElement>
        </S.BarBox>
        <S.ApplyPageContent>
          <S.Title>지원자 인적사항</S.Title>
          <S.ImgInputBox htmlFor="img-input">
            {imgURL === '' ? (
              <>
                <I.InputImg />
                <S.Description>사진을 업로드 해주세요</S.Description>
              </>
            ) : (
              <S.InputImg src={imgURL} />
            )}
          </S.ImgInputBox>
          <S.ImgInput
            type="file"
            id="img-input"
            accept="image/*"
            ref={imgInput}
            onChange={e => readImg(e)}
          />
        </S.ApplyPageContent>
      </S.ApplyPage>
    </>
  );
};

export default ApplyPage;
