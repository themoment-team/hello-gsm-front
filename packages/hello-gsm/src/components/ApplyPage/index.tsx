import React, { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import * as I from '../../Assets/svg';
import { css } from '@emotion/react';
import axios from 'axios';
import useStore from 'Stores/StoreContainer';
import {
  Header,
  DepartmentModal,
  FindAddressModal,
  FindSchoolModal,
} from 'components';
import { useForm } from 'react-hook-form';

interface ApplyFormType {
  IDPhotoUrl: string;
  addressDetails: string;
  telephoneNumber: string;
  graduationYear: string;
  graduationMonth: string;
  guardianName: string;
  guardianRelation: string;
  guardianCellphoneNumber: string;
  teacherName: string;
  teacherCellphoneNumber: string;
}

const ApplyPage: NextPage = () => {
  const imgInput = useRef<HTMLInputElement>(null);
  const [imgURL, setImgURL] = useState<string>('');
  const [name, setName] = useState<string>('김형록');
  const [gender, setGender] = useState<string>('M');
  const [birth, setBirth] = useState<number>(20050228);
  const [cellphoneNumber, setCellphoneNumber] = useState<string>('01012341234');
  const [type, setType] = useState<number>(1);
  const [isGED, setIsGED] = useState<boolean>(false);
  const [graduatedType, setGraduatedType] = useState<number>(1);
  const [isMajorSelected, setIsMajorSelected] = useState<boolean>(true);
  const [isAddressExist, setIsAddressExist] = useState<boolean>(true);
  const [isSchoolNameExist, setIsSchoolNameExist] = useState<boolean>(true);

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplyFormType>();

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

  const graduatedTypeSelectStyle = (index: number) => css`
    ${graduatedType === index && 'background: #42bafe; color: #f8f8f8;'}
  `;

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

  const onSubmit = data => {
    console.log(data);
  };

  const onClick = () => {
    choice1 && choice2 && choice3
      ? setIsMajorSelected(true)
      : setIsMajorSelected(false);
    address ? setIsAddressExist(true) : setIsAddressExist(false);
    schoolName ? setIsSchoolNameExist(true) : setIsSchoolNameExist(false);
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
        <S.ApplyPageContent onSubmit={handleSubmit(onSubmit)}>
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
            <S.DetailAddress
              placeholder="상세주소"
              type="text"
              {...register('addressDetails', {
                required: false,
                maxLength: {
                  value: 50,
                  message: '* 상세주소는 50글자 이하입니다.',
                },
              })}
            />
          </S.AddressBox>
          <S.HomeTelephone
            {...register('telephoneNumber', {
              required: false,
              pattern: {
                value: /^[0-9]+$/,
                message: '* 숫자만 입력 가능합니다',
              },
              maxLength: {
                value: 10,
                message: '* 집 전화번호를 확인해주세요',
              },
              minLength: {
                value: 10,
                message: '* 집 전화번호를 확인해주세요',
              },
            })}
            placeholder="집 전화번호를 입력해주세요."
          />
          <S.Cellphone>{cellphoneNumber}</S.Cellphone>
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
              <S.GraduatedYear
                defaultValue={'default'}
                {...register('graduationYear', {
                  required: true,
                  pattern: {
                    value: /^[0-9]+$/,
                    message: '* 졸업일을 선택해주세요',
                  },
                })}
              >
                <option disabled value="default">
                  연도
                </option>
                {[...Array(14)].map((_, index: number) => (
                  <option key={index} value={'20' + (index + 10)}>
                    20{index + 10}
                  </option>
                ))}
              </S.GraduatedYear>
              <S.GraduateMonth
                defaultValue={'default'}
                {...register('graduationMonth', {
                  required: true,
                  pattern: {
                    value: /^[0-9]+$/,
                    message: '* 졸업일을 선택해주세요',
                  },
                })}
              >
                <option disabled value="default">
                  월
                </option>
                {[...Array(12)].map((_, index: number) => (
                  <option key={index} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </S.GraduateMonth>
            </S.GraduatedDateBox>
            <S.GraduatedSelectBox>
              <S.GraduatedType
                css={graduatedTypeSelectStyle(1)}
                onClick={() => {
                  setGraduatedType(1);
                  setIsGED(false);
                }}
              >
                졸업예정
              </S.GraduatedType>
              <S.GraduatedType
                css={graduatedTypeSelectStyle(2)}
                onClick={() => {
                  setGraduatedType(2);
                  setIsGED(false);
                }}
              >
                졸업
              </S.GraduatedType>
              <S.GraduatedType
                css={graduatedTypeSelectStyle(3)}
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
          <S.GuardianName
            {...register('guardianName', {
              required: '* 성명을 입력해주세요',
              pattern: {
                value: /^[가-힣]+$/,
                message: '* 성명을 확인해주세요',
              },
              maxLength: {
                value: 20,
                message: '* 성명을 확인해주세요',
              },
            })}
            placeholder="보호자분의 성명을 입력해주세요."
          />
          <S.GuardianRelation
            {...register('guardianRelation', {
              required: '* 관계를 입력해주세요',
              pattern: {
                value: /^[가-힣]+$/,
                message: '* 관계를 확인해주세요',
              },
              maxLength: {
                value: 20,
                message: '* 관계를 확인해주세요',
              },
            })}
            placeholder="지원자분과의 관계를 입력해주세요."
          />
          <S.GuardianCellphone
            {...register('guardianCellphoneNumber', {
              required: '* 핸드폰 번호를 입력해주세요',
              pattern: {
                value: /^[0-9]+$/,
                message: '* 숫자만 입력 가능합니다',
              },
              maxLength: {
                value: 11,
                message: '* 핸드폰 번호를 확인해주세요',
              },
              minLength: {
                value: 11,
                message: '* 핸드폰 번호를 확인해주세요',
              },
            })}
            placeholder="보호자분의 핸드폰 번호를 입력해주세요."
          />
          <S.Title
            css={css`
              margin-top: 75px;
            `}
          >
            담임 선생님
          </S.Title>
          <S.TeacherName
            {...register('teacherName', {
              required: '* 성함을 입력해주세요',
              maxLength: {
                value: 20,
                message: '* 성함을 확인해주세요',
              },
            })}
            placeholder="담임선생님의 성명을 입력해주세요."
          />
          <S.TeacherPhone
            {...register('teacherCellphoneNumber', {
              required: '* 연락처를 입력해주세요',
              maxLength: {
                value: 11,
                message: '* 연락처를 확인해주세요',
              },
            })}
            placeholder="담임선생님의 연락처를 입력해주세요."
          />
          <S.NextButton onClick={onClick} type="submit">
            다음
          </S.NextButton>
        </S.ApplyPageContent>
        <S.ErrorBox>
          <S.Error>{errors.IDPhotoUrl?.message}</S.Error>
          <S.Error>{!isAddressExist && '* 주소지를 입력해주세요.'}</S.Error>
          <S.Error>{errors.addressDetails?.message}</S.Error>
          <S.Error>{errors.telephoneNumber?.message}</S.Error>
          <S.Error>
            {!isSchoolNameExist && '* 출신 중학교를 입력해주세요.'}
          </S.Error>
          <S.Error>
            {errors.graduationYear?.message
              ? errors.graduationYear.message
              : errors.graduationMonth?.message}
          </S.Error>
          <S.Error>{!isMajorSelected && '* 지원학과를 선택해주세요'}</S.Error>
          <S.Error>{errors.guardianName?.message}</S.Error>
          <S.Error>{errors.guardianRelation?.message}</S.Error>
          <S.Error>{errors.guardianCellphoneNumber?.message}</S.Error>
          <S.Error>{errors.teacherName?.message}</S.Error>
          <S.Error>{errors.teacherCellphoneNumber?.message}</S.Error>
        </S.ErrorBox>
      </S.ApplyPage>
    </>
  );
};

export default ApplyPage;
