import React, { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import * as I from '../../Assets/svg';
import Header from 'components/Common/Header';
import { css } from '@emotion/react';

const ApplyPage: NextPage = () => {
  const imgInput = useRef<HTMLInputElement>(null);

  const [imgURL, setImgURL] = useState<string>('');
  const [name, setName] = useState<string>('김형록');
  const [gender, setGender] = useState<string>('M');
  const [birth, setBirth] = useState<number>(20050228);
  const [type, setType] = useState<number>(1);

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
          <S.BarElement
            css={css`
              top: 100px;
            `}
          >
            증명사진
          </S.BarElement>
          <S.BarElement
            css={css`
              top: 410px;
            `}
          >
            이름
          </S.BarElement>
          <S.BarElement
            css={css`
              top: 500px;
            `}
          >
            성별
          </S.BarElement>
          <S.BarElement
            css={css`
              top: 580px;
            `}
          >
            생년월일
          </S.BarElement>
          <S.BarElement
            css={css`
              top: 665px;
            `}
          >
            주소지
          </S.BarElement>
          <S.BarElement
            css={css`
              top: 865px;
            `}
          >
            집 전화
          </S.BarElement>
          <S.BarElement
            css={css`
              top: 920px;
            `}
          >
            휴대폰 번호
          </S.BarElement>
          <S.BarElement
            css={css`
              top: 1110px;
            `}
          >
            전형
          </S.BarElement>
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
          <S.NameBox>{name}</S.NameBox>
          <S.GenderBox>
            <S.GenderSelect
              css={css`
                background: ${gender === 'M' && '#42bafe'};
              `}
            >
              남자
            </S.GenderSelect>
            <S.GenderSelect
              css={css`
                background: ${gender === 'W' && '#42bafe'};
              `}
            >
              여자
            </S.GenderSelect>
          </S.GenderBox>
          <S.BirthBox>{birth}</S.BirthBox>
          <S.AddressBox>
            <S.AddressDescription>주소지 검색</S.AddressDescription>
            <S.FindAddressBox>
              <S.FindAddress readOnly />
              <S.FindAddressButton>주소 검색</S.FindAddressButton>
            </S.FindAddressBox>
            <S.AddressDescription>상세주소</S.AddressDescription>
            <S.DetailAddress placeholder="상세주소" />
          </S.AddressBox>
          <S.HomeTelephone placeholder="집 전화번호를 입력해주세요." />
          <S.Cellphone placeholder="핸드폰 번호를 입력해주세요." />
          <S.Title
            css={css`
              margin-top: 80px;
            `}
          >
            지원자 현황
          </S.Title>
          <S.TypeBox>
            <S.Type
              css={css`
                ${type === 1 &&
                'background: #42BAFE; font-weight: 700; font-size: 20px; color: #F8F8F8;'}
              `}
              onClick={() => setType(1)}
            >
              일반전형
            </S.Type>
            <S.Type
              css={css`
                ${type === 2 &&
                'background: #42BAFE; font-weight: 700; font-size: 20px; color: #F8F8F8;'}
              `}
              onClick={() => setType(2)}
            >
              사회통합전형
            </S.Type>
            <S.Type
              css={css`
                ${type === 3 &&
                'background: #42BAFE; font-weight: 700; font-size: 20px; color: #F8F8F8;'}
              `}
              onClick={() => setType(3)}
            >
              특별전형
            </S.Type>
          </S.TypeBox>
        </S.ApplyPageContent>
      </S.ApplyPage>
    </>
  );
};

export default ApplyPage;
