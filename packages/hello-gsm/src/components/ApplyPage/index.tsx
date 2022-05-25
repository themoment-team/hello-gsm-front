import React, { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import * as I from '../../Assets/svg';
import Header from 'components/Common/Header';
import { css } from '@emotion/react';
import axios from 'axios';
import DepartmentModal from 'components/DepartmentModal';
import useStore from 'Stores/StoreContainer';
import FindSchoolModal from 'components/FindSchoolModal';
import FindAddressModal from 'components/FindAddressModal';

const ApplyPage: NextPage = () => {
  const imgInput = useRef<HTMLInputElement>(null);

  const [imgURL, setImgURL] = useState<string>('');
  const [name, setName] = useState<string>('김형록');
  const [gender, setGender] = useState<string>('M');
  const [birth, setBirth] = useState<number>(20050228);
  const [type, setType] = useState<number>(1);
  const [isSociety, setIsSociety] = useState<boolean>(true);
  const [isGED, setIsGED] = useState<boolean>(false);
  const [GraduatedType, setGraduatedType] = useState<number>(1);

  const {
    showDepartmentModal,
    setShowDepartmentModal,
    setSelectedChoice,
    choice1,
    choice2,
    choice3,
    showFindSchoolModal,
    setShowFindSchoolModal,
    schoolName,
    setSchoolName,
    showFindAddressModal,
    setShowFindAddressModal,
    address,
  } = useStore();

  const readImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (typeof event.target?.result === 'string') {
        setImgURL(event.target.result);
      }
    };

    if (event.target.files) {
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

  const GraduatedTypeSelectStyle = (index: number) => css`
    ${GraduatedType === index && 'background: #42bafe; color: #f8f8f8;'}
  `;

  const toNext = () => {
    console.log('next level');
  };

  const SelectedDepartment = (type: number) => {
    switch (type) {
      case 1:
        return '인공지능 개발과';
      case 2:
        return '소프트웨어 개발과';
      case 3:
        return '스마트 iot과';
      default:
        return '선택';
    }
  };

  return (
    <>
      {showFindAddressModal && <FindAddressModal />}
      {showFindSchoolModal && <FindSchoolModal />}
      {showDepartmentModal && <DepartmentModal />}
      <Header />
      <S.ApplyPage>
        <S.BarBox>
          <S.BarElement>증명사진</S.BarElement>
          <S.BarElement>이름</S.BarElement>
          <S.BarElement>성별</S.BarElement>
          <S.BarElement>생년월일</S.BarElement>
          <S.BarElement>주소지</S.BarElement>
          <S.BarElement>집 전화</S.BarElement>
          <S.BarElement>휴대폰 번호</S.BarElement>
          <S.BarElement>전형</S.BarElement>
          <S.BarElement>출신 중학교</S.BarElement>
          <S.BarElement>졸업일</S.BarElement>
          <S.BarElement>지원학과</S.BarElement>
          <S.BarElement>이름</S.BarElement>
          <S.BarElement>관계</S.BarElement>
          <S.BarElement>핸드폰 번호</S.BarElement>
          <S.BarElement>이름</S.BarElement>
          <S.BarElement>연락처</S.BarElement>
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
              <S.FindAddress>{address}</S.FindAddress>
              <S.FindAddressButton onClick={setShowFindAddressModal}>
                주소 검색
              </S.FindAddressButton>
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
          <S.SchoolBox>
            <S.SchoolName>{schoolName}</S.SchoolName>
            <S.SchoolSearchButton
              css={css`
                ${isGED && 'background: #a0a0a0; cursor: default;'}
              `}
              onClick={() => !isGED && setShowFindSchoolModal()}
            >
              학교 검색
            </S.SchoolSearchButton>
          </S.SchoolBox>
          <S.GraduatedBox>
            <S.GraduatedDateBox>
              <S.GraduatedYear>
                <option disabled selected>
                  연도
                </option>
                {[...Array(14)].map((_, index: number) => (
                  <option key={index}>20{index + 10}</option>
                ))}
              </S.GraduatedYear>
              <S.GraduateMonth>
                <option disabled selected>
                  월
                </option>
                {[...Array(12)].map((_, index: number) => (
                  <option key={index}>{index + 1}</option>
                ))}
              </S.GraduateMonth>
            </S.GraduatedDateBox>
            <S.GraduatedSelectBox>
              <S.GraduatedType
                css={GraduatedTypeSelectStyle(1)}
                onClick={() => {
                  setGraduatedType(1);
                  setIsGED(false);
                }}
              >
                졸업예정
              </S.GraduatedType>
              <S.GraduatedType
                css={GraduatedTypeSelectStyle(2)}
                onClick={() => {
                  setGraduatedType(2);
                  setIsGED(false);
                }}
              >
                졸업
              </S.GraduatedType>
              <S.GraduatedType
                css={GraduatedTypeSelectStyle(3)}
                onClick={() => {
                  setGraduatedType(3);
                  setIsGED(true);
                  setSchoolName('');
                }}
              >
                검정고시
              </S.GraduatedType>
            </S.GraduatedSelectBox>
          </S.GraduatedBox>
          <S.DepartmentBox>
            <S.DepartmentContentBox>
              <S.DepartmentSelectButton
                onClick={() => {
                  setShowDepartmentModal();
                  setSelectedChoice(1);
                }}
              >
                {SelectedDepartment(choice1)}
              </S.DepartmentSelectButton>
              <S.DepartmentOrderDescription>
                (1지망)
              </S.DepartmentOrderDescription>
            </S.DepartmentContentBox>
            <S.DepartmentContentBox>
              <S.DepartmentSelectButton
                onClick={() => {
                  setShowDepartmentModal();
                  setSelectedChoice(2);
                }}
              >
                {SelectedDepartment(choice2)}
              </S.DepartmentSelectButton>
              <S.DepartmentOrderDescription>
                (2지망)
              </S.DepartmentOrderDescription>
            </S.DepartmentContentBox>
            <S.DepartmentContentBox>
              <S.DepartmentSelectButton
                onClick={() => {
                  setShowDepartmentModal();
                  setSelectedChoice(3);
                }}
              >
                {SelectedDepartment(choice3)}
              </S.DepartmentSelectButton>
              <S.DepartmentOrderDescription>
                (3지망)
              </S.DepartmentOrderDescription>
            </S.DepartmentContentBox>
          </S.DepartmentBox>
          <S.Title
            css={css`
              margin-top: 65px;
            `}
          >
            보호자
          </S.Title>
          <S.GuardianName placeholder="보호자분의 성명을 입력해주세요." />
          <S.GuardianRelation placeholder="지원자분과의 관계를 입력해주세요." />
          <S.GuardianCellphone placeholder="보호자분의 핸드폰 번호를 입력해주세요." />
          <S.Title
            css={css`
              margin-top: 75px;
            `}
          >
            담임 선생님
          </S.Title>
          <S.TeacherName placeholder="담임선생님의 성명을 입력해주세요." />
          <S.TeacherPhone placeholder="담임선생님의 연락처를 입력해주세요." />
          <S.NextButton onClick={toNext}>다음</S.NextButton>
        </S.ApplyPageContent>
        <S.ErrorBox>
          <S.Error>* 증명사진을 업로드해주세요.</S.Error>
          <S.Error>* 주소지를 입력해주세요.</S.Error>
          <S.Error>* 집 전화번호를 입력해주세요.</S.Error>
          <S.Error>* 핸드폰 번호를 입력해주세요.</S.Error>
          <S.Error>* 출신 중학교를 입력해주세요.</S.Error>
          <S.Error>* 졸업일을 선택해주세요.</S.Error>
          <S.Error>* 지원학과를 선택해주세요.</S.Error>
          <S.Error>* 성명을 입력해주세요.</S.Error>
          <S.Error>* 관계를 입력해주세요.</S.Error>
          <S.Error>* 핸드폰번호를 입력해주세요.</S.Error>
          <S.Error>* 성명을 입력해주세요.</S.Error>
          <S.Error>* 연락처를 입력해주세요.</S.Error>
        </S.ErrorBox>
      </S.ApplyPage>
    </>
  );
};

export default ApplyPage;
