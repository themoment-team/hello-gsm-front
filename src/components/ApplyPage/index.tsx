import React, { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import * as I from '../../Assets/svg';
import Header from 'components/Common/Header';
import { css } from '@emotion/react';
import axios from 'axios';

const ApplyPage: NextPage = () => {
  const imgInput = useRef<HTMLInputElement>(null);

  const [imgURL, setImgURL] = useState<string>('');
  const [name, setName] = useState<string>('김형록');
  const [gender, setGender] = useState<string>('M');
  const [birth, setBirth] = useState<number>(20050228);
  const [type, setType] = useState<number>(1);
  const [isSociety, setIsSociety] = useState<boolean>(true);
  const [societyType, setSocietyType] = useState<number>(1);
  const [isGED, setIsGED] = useState<boolean>(true);
  const [GEDType, setGEDType] = useState<number>(1);

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
    type === 2 ? setIsSociety(true) : setIsSociety(false);
  }, [imgURL, type]);

  const societySelectStyle = (index: number) => css`
    ${isSociety && 'background: #484453; cursor: pointer;'}
    ${isSociety &&
    societyType === index &&
    'background: #42bafe; color: color: #f8f8f8;'}
  `;

  const GEDTypeSelectStyle = (index: number) => css`
    ${GEDType === index && 'background: #42bafe; color: #f8f8f8;'}
  `;

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
          <S.BarElement
            css={css`
              top: 1190px;
            `}
          >
            사회통합전형의 대상
          </S.BarElement>
          <S.BarElement
            css={css`
              top: 1280px;
            `}
          >
            출신 중학교
          </S.BarElement>
          <S.BarElement
            css={css`
              top: 1335px;
            `}
          >
            졸업일
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
          <S.SocietyBox>
            <S.Society
              css={societySelectStyle(1)}
              onClick={() => isSociety && setSocietyType(1)}
            >
              기회균등전형
            </S.Society>
            <S.Society
              css={societySelectStyle(2)}
              onClick={() => isSociety && setSocietyType(2)}
            >
              사회다양성전형
            </S.Society>
          </S.SocietyBox>
          <S.SchoolBox>
            <S.SchoolName
              css={css`
                ${!isGED && 'background: rgba(118, 118, 118, 0.86);'}
              `}
              readOnly
            />
            <S.SchoolSearchButton
              css={css`
                ${!isGED && 'background: #a0a0a0; cursor: default;'}
              `}
            >
              학교 검색
            </S.SchoolSearchButton>
          </S.SchoolBox>
          <S.GraduatedBox>
            <S.GraduatedDateBox>
              <S.GraduatedYear></S.GraduatedYear>
              <S.GraduateMonth></S.GraduateMonth>
            </S.GraduatedDateBox>
            <S.GraduatedSelectBox>
              <S.GraduatedType
                css={GEDTypeSelectStyle(1)}
                onClick={() => {
                  setGEDType(1);
                  setIsGED(true);
                }}
              >
                졸업예정
              </S.GraduatedType>
              <S.GraduatedType
                css={GEDTypeSelectStyle(2)}
                onClick={() => {
                  setGEDType(2);
                  setIsGED(true);
                }}
              >
                졸업
              </S.GraduatedType>
              <S.GraduatedType
                css={GEDTypeSelectStyle(3)}
                onClick={() => {
                  setGEDType(3);
                  setIsGED(false);
                }}
              >
                검정고시
              </S.GraduatedType>
            </S.GraduatedSelectBox>
          </S.GraduatedBox>
        </S.ApplyPageContent>
        <S.ErrorBox>
          <S.Error
            css={css`
              top: 100px;
            `}
          >
            증명사진을 업로드해주세요.
          </S.Error>
          <S.Error
            css={css`
              top: 730px;
            `}
          >
            주소지를 입력해주세요.
          </S.Error>
          <S.Error
            css={css`
              top: 940px;
            `}
          >
            집 전화번호를 입력해주세요.
          </S.Error>
          <S.Error
            css={css`
              top: 1000px;
            `}
          >
            휴대폰 번호를 입력해주세요.
          </S.Error>
          <S.Error
            css={css`
              top: 1200px;
            `}
          >
            전형을 선택해주세요.
          </S.Error>
        </S.ErrorBox>
      </S.ApplyPage>
    </>
  );
};

export default ApplyPage;
