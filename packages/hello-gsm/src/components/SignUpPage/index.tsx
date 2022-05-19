import type { NextPage } from 'next';
import * as S from './style';
import Header from '../Common/Header';
import { useForm } from 'react-hook-form';
import Input from '../Input';
import Select from 'components/Select';

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
            <S.ErrorMessage>{errors.gender?.message}</S.ErrorMessage>
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

          <S.ErrorMessage>{errors.cellphoneNumber?.message}</S.ErrorMessage>

          <S.TosBox></S.TosBox>

          <S.CheckLabel htmlFor="check">
            <input
              {...register('agree', { required: '* 동의를 선택해주세요.' })}
              type="checkbox"
              id="check"
            />
            개인정보 이용약관을 확인했으며, 이에 동의합니다.
          </S.CheckLabel>
          <S.ErrorMessage>{errors.agree?.message}</S.ErrorMessage>
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
