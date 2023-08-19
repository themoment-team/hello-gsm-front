import type { NextPage } from 'next';
import * as S from './style';
import { FieldErrors, useForm } from 'react-hook-form';
import { SignUpResultModal } from 'components';
import { css } from '@emotion/react';
import dayjs from 'dayjs';
import auth from 'Api/auth';
import { useState } from 'react';
import { useRouter } from 'next/router';
import TosBox from './TosBox';
import { toast } from 'react-toastify';

interface UserForm {
  gender: '남자' | '여자';
  name: string;
  agree: boolean;
  year: string;
  month: string;
  day: string;
  cellphoneNumber: string;
}

const SignUpPage: NextPage = () => {
  const [showResult, setShowResult] = useState(false);
  const [isSent, setIsSent] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>();

  const onValid = ({
    gender,
    name,
    year,
    month,
    day,
    cellphoneNumber,
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
        await auth.signup({ birth, name, gender, cellphoneNumber });
        setShowResult(true);
        setTimeout(() => {
          router.replace('/auth/signin');
        }, 3000);
      } catch (e: any) {
        toast.error(e.message);
      }
    };
    register();
  };

  const inValid = (errors: FieldErrors) => {
    console.log(errors);
  };

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

  const sendCertificationNumber = () => {
    setTimeout(() => {
      if (!errors.cellphoneNumber) setIsSent(true);
    }, 300);
    console.log('인증번호 전송 로직 작성');
  };

  const checkCertificationNumber = () => {
    console.log('인증번호 확인 로직 작성');
  };

  return (
    <>
      {showResult && <SignUpResultModal />}
      <S.SignUpPage>
        <S.SignUpForm onSubmit={handleSubmit(onValid, inValid)}>
          <S.Title>회원가입</S.Title>
          <S.LadioSection>
            <S.RadioLabel>
              <input
                {...register('gender', { required: '* 성별을 선택해주세요.' })}
                type="radio"
                id="gender"
                value="남자"
              />
              <div>남자</div>
            </S.RadioLabel>
            <S.RadioLabel>
              <input
                {...register('gender', { required: '* 성별을 선택해주세요.' })}
                type="radio"
                id="gender"
                value="여자"
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
          <S.ErrorMessage css={errors.name && selectErrorStyle(255)}>
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
              selectErrorStyle(330)
            }
          >
            {errors?.year || errors?.day || errors?.month
              ? '* 생년월일을 선택해주세요.'
              : ''}
          </S.ErrorMessage>

          <S.TelNumContainer>
            <S.Input
              disabled={isSent && !errors.cellphoneNumber}
              type="text"
              placeholder="전화번호를 입력해주세요."
              {...register('cellphoneNumber', {
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
            {isSent && !errors.cellphoneNumber ? (
              <S.ReSend>인증번호 재전송</S.ReSend>
            ) : (
              <S.CertificationButton onClick={sendCertificationNumber}>
                인증
              </S.CertificationButton>
            )}
          </S.TelNumContainer>
          {isSent && !errors.cellphoneNumber && (
            <S.TelNumContainer
              css={css`
                margin-top: 12px;
              `}
            >
              <S.Input
                type="text"
                placeholder="인증번호를 입력해주세요."
                css={css`
                  margin-bottom: 0px !important;
                `}
              />
              <S.CertificationButton onClick={checkCertificationNumber}>
                확인
              </S.CertificationButton>
            </S.TelNumContainer>
          )}
          <S.ErrorMessage css={errors.cellphoneNumber && selectErrorStyle(410)}>
            {errors.cellphoneNumber?.message}
          </S.ErrorMessage>
          <S.NoticeText>
            {isSent && !errors.cellphoneNumber
              ? '*입력하신 전화번호로 인증번호가 발송되었어요 .'
              : '* -를 포함하지않은 번호만 입력해주세요.'}
          </S.NoticeText>
          <TosBox />
          <S.CheckLabel htmlFor="check">
            <input
              {...register('agree', { required: '* 동의를 선택해주세요.' })}
              type="checkbox"
              id="check"
            />
            개인정보 이용약관을 확인했으며, 이에 동의합니다.
          </S.CheckLabel>
          <S.ErrorMessage css={errors.agree && selectErrorStyle(810)}>
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
            <S.Line css={errors.cellphoneNumber && selectErrorStyle()}>
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
