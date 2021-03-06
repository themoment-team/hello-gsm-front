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
import { toast } from 'react-toastify';

const ApplyPage: NextPage<GetApplicationType> = ({ data }) => {
  const imgInput = useRef<HTMLInputElement>(null);
  const [imgURL, setImgURL] = useState<string>('');
  const [isIdPhoto, setIsIdPhoto] = useState<boolean>(true);
  const [isMajorSelected, setIsMajorSelected] = useState<boolean>(true);
  const [isAddressExist, setIsAddressExist] = useState<boolean>(true);
  const [isSchoolNameExist, setIsSchoolNameExist] = useState<boolean>(true);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const userBirth = new Date(data.birth);

  const { push } = useRouter();

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
    setLogged,
  } = useStore();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ApplyFormType>({
    defaultValues: {
      addressDetails:
        data.application?.application_details?.addressDetails || '',
      telephoneNumber:
        data.application?.application_details?.telephoneNumber || '',
      screening: data.application?.screening || '????????????',
      graduationYear: data.application?.application_details?.graduationYear,
      graduationMonth: data.application?.application_details?.graduationMonth,
      educationStatus:
        data.application?.application_details?.educationStatus || '????????????',
      guardianName: data.application?.application_details?.guardianName,
      guardianRelation: data.application?.application_details?.guardianRelation,
      guardianCellphoneNumber: data.application?.guardianCellphoneNumber,
      teacherName: data.application?.application_details?.teacherName,
      teacherCellphoneNumber: data.application?.teacherCellphoneNumber,
    },
  });

  const graduationStatus = watch('educationStatus');

  useEffect(() => {
    setLogged(true);
    if (data.application !== null) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
    setImgURL(data.application_image?.idPhotoUrl || '');
    setChoice1(data.application?.application_details?.firstWantedMajor || '');
    setChoice2(data.application?.application_details?.secondWantedMajor || '');
    setChoice3(data.application?.application_details?.thirdWantedMajor || '');
    setSchoolName(data.application?.schoolName || '');
    setSchoolLocation(
      data.application?.application_details?.schoolLocation || '',
    );
    setApplicantAddress(data.application?.application_details?.address || '');
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
        address: applicantAddress,
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

    const formData = new FormData();

    imgInput.current?.files &&
      formData.append('photo', imgInput.current?.files[0]);

    try {
      if (!isEdit) {
        await application.postFirstSubmission(data);
        imgInput.current?.files && (await application.postImage(formData));
      } else {
        await application.patchFirstSubmission(data);
        imgInput.current?.files &&
          imgInput.current.files[0] !== undefined &&
          (await application.postImage(formData));
      }

      if (watch('educationStatus') === '????????????') {
        push('/calculator/ged');
      } else {
        push('/calculator');
      }
      
    } catch (error: any) {
      // accessToken ?????? ?????? accessToken ?????? ??? logout ??????
      if (error.response.status === 401) {
        try {
          // accessToken ??????
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

    if (event.target.files) {
      if (event.target.files[0].size > 512000) {
        toast.error('??????????????? 500KB ????????? ????????? ???????????????.');
        return;
      }
      // ????????? url??? ?????????.
      event.target.files[0] && reader.readAsDataURL(event.target.files[0]);
    }

    // ?????? ?????? ?????? ??? ???????????? ????????? url ??????
    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (typeof event.target?.result === 'string') {
        setImgURL(event.target.result);
      }
    };

    // ???????????? ????????? ?????? ???????????? ?????? ??? ????????? ???????????? ??????????????? ???????????? ??????
    if (imgInput.current?.files && imgInput.current?.files[0] === undefined) {
      setImgURL('');
    }
  };

  const onSubmit = async (data: ApplyFormType) => {
    validate();
    if (isMajorSelected && isAddressExist && isSchoolNameExist && isIdPhoto) {
      await apply(data);
    } else {
      return;
    }
  };

  const validate = () => {
    choice1 && choice2 && choice3
      ? setIsMajorSelected(true)
      : setIsMajorSelected(false);
    applicantAddress ? setIsAddressExist(true) : setIsAddressExist(false);
    schoolName || graduationStatus === '????????????'
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
          <S.Title>????????? ????????????</S.Title>
          <S.ImgInputBox htmlFor="img-input">
            {imgURL ? (
              <S.InputImg src={imgURL} />
            ) : (
              <>
                <I.InputImg />
                <S.Description>????????? ????????? ????????????</S.Description>
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
          <S.NameBox>{data.name}</S.NameBox>
          <S.GenderBox>
            <S.GenderSelect
              css={css`
                background: ${data.gender === '??????' && '#42bafe'};
              `}
            >
              ??????
            </S.GenderSelect>
            <S.GenderSelect
              css={css`
                background: ${data.gender === '??????' && '#42bafe'};
              `}
            >
              ??????
            </S.GenderSelect>
          </S.GenderBox>
          <S.BirthBox>
            <S.Birth>{userBirth.getFullYear()}</S.Birth>
            <S.Birth>{userBirth.getMonth() + 1}</S.Birth>
            <S.Birth>{userBirth.getDate()}</S.Birth>
          </S.BirthBox>
          <S.AddressBox>
            <S.AddressDescription>????????? ??????</S.AddressDescription>
            <S.FindAddressBox>
              <S.FindAddress>{applicantAddress}</S.FindAddress>
              <S.FindAddressButton onClick={setShowFindAddressModal}>
                ?????? ??????
              </S.FindAddressButton>
            </S.FindAddressBox>
            <S.AddressDescription>????????????</S.AddressDescription>
            <S.DetailAddress
              placeholder="????????????"
              type="text"
              {...register('addressDetails', {
                required: false,
                maxLength: {
                  value: 50,
                  message: '* ??????????????? 50?????? ???????????????.',
                },
              })}
            />
          </S.AddressBox>
          <S.HomeTelephone
            {...register('telephoneNumber', {
              required: false,
              pattern: {
                value: /^[0-9]{9,10}$/,
                message: '* ??? ??????????????? ??????????????????',
              },
            })}
            placeholder="??? ??????????????? ??????????????????. ('-'?????? 9~10??????)"
          />
          <S.Cellphone>{data.cellphoneNumber}</S.Cellphone>
          <S.Title>????????? ??????</S.Title>
          <S.TypeBox>
            <S.Type
              {...register('screening')}
              type="radio"
              value="????????????"
              id="common"
            />
            <S.TypeLabel htmlFor="common">????????????</S.TypeLabel>
            <S.Type
              {...register('screening')}
              type="radio"
              value="??????????????????"
              id="social"
            />
            <S.TypeLabel htmlFor="social">??????????????????</S.TypeLabel>
            <S.Type
              {...register('screening')}
              type="radio"
              value="????????????"
              id="special"
            />
            <S.TypeLabel htmlFor="special">????????????</S.TypeLabel>
          </S.TypeBox>
          <S.SchoolBox>
            <S.SchoolName>{schoolName}</S.SchoolName>
            <S.SchoolSearchButton
              css={css`
                ${graduationStatus === '????????????' &&
                'background: #a0a0a0; cursor: default;'}
              `}
              onClick={() =>
                graduationStatus !== '????????????' && setShowFindSchoolModal()
              }
            >
              ?????? ??????
            </S.SchoolSearchButton>
          </S.SchoolBox>
          <S.GraduatedBox>
            <S.GraduatedDateBox>
              <S.GraduationYear
                defaultValue={'default'}
                {...register('graduationYear', {
                  required: true,
                  pattern: {
                    value: /^[0-9]+$/,
                    message: '* ???????????? ??????????????????',
                  },
                })}
              >
                <option disabled value="default">
                  ??????
                </option>
                {[...Array(14)].map((_, index: number) => (
                  <option key={index} value={'20' + (index + 10)}>
                    20{index + 10}
                  </option>
                ))}
              </S.GraduationYear>
              <S.GraduationMonth
                defaultValue={'default'}
                {...register('graduationMonth', {
                  required: true,
                  pattern: {
                    value: /^[0-9]+$/,
                    message: '* ???????????? ??????????????????',
                  },
                })}
              >
                <option disabled value="default">
                  ???
                </option>
                {[...Array(12)].map((_, index: number) => (
                  <option key={index} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </S.GraduationMonth>
            </S.GraduatedDateBox>
            <S.GraduatedSelectBox>
              <S.GraduationType
                {...register('educationStatus')}
                type="radio"
                value="????????????"
                id="willGraduate"
              />
              <S.GraduatedTypeLabel htmlFor="willGraduate">
                ????????????
              </S.GraduatedTypeLabel>
              <S.GraduationType
                {...register('educationStatus')}
                type="radio"
                value="??????"
                id="graduated"
              />
              <S.GraduatedTypeLabel htmlFor="graduated">
                ??????
              </S.GraduatedTypeLabel>
              <S.GraduationType
                {...register('educationStatus')}
                type="radio"
                value="????????????"
                id="GED"
              />
              <S.GraduatedTypeLabel
                htmlFor="GED"
                onClick={() => {
                  setSchoolLocation('');
                  setSchoolName('');
                  setValue('teacherName', '');
                  setValue('teacherCellphoneNumber', '');
                }}
              >
                ????????????
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
                {choice1 || '??????'}
              </S.DepartmentSelectButton>
              <S.DepartmentOrderDescription>
                (1??????)
              </S.DepartmentOrderDescription>
            </S.DepartmentContentBox>
            <S.DepartmentContentBox>
              <S.DepartmentSelectButton
                onClick={() => {
                  setShowDepartmentModal();
                  setSelectedChoice(2);
                }}
              >
                {choice2 || '??????'}
              </S.DepartmentSelectButton>
              <S.DepartmentOrderDescription>
                (2??????)
              </S.DepartmentOrderDescription>
            </S.DepartmentContentBox>
            <S.DepartmentContentBox>
              <S.DepartmentSelectButton
                onClick={() => {
                  setShowDepartmentModal();
                  setSelectedChoice(3);
                }}
              >
                {choice3 || '??????'}
              </S.DepartmentSelectButton>
              <S.DepartmentOrderDescription>
                (3??????)
              </S.DepartmentOrderDescription>
            </S.DepartmentContentBox>
          </S.DepartmentBox>
          <S.Title>?????????</S.Title>
          <S.GuardianName
            {...register('guardianName', {
              required: '* ????????? ??????????????????',
              pattern: {
                value: /^[???-???]{1,20}$/,
                message: '* ????????? ??????????????????',
              },
            })}
            placeholder="??????????????? ????????? ??????????????????."
          />
          <S.GuardianRelation
            {...register('guardianRelation', {
              required: '* ????????? ??????????????????',
              pattern: {
                value: /^[???-???]{1,20}$/,
                message: '* ????????? ??????????????????',
              },
            })}
            placeholder="?????????????????? ????????? ??????????????????."
          />
          <S.GuardianCellphone
            {...register('guardianCellphoneNumber', {
              required: '* ????????? ????????? ??????????????????',
              pattern: {
                value: /^[0-9]{11}$/,
                message: '* ????????? ????????? ??????????????????',
              },
            })}
            placeholder="??????????????? ????????? ????????? ??????????????????. ('-'?????? 11??????)"
          />
          <S.Title>?????? ?????????</S.Title>
          <S.TeacherName
            {...register('teacherName', {
              required:
                graduationStatus !== '????????????'
                  ? '* ????????? ??????????????????'
                  : false,
              pattern: {
                value: /^[???-???]{1,20}$/,
                message: '* ????????? ??????????????????',
              },
            })}
            placeholder={
              graduationStatus === '????????????'
                ? ''
                : '?????????????????? ????????? ??????????????????.'
            }
            disabled={graduationStatus === '????????????'}
            css={css`
              background: ${graduationStatus === '????????????' && '#8B8B8B'};
            `}
          />
          <S.TeacherPhone
            {...register('teacherCellphoneNumber', {
              required:
                graduationStatus !== '????????????'
                  ? '* ???????????? ??????????????????'
                  : false,
              pattern: {
                value: /^[0-9]{11}$/,
                message: '* ????????? ????????? ??????????????????',
              },
            })}
            placeholder={
              graduationStatus === '????????????'
                ? ''
                : "?????????????????? ???????????? ??????????????????. ('-'?????? 11??????)"
            }
            disabled={graduationStatus === '????????????'}
            css={css`
              background: ${graduationStatus === '????????????' && '#8B8B8B'};
            `}
          />
          <S.NextButton type="submit" onClick={validate}>
            ??????
          </S.NextButton>
        </S.ApplyPageContent>
        <S.ErrorBox>
          <S.Error>{!isIdPhoto && '* ??????????????? ??????????????????'}</S.Error>
          <S.Error>{!isAddressExist && '* ???????????? ??????????????????.'}</S.Error>
          <S.Error>{errors.addressDetails?.message}</S.Error>
          <S.Error>{errors.telephoneNumber?.message}</S.Error>
          <S.Error>
            {!isSchoolNameExist && '* ?????? ???????????? ??????????????????.'}
          </S.Error>
          <S.Error>
            {errors.graduationYear?.message
              ? errors.graduationYear.message
              : errors.graduationMonth?.message}
          </S.Error>
          <S.Error>{!isMajorSelected && '* ??????????????? ??????????????????'}</S.Error>
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
