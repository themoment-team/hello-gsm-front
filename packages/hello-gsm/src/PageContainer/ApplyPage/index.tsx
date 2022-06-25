import React, { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import * as I from 'Assets/svg';
import { css } from '@emotion/react';
import useStore from 'Stores/StoreContainer';
import {
  Header,
  DepartmentModal,
  FindAddressModal,
  FindSchoolModal,
  ApplyBarBox,
} from 'components';
import { useForm } from 'react-hook-form';
import application from 'Api/application';
import {
  ApplicationType,
  ApplyFormType,
  GetApplicationType,
} from 'type/application';
import auth from 'Api/auth';
import { useRouter } from 'next/router';

const ApplyPage: NextPage<GetApplicationType> = ({ data }) => {
  const imgInput = useRef<HTMLInputElement>(null);
  const [imgURL, setImgURL] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<'남자' | '여자'>();
  const [birthYear, setBirthYear] = useState<number>();
  const [birthMonth, setBirthMonth] = useState<number>();
  const [birthDate, setBirthDate] = useState<number>();
  const [cellphoneNumber, setCellphoneNumber] = useState<string>('');
  const [isIdPhoto, setIsIdPhoto] = useState<boolean>(true);
  const [isMajorSelected, setIsMajorSelected] = useState<boolean>(true);
  const [isAddressExist, setIsAddressExist] = useState<boolean>(true);
  const [isSchoolNameExist, setIsSchoolNameExist] = useState<boolean>(true);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const { push } = useRouter();

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
    schoolLocation,
    setSchoolLocation,
    showFindAddressModal,
    setShowFindAddressModal,
    address,
  } = useStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ApplyFormType>({
    defaultValues: {
      screening: '일반전형',
      educationStatus: '졸업예정',
    },
  });

  const graduationStatus = watch('educationStatus');

  useEffect(() => {
    const userBirth = new Date(data.birth);
    if (data.application !== null) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
    setName(data.name);
    setGender(data.gender);
    setBirthYear(userBirth.getFullYear());
    setBirthMonth(userBirth.getMonth() + 1);
    setBirthDate(userBirth.getDate());
    setCellphoneNumber(data.cellphoneNumber);
  }, []);

  const apply = async (submitData: ApplyFormType) => {
    const data: ApplicationType = {
      application: {
        teacherCellphoneNumber: submitData.teacherCellphoneNumber || undefined,
        schoolName: schoolName || undefined,
        guardianCellphoneNumber: submitData.guardianCellphoneNumber,
        screening: submitData.screening,
      },
      applicationDetail: {
        telephoneNumber: submitData.telephoneNumber || undefined,
        address: address,
        addressDetails: submitData.addressDetails || undefined,
        guardianName: submitData.guardianName,
        guardianRelation: submitData.guardianRelation,
        educationStatus: submitData.educationStatus,
        graduationYear: submitData.graduationYear,
        graduationMonth: submitData.graduationMonth,
        firstWantedMajor: choice1,
        secondWantedMajor: choice2,
        thirdWantedMajor: choice3,
        teacherName: submitData.teacherName || undefined,
        schoolLocation: schoolLocation || undefined,
      },
    };

    try {
      if (!isEdit) {
        await application.postFirstSubmission(data);
        imgInput.current?.files &&
          (await application.postImage(imgInput.current?.files[0]));
      } else {
        await application.patchFirstSubmission(data);
        imgInput.current?.files &&
          (await application.postImage(imgInput.current?.files[0]));
      }
      // push('/calculator');
    } catch (error: any) {
      // accessToken 없을 시에 accessToken 발급 후 logout 요청
      if (error.response.status === 401) {
        try {
          // accessToken 발급
          await auth.refresh();
          apply(submitData);
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log(error);
      }
    }
  };

  const readImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (typeof event.target?.result === 'string') {
        setImgURL(event.target.result);
      }
    };

    if (event.target.files) {
      event.target.files[0] && reader.readAsDataURL(event.target.files[0]);
    }
  };

  const onSubmit = async (data: ApplyFormType) => {
    onClick();
    if (isMajorSelected && isAddressExist && isSchoolNameExist && isIdPhoto) {
      await apply(data);
    } else {
      return;
    }
  };

  const onClick = () => {
    choice1 && choice2 && choice3
      ? setIsMajorSelected(true)
      : setIsMajorSelected(false);
    address ? setIsAddressExist(true) : setIsAddressExist(false);
    schoolName || graduationStatus === '검정고시'
      ? setIsSchoolNameExist(true)
      : setIsSchoolNameExist(false);
    imgURL ? setIsIdPhoto(true) : setIsIdPhoto(false);
  };

  return (
    <>
      {showFindAddressModal && <FindAddressModal />}
      {showFindSchoolModal && <FindSchoolModal />}
      {showDepartmentModal && <DepartmentModal />}
      <Header />
      <S.ApplyPage>
        <ApplyBarBox />
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
                background: ${gender === '남자' && '#42bafe'};
              `}
            >
              남자
            </S.GenderSelect>
            <S.GenderSelect
              css={css`
                background: ${gender === '여자' && '#42bafe'};
              `}
            >
              여자
            </S.GenderSelect>
          </S.GenderBox>
          <S.BirthBox>
            <S.Birth>{birthYear}</S.Birth>
            <S.Birth>{birthMonth}</S.Birth>
            <S.Birth>{birthDate}</S.Birth>
          </S.BirthBox>
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
                value: /^[0-9]{10}$/,
                message: '* 집 전화번호를 확인해주세요',
              },
            })}
            placeholder="집 전화번호를 입력해주세요.('-'제외 10자리)"
          />
          <S.Cellphone>{cellphoneNumber}</S.Cellphone>
          <S.Title>지원자 현황</S.Title>
          <S.TypeBox>
            <S.Type
              {...register('screening')}
              type="radio"
              value="일반전형"
              id="common"
            />
            <S.TypeLabel htmlFor="common">일반전형</S.TypeLabel>
            <S.Type
              {...register('screening')}
              type="radio"
              value="사회통합전형"
              id="social"
            />
            <S.TypeLabel htmlFor="social">사회통합전형</S.TypeLabel>
            <S.Type
              {...register('screening')}
              type="radio"
              value="특별전형"
              id="special"
            />
            <S.TypeLabel htmlFor="special">특별전형</S.TypeLabel>
          </S.TypeBox>
          <S.SchoolBox>
            <S.SchoolName>{schoolName}</S.SchoolName>
            <S.SchoolSearchButton
              css={css`
                ${graduationStatus === '검정고시' &&
                'background: #a0a0a0; cursor: default;'}
              `}
              onClick={() =>
                graduationStatus !== '검정고시' && setShowFindSchoolModal()
              }
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
              <S.GraduationType
                {...register('educationStatus')}
                type="radio"
                value="졸업예정"
                id="willGraduate"
              />
              <S.GraduatedTypeLabel htmlFor="willGraduate">
                졸업예정
              </S.GraduatedTypeLabel>
              <S.GraduationType
                {...register('educationStatus')}
                type="radio"
                value="졸업"
                id="graduated"
              />
              <S.GraduatedTypeLabel htmlFor="graduated">
                졸업
              </S.GraduatedTypeLabel>
              <S.GraduationType
                {...register('educationStatus')}
                type="radio"
                value="검정고시"
                id="GED"
              />
              <S.GraduatedTypeLabel
                htmlFor="GED"
                onClick={() => {
                  setSchoolLocation('');
                  setSchoolName('');
                }}
              >
                검정고시
              </S.GraduatedTypeLabel>
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
                {choice1 || '선택'}
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
                {choice2 || '선택'}
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
                {choice3 || '선택'}
              </S.DepartmentSelectButton>
              <S.DepartmentOrderDescription>
                (3지망)
              </S.DepartmentOrderDescription>
            </S.DepartmentContentBox>
          </S.DepartmentBox>
          <S.Title>보호자</S.Title>
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
          <S.Title>담임 선생님</S.Title>
          <S.TeacherName
            {...register('teacherName', {
              required: '* 성함을 입력해주세요',
              maxLength: {
                value: 20,
                message: '* 성함을 확인해주세요',
              },
            })}
            placeholder={
              graduationStatus === '검정고시'
                ? ''
                : '담임선생님의 연락처를 입력해주세요.'
            }
            disabled={graduationStatus === '검정고시'}
          />
          <S.TeacherPhone
            {...register('teacherCellphoneNumber', {
              required: '* 성함을 입력해주세요',
              maxLength: {
                value: 11,
                message: '* 연락처를 확인해주세요',
              },
            })}
            placeholder={
              graduationStatus === '검정고시'
                ? ''
                : '담임선생님의 연락처를 입력해주세요.'
            }
            disabled={graduationStatus === '검정고시'}
          />
          <S.NextButton type="submit" onClick={onClick}>
            다음
          </S.NextButton>
        </S.ApplyPageContent>
        <S.ErrorBox>
          <S.Error>{!isIdPhoto && '* 증명사진을 등록해주세요'}</S.Error>
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
