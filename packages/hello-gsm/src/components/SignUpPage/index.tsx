import type { NextPage } from 'next';
import * as S from './style';
import Header from '../Common/Header';
import { useForm } from 'react-hook-form';
import Input from '../Input';
// import { ErrorMessage } from '@hookform/error-message';

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
                {...register('gender')}
                type="radio"
                id="gender"
                value="남자"
              />
              <div>남자</div>
            </S.RadioLabel>
            <S.RadioLabel>
              <input
                {...register('gender')}
                type="radio"
                id="gender"
                value="여자"
              />
              <div>여자</div>
            </S.RadioLabel>
            <S.ErrorMessage>{}</S.ErrorMessage>
          </S.LadioSection>
          <Input
            placeholder="이름을 입력해주세요."
            type="text"
            bigWidth
            register={register('name', {
              required: '* 이름을 입력해주세요.',
            })}
          />

          <S.ErrorMessage>{errors.name?.message}</S.ErrorMessage>
          <S.SelectSection>
            <S.Select {...(register('year'), { required: true })}>
              {[...Array(10)].map((_, i) => (
                <S.Option value={`200${i}년`} key={i}>
                  200{i}년
                </S.Option>
              ))}
            </S.Select>

            <S.Select {...(register('month'), { required: true })}>
              <S.Option disabled>년</S.Option>
              {[...Array(12)].map((_, i) => (
                <S.Option value={`${i + 1}월`} key={i}>
                  {i + 1}월
                </S.Option>
              ))}
            </S.Select>

            <S.Select {...(register('day'), { required: true })}>
              {[...Array(31)].map((_, i) => (
                <S.Option key={i} value={`${i + 1}일`}>
                  {i + 1}일
                </S.Option>
              ))}
            </S.Select>
          </S.SelectSection>

          <Input
            placeholder="핸드폰 번호를 입력해주세요."
            type="text"
            bigWidth
            register={register('cellphoneNumber', {
              required: '* 핸드폰 번호를 입력해주세요.',
            })}
          />
          <S.ErrorMessage>{errors.cellphoneNumber?.message}</S.ErrorMessage>

          <S.TosBox></S.TosBox>

          <S.CheckLabel htmlFor="check">
            <input {...register('agree')} type="checkbox" id="check" />
            개인정보 이용약관을 확인했으며, 이에 동의합니다.
            {errors.agree?.message}
          </S.CheckLabel>
          <S.Button>가입하기</S.Button>
          <S.LineList>
            {Lines.map((line, i) => (
              <S.Line key={i}>{line}</S.Line>
            ))}
          </S.LineList>
        </S.SignUpForm>
      </S.SignUpPage>
    </>
  );
};

export default SignUpPage;
