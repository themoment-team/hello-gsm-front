import type { NextPage } from 'next';
import * as S from './style';
import { FieldErrors, useForm } from 'react-hook-form';
import { SignUpResultModal } from 'components';
import { css } from '@emotion/react';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useRouter } from 'next/router';
import TosBox from './TosBox';
import { toast } from 'react-toastify';
import { GenderType } from 'type/application';
import identity from 'Api/identity';

interface UserForm {
  gender: GenderType;
  name: string;
  agree: boolean;
  year: string;
  month: string;
  day: string;
  phoneNumber: string;
  code: string;
}

const SignUpPage: NextPage = () => {
  const [showResult, setShowResult] = useState(false);
  const [isSent, setIsSent] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    formState: { errors },
  } = useForm<UserForm>();
  /**
   *
   * @param top : 각 컴포넌트 높이;
   * @returns css - 에러가 있으면 애니메이션, 스타일 추가
   */
  const selectErrorStyle = (top?: number) =>
    css({
      color: 'red',
      ':after': {
        backgroundColor: 'red',
      },
      animation: `${S.shake} 0.3s`,
      top: top,
    });

  const onValid = ({
    gender,
    name,
    year,
    month,
    day,
    phoneNumber,
    code,
  }: UserForm) => {
    /**
     * dayjs 라이브러리를 사용하여 YYYY-MM-DD 형식에 맞게 포맷
     * 월은 0부터 시작
     */
    const birth = dayjs()
      .set('year', Number(year))
      .set('month', Number(month))
      .set('date', Number(day))
      .format('YYYY-MM-DD');

    const register = async () => {
      try {
        await identity.postMyIdentity({
          birth,
          gender,
          name,
          phoneNumber,
          code,
        });
        setShowResult(true);
        setTimeout(() => {
          router.replace('/');
        }, 3000);
      } catch (e: any) {
        toast.error(e.message);
      }
    };

    if (!isVerified) {
      toast.error('전화번호 인증을 해주세요.');
    } else register();
  };

  const inValid = (errors: FieldErrors) => {
    console.error(errors);
  };

  /**
   * 인증번호를 발급하는 함수
   * @param phoneNumber: 전화번호
   */
  const sendCertificationNumber = async (phoneNumber: string) => {
    if (!errors.phoneNumber && /^[0][1][0][0-9]{8}/.test(phoneNumber)) {
      try {
        await identity.postCode(phoneNumber);
        toast.success('인증번호를 전송했어요.');
        setIsSent(true);
      } catch (e) {
        toast.error('인증번호 전송을 실패했어요. 다시 시도해주세요.');
      }
    } else {
      toast.error('전화번호를 다시 확인해주세요.');
      setIsSent(false);
    }
  };

  /**
   * 인증번호를 확인하는 함수
   * @param code - 발급 받은 인증번호
   */
  const checkCertificationNumber = async (code: string) => {
    try {
      await identity.postAuthCode(code);
      setIsVerified(true);
      toast.success('인증되었어요.');
    } catch (e: any) {
      if (e?.response.data.message) {
        toast.error(e?.response.data.message);
      } else {
        toast.error('휴대폰 인증에 실패했어요. 다시 시도해주세요.');
      }
    }
  };

  return (
    <>
      {showResult && <SignUpResultModal />}
      <S.SignUpPage>
        <S.SignUpForm onSubmit={handleSubmit(onValid, inValid)}>
          <S.Title>본인인증</S.Title>
          <S.LadioSection>
            <S.RadioLabel>
              <input
                {...register('gender', { required: '* 성별을 선택해주세요.' })}
                type="radio"
                id="gender"
                value="MALE"
              />
              <div>남자</div>
            </S.RadioLabel>
            <S.RadioLabel>
              <input
                {...register('gender', { required: '* 성별을 선택해주세요.' })}
                type="radio"
                id="gender"
                value="FEMALE"
              />
              <div>여자</div>
            </S.RadioLabel>
            <S.ErrorMessage css={errors.gender && selectErrorStyle(120)}>
              {errors.gender?.message}
            </S.ErrorMessage>
          </S.LadioSection>
          <S.Input
            placeholder="성명을 입력해주세요."
            type="text"
            {...register('name', {
              required: '* 성명을 입력해주세요.',
              pattern: {
                value: /^[가-힣]{2,5}$/,
                message: '* 성명을 확인해주세요.',
              },
            })}
          />
          <S.ErrorMessage css={errors.name && selectErrorStyle(220)}>
            {errors.name?.message}
          </S.ErrorMessage>

          <S.SelectSection>
            <S.Select
              {...register('year', {
                validate: {
                  notZero: value => value !== 'unSelected',
                },
              })}
            >
              <option value={'unSelected'}>년</option>
              {[...Array(10)].map((_, i) => (
                <option value={`200${i}`} key={i}>
                  200{i}년
                </option>
              ))}
            </S.Select>

            <S.Select
              {...register('month', {
                validate: {
                  notZero: value => value !== 'unSelected',
                },
              })}
            >
              <option value={'unSelected'}>월</option>
              {[...Array(12)].map((_, i) => (
                <option value={`${i}`} key={i}>
                  {i + 1}월
                </option>
              ))}
            </S.Select>

            <S.Select
              {...register('day', {
                validate: {
                  notZero: value => value !== 'unSelected',
                },
              })}
            >
              <option value={'unSelected'}>일</option>
              {[...Array(31)].map((_, i) => (
                <option key={i} value={`${i + 1}`}>
                  {i + 1}일
                </option>
              ))}
            </S.Select>
          </S.SelectSection>
          <S.ErrorMessage
            css={
              (errors?.year || errors?.day || errors?.month) &&
              selectErrorStyle(300)
            }
          >
            {errors?.year || errors?.day || errors?.month
              ? '* 생년월일을 선택해주세요.'
              : ''}
          </S.ErrorMessage>

          <S.TelNumContainer>
            <S.Input
              disabled={isSent && !errors.phoneNumber}
              type="text"
              placeholder="전화번호를 입력해주세요."
              {...register('phoneNumber', {
                required: '* 전화번호를 입력해주세요.',
                validate: {
                  notHypen: value =>
                    !value.includes('-') || '( - )를 제외하고 입력해주세요.',
                },
                pattern: {
                  value: /^[0][1][0][0-9]{8}/,
                  message: '* 전화번호를 확인해주세요.',
                },
              })}
              css={css`
                margin-bottom: 0px !important;
              `}
            />
            {isSent && !errors.phoneNumber ? (
              <S.ReSend
                onClick={() => sendCertificationNumber(watch('phoneNumber'))}
              >
                인증번호 재전송
              </S.ReSend>
            ) : (
              <S.CertificationButton
                onClick={() => sendCertificationNumber(watch('phoneNumber'))}
                type="button"
              >
                인증
              </S.CertificationButton>
            )}
          </S.TelNumContainer>
          {isSent && !errors.phoneNumber && (
            <S.TelNumContainer
              css={css`
                margin-top: 12px;
              `}
            >
              <S.Input
                type="text"
                placeholder="인증번호를 입력해주세요."
                disabled={isVerified}
                css={css`
                  margin-bottom: 0px !important;
                `}
                {...register('code', {
                  required: '* 인증번호를 입력해주세요.',
                  pattern: {
                    value: /^\d{6}$/,
                    message: '* 인증번호를 확인해주세요.',
                  },
                })}
              />

              <S.CertificationButton
                onClick={() => checkCertificationNumber(watch('code'))}
                type="button"
              >
                확인
              </S.CertificationButton>
            </S.TelNumContainer>
          )}
          <S.ErrorMessage css={errors.phoneNumber && selectErrorStyle(377)}>
            {errors.phoneNumber?.message}
          </S.ErrorMessage>
          <S.ErrorMessage css={errors.code && selectErrorStyle(460)}>
            {errors.code?.message}
          </S.ErrorMessage>
          <S.NoticeSection>
            <S.NoticeText>
              {isSent && !errors.phoneNumber
                ? '*입력하신 전화번호로 인증번호가 발송되었어요.'
                : '* -를 포함하지않은 번호만 입력해주세요.'}
            </S.NoticeText>
            <S.ResetText
              onClick={() => {
                setValue('phoneNumber', '');
                setValue('code', '');
                setIsSent(false);
                setIsVerified(false);
                // 'code' 필드의 에러 초기화
                setError('code', {
                  type: '',
                  message: '',
                });
              }}
            >
              전화번호 초기화
            </S.ResetText>
          </S.NoticeSection>

          <TosBox />
          <S.CheckLabel htmlFor="check">
            <input
              {...register('agree', { required: '* 동의를 선택해주세요.' })}
              type="checkbox"
              id="check"
            />
            개인정보 이용약관을 확인했으며, 이에 동의합니다.
          </S.CheckLabel>
          <S.ErrorMessage
            css={errors.agree && selectErrorStyle(isSent ? 860 : 780)}
          >
            {errors.agree?.message}
          </S.ErrorMessage>
          <S.Button>가입하기</S.Button>
          <S.LineList>
            <S.Line css={errors.gender && selectErrorStyle()}>성별</S.Line>
            <S.Line css={errors.name && selectErrorStyle()}>성명</S.Line>
            <S.Line
              css={
                (errors?.year || errors?.day || errors?.month) &&
                selectErrorStyle()
              }
            >
              생년월일
            </S.Line>
            <S.Line
              css={(errors.phoneNumber || errors.code) && selectErrorStyle()}
            >
              전화번호
            </S.Line>
            <S.Line css={errors.agree && selectErrorStyle()}>
              개인정보 이용약관
            </S.Line>
          </S.LineList>
        </S.SignUpForm>
      </S.SignUpPage>
    </>
  );
};

export default SignUpPage;
