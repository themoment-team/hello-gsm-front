import type { NextPage } from 'next';
import * as S from './style';
import Header from '../Common/Header';
import { useForm } from 'react-hook-form';
import Input from '../Input';
import Select from 'components/Select';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface UserForm {
  gender: string;
  name: string;
  agree: boolean;
  birth: string;
  year: string;
  month: string;
  day: string;
  cellphoneNumber: string;
}

const SignUpPage: NextPage = () => {
  const ErrorStyle = {
    marginTop: '10px',
    backgroundColor: 'red',
    '&::after': {
      backgroundColor: 'red',
    },
    ':hover': {
      color: 'blue',
    },
  };
  const {
    register,
    handleSubmit,
    setError,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<UserForm>();

  const onValid = (data: UserForm) => {
    console.log(data);
  };

  const inValid = errors => {
    console.log(errors);
  };

  const Lines = [
    '성별',
    '이름',
    '생년월일',
    '핸드폰 번호',
    '개인정보 이용약관',
  ];

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
            <S.ErrorMessage
              css={css`
                top: 120px;
              `}
            >
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

          <S.ErrorMessage
            css={css`
              top: 255px;
            `}
          >
            {errors.name?.message}
          </S.ErrorMessage>
          <S.SelectSection>
            <Select register={register('year')}>
              {[...Array(10)].map((_, i) => (
                <S.Option value={`200${i}년`} key={i}>
                  200{i}년
                </S.Option>
              ))}
            </Select>

            <Select register={register('month')}>
              {[...Array(12)].map((_, i) => (
                <S.Option value={`${i + 1}월`} key={i}>
                  {i + 1}월
                </S.Option>
              ))}
            </Select>

            <Select register={register('day')}>
              {[...Array(31)].map((_, i) => (
                <S.Option key={i} value={`${i + 1}일`}>
                  {i + 1}일
                </S.Option>
              ))}
            </Select>
          </S.SelectSection>

          <Input
            placeholder="핸드폰 번호를 입력해주세요."
            type="text"
            bigWidth
            register={register('cellphoneNumber', {
              required: '* 핸드폰 번호를 입력해주세요.',
            })}
          />
          <S.ErrorMessage
            css={css`
              top: 410px;
            `}
          >
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
          <S.ErrorMessage
            css={css`
              top: 810px;
            `}
          >
            {errors.agree?.message}
          </S.ErrorMessage>
          <S.Button>가입하기</S.Button>
          <S.LineList>
            <S.Line
              css={css`
                color: ${errors.gender ? 'red' : ''};
                ::after {
                  background-color: ${errors.gender ? 'red' : ''};
                }
              `}
            >
              성별
            </S.Line>
            <S.Line
              css={css`
                color: ${errors.name ? 'red' : ''};
                ::after {
                  background-color: ${errors.name ? 'red' : ''};
                }
              `}
            >
              이름
            </S.Line>
            <S.Line>생년월일</S.Line>
            <S.Line
              css={css`
                color: ${errors.cellphoneNumber ? 'red' : ''};
                ::after {
                  background-color: ${errors.cellphoneNumber ? 'red' : ''};
                }
              `}
            >
              핸드폰 번호
            </S.Line>
            <S.Line
              css={css`
                color: ${errors.agree ? 'red' : ''};
                ::after {
                  background-color: ${errors.agree ? 'red' : ''};
                }
              `}
            >
              개인정보 이용약관
            </S.Line>
          </S.LineList>
        </S.SignUpForm>
      </S.SignUpPage>
    </>
  );
};

export default SignUpPage;
