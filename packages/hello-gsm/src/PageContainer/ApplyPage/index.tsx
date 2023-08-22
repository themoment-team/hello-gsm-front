import React, { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import * as I from 'Assets/svg';
import { css } from '@emotion/react';
import useStore from 'Stores/StoreContainer';
import {
  DepartmentModal,
  FindAddressModal,
  FindSchoolModal,
  ApplyBarBox,
  ApplyPostModal,
} from 'components';
import { useForm } from 'react-hook-form';
import application from 'Api/application';
import { ApplicationDataType, ApplyFormType } from 'type/application';
import { toast } from 'react-toastify';
import { IdentityType } from 'type/identity';
import formatMajor from 'Utils/Format/formatMajor';

const ApplyPage: NextPage<
  ApplicationDataType & { identityData: IdentityType } & {
    onNext: () => void;
  }
> = ({ data, onNext, identityData }) => {
  const imgInput = useRef<HTMLInputElement>(null);
  const [imgURL, setImgURL] = useState<string>('');
  const [isIdPhoto, setIsIdPhoto] = useState<boolean>(true);
  const [isMajorSelected, setIsMajorSelected] = useState<boolean>(true);
  const [isAddressExist, setIsAddressExist] = useState<boolean>(true);
  const [isSchoolNameExist, setIsSchoolNameExist] = useState<boolean>(true);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const userBirth = new Date(identityData?.birth);

  const [isSpecialScreening, setIsSpecialScreening] = useState<boolean>(false);

  const {
    showDepartmentModal,
    setShowDepartmentModal,
    setSelectedChoice,
    choice1,
    setChoice1,
    choice2,
    setChoice2,
    choice3,
    setChoice3,
    showFindSchoolModal,
    setShowFindSchoolModal,
    schoolName,
    setSchoolName,
    schoolLocation,
    setSchoolLocation,
    showFindAddressModal,
    setShowFindAddressModal,
    applicantAddress,
    setApplicantAddress,
    showApplyPostModal,
    setshowApplyPostModal,
  } = useStore();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ApplyFormType>({
    defaultValues: {
      applicantImageUri: data?.admissionInfo.applicantImageUri || '',
      address: data?.admissionInfo.address || '',
      detailAddress: data?.admissionInfo.detailAddress || '',
      graduation: data?.admissionInfo.graduation,
      telephone: data?.admissionInfo.telephone || '',
      guardianName: data?.admissionInfo.guardianName,
      relationWithApplicant: data?.admissionInfo.relationWithApplicant,
      guardianPhoneNumber: data?.admissionInfo.guardianPhoneNumber,
      teacherName: data?.admissionInfo.teacherName,
      teacherPhoneNumber: data?.admissionInfo.teacherPhoneNumber,
      screening: data?.admissionInfo.screening,
    },
  });

  const graduationStatus = watch('graduation');

  useEffect(() => {
    if (data?.middleSchoolGrade !== undefined) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }

    if (
      data?.admissionInfo.screening === 'SPECIAL_ADMISSION' ||
      data?.admissionInfo.screening === 'SPECIAL_VETERANS'
    ) {
      setIsSpecialScreening(true);
    }

    setImgURL(data?.admissionInfo.applicantImageUri || '');
    setChoice1(data?.admissionInfo.desiredMajor.firstDesiredMajor || '');
    setChoice2(data?.admissionInfo.desiredMajor.secondDesiredMajor || '');
    setChoice3(data?.admissionInfo.desiredMajor.thirdDesiredMajor || '');
    setSchoolName(data?.admissionInfo.schoolName || '');
    setSchoolLocation(data?.admissionInfo.schoolLocation || '');
    setApplicantAddress(data?.admissionInfo.address || '');
  }, []);

  const registerImg = async () => {
    const formData = new FormData();

    imgInput.current?.files &&
      imgInput.current.files[0] &&
      formData?.append('photo', imgInput.current?.files[0]);

    formData?.get('photo') && application.postImage(formData);
  };

  const submissionApplication = async (submitData: ApplyFormType) => {
    const data = {
      admissionInfo: {
        address: applicantAddress,
        detailAddress: submitData?.detailAddress,
        teacherPhoneNumber: submitData?.teacherPhoneNumber || undefined,
        teacherName: submitData?.teacherName || undefined,
        telephone: submitData?.telephone || undefined,
        guardianPhoneNumber: submitData?.guardianPhoneNumber,
        guardianName: submitData?.guardianName,
        relationWithApplicant: submitData?.relationWithApplicant,
        schoolName: schoolName || undefined,
        schoolLocation: schoolLocation || undefined,
        graduation: submitData?.graduation,
        desiredMajor: {
          firstDesiredMajor: choice1,
          secondDesiredMajor: choice2,
          thirdDesiredMajor: choice3,
        },
        screening: submitData?.screening,
      },
    };
  };

  const apply = async (submitData: ApplyFormType) => {
    try {
      setshowApplyPostModal();
      await Promise.all([registerImg(), submissionApplication(submitData)]);
      setshowApplyPostModal();
    } catch (error: any) {
      setshowApplyPostModal();
    }
  };

  const readImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (event.target.files) {
      if (event.target.files[0].size > 512000) {
        toast.error('증명사진은 500KB 이하만 업로드 가능합니다.');
        return;
      }
      if (!event.target.files[0].type.includes('image')) {
        toast.error('이미지 파일만 업로드 가능합니다.');
        return;
      }
      // 파일의 url을 읽는다.
      event.target.files[0] && reader.readAsDataURL(event.target.files[0]);
    }

    // 읽기 동작 성공 시 미리보기 이미지 url 설정
    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (typeof event.target?.result === 'string') {
        setImgURL(event.target.result);
      }
    };

    // 사용자가 이미지 선택 단계에서 취소 시 등록된 이미지가 삭제되므로 미리보기 제거
    if (imgInput.current?.files && imgInput.current?.files[0] === undefined) {
      setImgURL('');
    }
  };

  const onSubmit = async (data: ApplyFormType) => {
    validate();
    if (isMajorSelected && isAddressExist && isSchoolNameExist && isIdPhoto) {
      await apply(data);
      onNext();
    } else {
      return;
    }
  };

  const validate = () => {
    choice1 && choice2 && choice3
      ? setIsMajorSelected(true)
      : setIsMajorSelected(false);
    applicantAddress !== ''
      ? setIsAddressExist(true)
      : setIsAddressExist(false);
    schoolName !== ''
      ? setIsSchoolNameExist(true)
      : setIsSchoolNameExist(false);
    imgURL ? setIsIdPhoto(true) : setIsIdPhoto(false);
    !isEdit && !imgURL && toast.error('증명사진을 등록해주세요.');
  };

  return (
    <>
      {showFindAddressModal && <FindAddressModal />}
      {showFindSchoolModal && <FindSchoolModal />}
      {showDepartmentModal && <DepartmentModal />}
      {showApplyPostModal && <ApplyPostModal />}
      <S.ApplyPage>
        <ApplyBarBox isSpecialScreening={isSpecialScreening} />
        <S.ApplyPageContent onSubmit={handleSubmit(onSubmit, validate)}>
          <S.Title>지원자 인적사항</S.Title>
          <S.ImgInputBox htmlFor="img-input">
            {imgURL ? (
              <S.InputImg src={imgURL} />
            ) : (
              <>
                <I.InputImg />
                <S.Description>사진을 업로드 해주세요.</S.Description>
              </>
            )}
          </S.ImgInputBox>
          <S.ImgInput
            type="file"
            id="img-input"
            accept="image/*"
            ref={imgInput}
            onChange={e => readImg(e)}
          />
          <S.NameBox>{identityData?.name}</S.NameBox>
          <S.GenderBox>
            <S.GenderSelect
              css={css`
                background: ${identityData?.gender === 'MALE' && '#42bafe'};
              `}
            >
              남자
            </S.GenderSelect>
            <S.GenderSelect
              css={css`
                background: ${identityData?.gender === 'FEMALE' && '#42bafe'};
              `}
            >
              여자
            </S.GenderSelect>
          </S.GenderBox>
          <S.BirthBox>
            <S.Birth>{userBirth.getFullYear()}</S.Birth>
            <S.Birth>{userBirth.getMonth() + 1}</S.Birth>
            <S.Birth>{userBirth.getDate()}</S.Birth>
          </S.BirthBox>
          <S.AddressBox>
            <S.AddressDescription>주소지 검색</S.AddressDescription>
            <S.FindAddressBox>
              <S.FindAddress>{applicantAddress}</S.FindAddress>
              <S.FindAddressButton onClick={setShowFindAddressModal}>
                주소 검색
              </S.FindAddressButton>
            </S.FindAddressBox>
            <S.AddressDescription>상세주소</S.AddressDescription>
            <S.DetailAddress
              placeholder="상세주소"
              type="text"
              {...register('detailAddress', {
                required: false,
                maxLength: {
                  value: 50,
                  message: '* 상세주소는 50글자 이하입니다.',
                },
              })}
            />
          </S.AddressBox>
          <S.HomeTelephone
            placeholder="집 전화번호를 입력해주세요. ('-'제외 9~10자리)"
            {...register('telephone', {
              required: false,
              validate: {
                notHypen: value =>
                  !value.includes('-') || '( - )를 제외하고 입력해주세요.',
              },
              pattern: {
                value: /^[0-9]{9,10}$/,
                message: '* 집 전화번호를 확인해주세요.',
              },
            })}
          />
          <S.Cellphone>{identityData?.phoneNumber}</S.Cellphone>
          <S.Title>지원자 현황</S.Title>
          <S.TypeBox>
            <S.Type
              {...register('screening')}
              onClick={() => {
                setIsSpecialScreening(false);
              }}
              type="radio"
              value="GENERAL"
              id="GENERAL"
            />
            <S.TypeLabel htmlFor="GENERAL">일반전형</S.TypeLabel>
            <S.Type
              {...register('screening')}
              onClick={() => {
                setIsSpecialScreening(false);
              }}
              type="radio"
              value="SOCIAL"
              id="SOCIAL"
            />
            <S.TypeLabel htmlFor="SOCIAL">사회통합전형</S.TypeLabel>
            <S.Type
              {...register('screening')}
              onClick={() => {
                setValue('screening', '');
                setIsSpecialScreening(true);
              }}
              type="radio"
              value="SPECIAL"
              id="SPECIAL"
            />
            <S.TypeLabel htmlFor="SPECIAL">정원 외 특별전형</S.TypeLabel>
          </S.TypeBox>
          {isSpecialScreening && (
            <S.SpecialScreeningBox>
              <h3>정원 외 특별전형</h3>

              <S.ScreeningButton>
                <S.Type
                  {...register('screening')}
                  type="radio"
                  value="SPECIAL_VETERANS"
                  id="SPECIAL_VETERANS"
                />
                <S.TypeLabel htmlFor="SPECIAL_VETERANS">
                  국가보훈대상자
                </S.TypeLabel>
                <S.Type
                  {...register('screening')}
                  type="radio"
                  value="SPECIAL_ADMISSION"
                  id="SPECIAL_ADMISSION"
                />
                <S.TypeLabel htmlFor="SPECIAL_ADMISSION">
                  특례입학대상자
                </S.TypeLabel>
              </S.ScreeningButton>
            </S.SpecialScreeningBox>
          )}
          <S.SchoolBox>
            <S.SchoolName>{schoolName}</S.SchoolName>
            <S.SchoolSearchButton
              css={css`
                ${graduationStatus === 'GED' &&
                'background: #a0a0a0; cursor: default;'}
              `}
              onClick={() =>
                graduationStatus !== 'GED' && setShowFindSchoolModal()
              }
            >
              학교 검색
            </S.SchoolSearchButton>
          </S.SchoolBox>
          <S.GraduatedBox>
            <S.GraduationType
              {...register('graduation')}
              type="radio"
              value="CANDIDATE"
              id="willGraduate"
            />
            <S.GraduatedTypeLabel htmlFor="willGraduate">
              졸업예정
            </S.GraduatedTypeLabel>
            <S.GraduationType
              {...register('graduation')}
              type="radio"
              value="GRADUATE"
              id="graduated"
            />
            <S.GraduatedTypeLabel htmlFor="graduated">
              졸업
            </S.GraduatedTypeLabel>
            <S.GraduationType
              {...register('graduation')}
              type="radio"
              value="GED"
              id="GED"
            />
            <S.GraduatedTypeLabel
              htmlFor="GED"
              onClick={() => {
                setSchoolLocation('');
                setSchoolName('');
                setValue('teacherName', '');
                setValue('teacherPhoneNumber', '');
              }}
            >
              검정고시
            </S.GraduatedTypeLabel>
          </S.GraduatedBox>
          <S.DepartmentBox>
            <S.DepartmentContentBox>
              <S.DepartmentSelectButton
                onClick={() => {
                  setShowDepartmentModal();
                  setSelectedChoice(1);
                }}
              >
                {formatMajor(choice1) || '선택'}
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
                {formatMajor(choice2) || '선택'}
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
                {formatMajor(choice3) || '선택'}
              </S.DepartmentSelectButton>
              <S.DepartmentOrderDescription>
                (3지망)
              </S.DepartmentOrderDescription>
            </S.DepartmentContentBox>
          </S.DepartmentBox>
          <S.Title>보호자</S.Title>
          <S.GuardianName
            {...register('guardianName', {
              required: '* 성명을 입력해주세요.',
              pattern: {
                value: /^[가-힣]{1,20}$/,
                message: '* 성명을 확인해주세요.',
              },
            })}
            placeholder="보호자분의 성명을 입력해주세요."
          />
          <S.GuardianRelation
            {...register('relationWithApplicant', {
              required: '* 관계를 입력해주세요.',
              pattern: {
                value: /^[가-힣]{1,20}$/,
                message: '* 관계를 확인해주세요.',
              },
            })}
            placeholder="지원자분과의 관계를 입력해주세요."
          />
          <S.GuardianCellphone
            {...register('guardianPhoneNumber', {
              required: '* 핸드폰 번호를 입력해주세요.',
              validate: {
                notHypen: value =>
                  !value.includes('-') || '( - )를 제외하고 입력해주세요.',
              },
              pattern: {
                value: /^[0][1][0][0-9]{8}/,
                message: '* 핸드폰 번호를 확인해주세요.',
              },
            })}
            placeholder="보호자분의 핸드폰 번호를 입력해주세요. ('-'제외 11자리)"
          />
          <S.Title>담임 선생님</S.Title>
          <S.TeacherName
            {...register('teacherName', {
              required:
                graduationStatus !== 'GED' ? '* 성함을 입력해주세요.' : false,
              pattern: {
                value: /^[가-힣]{1,20}$/,
                message: '* 성함을 확인해주세요.',
              },
            })}
            placeholder={
              graduationStatus === 'GED'
                ? ''
                : '담임선생님의 성함을 입력해주세요.'
            }
            disabled={graduationStatus === 'GED'}
            css={css`
              background: ${graduationStatus === 'GED' && '#8B8B8B'};
            `}
          />
          <S.TeacherPhone
            {...register('teacherPhoneNumber', {
              required:
                graduationStatus !== 'GED'
                  ? '* 핸드폰 번호를 확인해주세요.'
                  : false,
              validate: {
                notHypen: value =>
                  !value?.includes('-') || '( - )를 제외하고 입력해주세요.',
              },
              pattern: {
                value: /^[0][1][0][0-9]{8}/,
                message: '* 핸드폰 번호를 확인해주세요.',
              },
            })}
            placeholder={
              graduationStatus === 'GED'
                ? ''
                : "담임선생님의 연락처를 입력해주세요. ('-'제외 11자리)"
            }
            disabled={graduationStatus === 'GED'}
            css={css`
              background: ${graduationStatus === 'GED' && '#8B8B8B'};
            `}
          />
          <S.NextButton type="submit">다음</S.NextButton>
        </S.ApplyPageContent>
        <S.ErrorBox isSpecialScreening={isSpecialScreening}>
          <S.Error>{!isIdPhoto && '* 증명사진을 등록해주세요.'}</S.Error>
          <S.Error>{!isAddressExist && '* 주소지를 입력해주세요.'}</S.Error>
          <S.Error>{errors.detailAddress?.message}</S.Error>
          <S.Error>{errors.telephone?.message}</S.Error>
          <S.Error>
            {!isSchoolNameExist && '* 출신 중학교를 입력해주세요.'}
          </S.Error>
          <S.Error>{errors.graduation?.message}</S.Error>
          <S.Error>{!isMajorSelected && '* 지원학과를 선택해주세요.'}</S.Error>
          <S.Error>{errors.guardianName?.message}</S.Error>
          <S.Error>{errors.relationWithApplicant?.message}</S.Error>
          <S.Error>{errors.guardianPhoneNumber?.message}</S.Error>
          <S.Error>{errors.teacherName?.message}</S.Error>
          <S.Error>{errors.teacherPhoneNumber?.message}</S.Error>
        </S.ErrorBox>
      </S.ApplyPage>
    </>
  );
};

export default ApplyPage;
