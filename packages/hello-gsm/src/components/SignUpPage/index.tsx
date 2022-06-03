import type { NextPage } from 'next';
import * as S from './style';
import { FieldErrors, useForm } from 'react-hook-form';
import { Select, Header, Input } from 'components';
import { css } from '@emotion/react';
import dayjs from 'dayjs';
import auth from 'Api/auth';

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
    const birth = dayjs()
      .set('year', Number(year))
      .set('month', Number(month))
      .set('date', Number(day))
      .format('YYYY-MM-DD');

    const register = async () => {
      try {
        auth.signup({ birth, name, gender, cellphoneNumber });
      } catch (e) {
        console.error(e);
      }
    };
    return register;
  };

  const inValid = (errors: FieldErrors) => {
    console.log(errors);
    console.log('fail');
  };

  const SelectError = (top?: number) =>
    css({
      color: 'red',
      ':after': {
        backgroundColor: 'red',
      },
      animation: `${S.shake} 0.3s`,
      top: top,
    });

  return (
    <>
      <Header />
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
            <S.ErrorMessage css={errors.gender && SelectError(120)}>
              {errors.gender?.message}
            </S.ErrorMessage>
          </S.LadioSection>
          <Input
            placeholder="이름을 입력해주세요."
            type="text"
            bigWidth
            register={register('name', {
              required: '* 이름을 입력해주세요.',
            })}
          />
          <S.ErrorMessage css={errors.name && SelectError(255)}>
            {errors.name?.message}
          </S.ErrorMessage>
          <S.SelectSection>
            <Select register={register('year')}>
              {[...Array(10)].map((_, i) => (
                <option value={`200${i}`} key={i}>
                  200{i}년
                </option>
              ))}
            </Select>

            <Select register={register('month')}>
              {[...Array(12)].map((_, i) => (
                <option value={`${i}`} key={i}>
                  {i + 1}월
                </option>
              ))}
            </Select>

            <Select register={register('day')}>
              {[...Array(31)].map((_, i) => (
                <option key={i} value={`${i + 1}`}>
                  {i + 1}일
                </option>
              ))}
            </Select>
          </S.SelectSection>

          <Input
            type="text"
            placeholder="핸드폰 번호를 입력해주세요. ( - ) 제외"
            bigWidth
            register={register('cellphoneNumber', {
              required: '* 핸드폰 번호를 입력해주세요.',
              validate: {
                notHypen: value =>
                  !value.includes('-') || '( - )를 제외하고 입력해주세요.',
              },
            })}
          />
          <S.ErrorMessage css={errors.cellphoneNumber && SelectError(400)}>
            {errors.cellphoneNumber?.message}
          </S.ErrorMessage>
          <S.TosBox></S.TosBox>
          <S.CheckLabel htmlFor="check">
            <input
              {...register('agree', { required: '* 동의를 선택해주세요.' })}
              type="checkbox"
              id="check"
            />
            개인정보 이용약관을 확인했으며, 이에 동의합니다.
          </S.CheckLabel>
          <S.ErrorMessage css={errors.agree && SelectError(810)}>
            {errors.agree?.message}
          </S.ErrorMessage>
          <S.Button>가입하기</S.Button>
          <S.LineList>
            <S.Line css={errors.gender && SelectError()}>성별</S.Line>
            <S.Line css={errors.name && SelectError()}>이름</S.Line>
            <S.Line>생년월일</S.Line>
            <S.Line css={errors.cellphoneNumber && SelectError()}>
              핸드폰 번호
            </S.Line>
            <S.Line css={errors.agree && SelectError()}>
              개인정보 이용약관
            </S.Line>
          </S.LineList>
        </S.SignUpForm>
      </S.SignUpPage>
    </>
  );
};

export default SignUpPage;
