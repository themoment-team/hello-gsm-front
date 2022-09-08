import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as S from './style';
import { toast } from 'react-toastify';

interface StatusForm {
  status: '졸업자' | '검정고시' | '졸업예정';
}

const ChoosePage: NextPage = ({ test }) => {
  const { register, handleSubmit } = useForm<StatusForm>();
  const { push } = useRouter();

  const onValid = ({ status }: StatusForm) => {
    switch (status) {
      case '졸업자':
      case '졸업예정':
        push('/calculator');
        break;
      case '검정고시':
        push('/calculator/ged');
        break;
    }
  };

  const inValid = () => {
    toast.error('학력 상태를 선택해주세요.');
  };

  return (
    <>
      <S.ChoosePage>
        <S.ChooseForm onSubmit={handleSubmit(onValid, inValid)}>
          <S.ChooseTitle>
            성적을 계산하기 전에 현재 상태를 골라주세요. {test}
          </S.ChooseTitle>
          <S.RadioSection>
            <S.SystemLabel>
              <input
                {...register('status', { required: true })}
                type="radio"
                id="system"
                name="status"
                value="졸업자"
              />
              <div>졸업자</div>
            </S.SystemLabel>
            <S.SystemLabel>
              <input
                {...register('status', { required: true })}
                type="radio"
                name="status"
                value="졸업예정"
              />
              <div>졸업예정</div>
            </S.SystemLabel>
            <S.SystemLabel>
              <input
                {...register('status', { required: true })}
                type="radio"
                name="status"
                value="검정고시"
              />
              <div>검정고시</div>
            </S.SystemLabel>
          </S.RadioSection>
          <div>
            <S.Desc>
              Internet Explorer 사용자분들은 <br />
              구글 크롬 브라우저를 이용해서 접속해 주시기 바랍니다.
            </S.Desc>
            <S.Submit>다음</S.Submit>
          </div>
        </S.ChooseForm>
      </S.ChoosePage>
    </>
  );
};

export default ChoosePage;
