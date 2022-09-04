import { Header } from 'components';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as S from 'shared/Styles/Calculate';

interface StatusForm {
  status: '졸업자' | '검정고시' | '졸업예정';
}

const ChoosePage: NextPage = () => {
  const { register, handleSubmit } = useForm<StatusForm>();
  const { push } = useRouter();

  const onValid = ({ status }: StatusForm) => {
    switch (status) {
      case '졸업자':
      case '졸업예정':
        push('/calculator/test');
        break;
      case '검정고시':
        push('/calculator/test/ged');
        break;
    }
  };
  return (
    <>
      <Header />
      <S.ChoosePage>
        <S.ChooseForm onSubmit={handleSubmit(onValid)}>
          <S.ChooseTitle>
            성적을 계산하기 전에 현재 상태를 골라주세요.
          </S.ChooseTitle>
          <S.RadioSection>
            <S.SystemLabel>
              <input
                {...register('status')}
                type="radio"
                id="system"
                name="status"
                value="졸업자"
              />
              <div>졸업자</div>
            </S.SystemLabel>
            <S.SystemLabel>
              <input
                {...register('status')}
                type="radio"
                name="status"
                value="졸업예정"
              />
              <div>졸업예정</div>
            </S.SystemLabel>
            <S.SystemLabel>
              <input
                {...register('status')}
                type="radio"
                name="status"
                value="검정고시"
              />
              <div>검정고시</div>
            </S.SystemLabel>
          </S.RadioSection>
          <S.Submit>다음</S.Submit>
        </S.ChooseForm>
      </S.ChoosePage>
    </>
  );
};

export default ChoosePage;
