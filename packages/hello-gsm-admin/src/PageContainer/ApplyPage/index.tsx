import React, { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import * as I from 'Assets/svg';
import { css } from '@emotion/react';
import {
  DepartmentModal,
  FindAddressModal,
  FindSchoolModal,
  ApplyBarBox,
  ApplyPostModal,
} from 'components';
import { useForm } from 'react-hook-form';
import { ApplyFormType } from 'type/application';
import { toast } from 'react-toastify';
import formatMajor from 'Utils/Format/formatMajor';
import { ApplicationIdentityType } from 'type/data';
import useApplyStore from 'Stores/ApplyStoreContainer';

const ApplyPage: NextPage<
  ApplicationIdentityType & {
    onNext: () => void;
  }
> = ({ applicationData, onNext }) => {
  const imgInput = useRef<HTMLInputElement>(null);
  const [imgURL, setImgURL] = useState<string>('');
  const [isIdPhoto, setIsIdPhoto] = useState<boolean>(true);
  const [isMajorSelected, setIsMajorSelected] = useState<boolean>(true);
  const [isAddressExist, setIsAddressExist] = useState<boolean>(true);
  const [isSchoolNameExist, setIsSchoolNameExist] = useState<boolean>(true);

  const [isSpecialScreening, setIsSpecialScreening] = useState<boolean>(false);
  const userBirth =
    applicationData && new Date(applicationData?.admissionInfo.applicantBirth);

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
    setApplyData,
  } = useApplyStore();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ApplyFormType>();

  const graduationStatus = watch('graduation');

  useEffect(() => {
    const admissionInfo = applicationData?.admissionInfo;

    if (
      applicationData?.admissionInfo.screening === 'SPECIAL_ADMISSION' ||
      applicationData?.admissionInfo.screening === 'SPECIAL_VETERANS'
    ) {
      setIsSpecialScreening(true);
    }
    setValue('applicantImageUri', admissionInfo?.applicantImageUri ?? '');
    setValue('address', admissionInfo?.address ?? '');
    setValue('detailAddress', admissionInfo?.detailAddress ?? '');
    setValue('graduation', admissionInfo?.graduation ?? 'CANDIDATE');
    setValue('telephone', admissionInfo?.telephone ?? '');
    setValue('guardianName', admissionInfo?.guardianName ?? '');
    setValue(
      'relationWithApplicant',
      admissionInfo?.relationWithApplicant ?? '',
    );
    setValue('guardianPhoneNumber', admissionInfo?.guardianPhoneNumber ?? '');
    setValue('teacherName', admissionInfo?.teacherName ?? '');
    setValue('teacherPhoneNumber', admissionInfo?.teacherPhoneNumber ?? '');
    setValue('screening', admissionInfo?.screening ?? '');
    setImgURL(admissionInfo?.applicantImageUri ?? '');
    setChoice1(admissionInfo?.desiredMajor.firstDesiredMajor ?? '');
    setChoice2(admissionInfo?.desiredMajor.secondDesiredMajor ?? '');
    setChoice3(admissionInfo?.desiredMajor.thirdDesiredMajor ?? '');
    setSchoolName(admissionInfo?.schoolName ?? '');
    setSchoolLocation(admissionInfo?.schoolLocation ?? '');
    setApplicantAddress(admissionInfo?.address ?? '');
  }, [applicationData, applicationData?.admissionInfo]);

  const apply = (submitData: ApplyFormType) => {
    setshowApplyPostModal();

    const applyData: ApplyFormType = {
      applicantImageUri: imgURL,
      address: applicantAddress,
      detailAddress: submitData?.detailAddress,
      teacherPhoneNumber: submitData?.teacherPhoneNumber || null,
      teacherName: submitData?.teacherName || null,
      telephone: submitData?.telephone || null,
      guardianPhoneNumber: submitData?.guardianPhoneNumber,
      guardianName: submitData?.guardianName,
      relationWithApplicant: submitData?.relationWithApplicant,
      schoolName: schoolName || null,
      schoolLocation: schoolLocation || null,
      graduation: submitData?.graduation,
      firstDesiredMajor: choice1,
      secondDesiredMajor: choice2,
      thirdDesiredMajor: choice3,
      screening: submitData?.screening,
    };
    setApplyData(applyData);

    setshowApplyPostModal();

    onNext();
  };

  const readImg = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (event.target.files) {
      if (event.target.files[0].size > 512000) {
        toast.error('증명사진은 500KB 이하만 업로드 가능해요.');
        return;
      }
      if (!event.target.files[0].type.includes('image')) {
        toast.error('이미지 파일만 업로드 가능해요.');
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

    const formData = new FormData();
    imgInput.current?.files &&
      formData?.append('file', imgInput.current?.files[0]);

    // try {
    //   const {
    //     data: { url },
    //   }: { data: { url: string } } = await application.postImage(formData);

    //   setImgURL(url);
    //   toast.success('이미지가 등록되었어요.');
    // } catch (e) {
    //   toast.error('이미지 저장 중 오류가 발생했어요. 다시 시도해주세요.');
    // }
  };

  const validate = async (): Promise<void> => {
    if (choice1 !== '' && choice2 !== '' && choice3 !== '') {
      setIsMajorSelected(true);
    } else {
      setIsMajorSelected(false);
    }

    if (applicantAddress !== '') {
      setIsAddressExist(true);
    } else {
      setIsAddressExist(false);
    }

    if (schoolName !== '' || watch('graduation') === 'GED') {
      setIsSchoolNameExist(true);
    } else {
      setIsSchoolNameExist(false);
    }

    if (watch('screening') === 'SPECIAL' || watch('screening') === '') {
      toast.error('전형을 선택해주세요.');
    }

    if (imgURL !== '') {
      setIsIdPhoto(true);
    } else {
      setIsIdPhoto(false);
      toast.error('증명사진을 등록해주세요.');
    }
  };

  const onSubmit = (data: ApplyFormType) => {
    validate();

    const isMajorSelected = choice1 !== '' && choice2 !== '' && choice3 !== '';
    const isAddressExist = applicantAddress !== '';
    const isSchoolNameExist =
      schoolName !== '' || watch('graduation') === 'GED';
    const isIdPhoto = imgURL !== '';
    const isSpecial =
      watch('screening') !== 'SPECIAL' || watch('screening') === '';

    if (
      isMajorSelected &&
      isAddressExist &&
      isSchoolNameExist &&
      isIdPhoto &&
      isSpecial
    ) {
      apply(data);
    } else {
      toast.error('원서 정보 저장 중 에러가 발생했어요. 다시 시도해주세요.');
    }
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
          <S.NameBox>{applicationData?.admissionInfo.applicantName}</S.NameBox>
          <S.GenderBox>
            <S.GenderSelect
              css={css`
                background: ${applicationData?.admissionInfo.applicantGender ===
                  'MALE' && '#42bafe'};
              `}
            >
              남자
            </S.GenderSelect>
            <S.GenderSelect
              css={css`
                background: ${applicationData?.admissionInfo.applicantGender ===
                  'FEMALE' && '#42bafe'};
              `}
            >
              여자
            </S.GenderSelect>
          </S.GenderBox>
          <S.BirthBox>
            <S.Birth>{userBirth?.getFullYear()}</S.Birth>
            <S.Birth>{userBirth?.getMonth() ?? 0 + 1}</S.Birth>
            <S.Birth>{userBirth?.getDate()}</S.Birth>
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
                required: '* 상세주소를 입력해주세요.',
                maxLength: {
                  value: 50,
                  message: '* 상세주소는 50글자 이하입니다.',
                },
              })}
            />
          </S.AddressBox>
          <S.HomeTelephone
            placeholder="집 전화번호를 입력해주세요. ('-'제외 9~11자리)"
            {...register('telephone', {
              required: false,
              validate: {
                notHypen: value =>
                  !value?.includes('-') || '( - )를 제외하고 입력해주세요.',
              },
              pattern: {
                value: /^0(?:\d|\d{2})(?:\d{3}|\d{4})\d{4}$/,
                message: '* 집 전화번호를 확인해주세요.',
              },
            })}
          />
          <S.Cellphone>
            {applicationData?.admissionInfo.applicantPhoneNumber}
          </S.Cellphone>
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
                setIsSpecialScreening(true);
              }}
              type="radio"
              value="SPECIAL"
              id="SPECIAL"
            />
            <S.TypeLabel
              htmlFor="SPECIAL"
              css={
                isSpecialScreening &&
                css`
                  background: #42bafe;
                  font-weight: 700;
                  font-size: 20px;
                  color: #f8f8f8;
                `
              }
            >
              정원 외 특별전형
            </S.TypeLabel>
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
                value: /^0(?:\d|\d{2})(?:\d{3}|\d{4})\d{4}$/,
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
                value: /^0(?:\d|\d{2})(?:\d{3}|\d{4})\d{4}$/,
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
