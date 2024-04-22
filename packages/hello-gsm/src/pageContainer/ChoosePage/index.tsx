import type { NextPage } from 'next';

import { useRouter } from 'next/router';

import { useForm } from 'react-hook-form';

import { GraduationStatusType } from 'types/application';

import * as S from './style';

interface StatusForm {
  status: GraduationStatusType;
}

const ChoosePage: NextPage = () => {
  const { register, handleSubmit, watch } = useForm<StatusForm>();
  const { push } = useRouter();

  const onValid = ({ status }: StatusForm) => {
    switch (status) {
      case 'CANDIDATE':
      case 'GRADUATE':
        push('/calculator/test');
        break;
      case 'GED':
        push('/calculator/test/ged');
        break;
    }
  };

  const desc = {
    CANDIDATE: <>2024년도에 졸업 예정인 학생을 의미해요.</>,
    GRADUATE: <>이미 중학교를 졸업한 학생을 의미해요.</>,
    GED: (
      <>
        중학교를 졸업하지 않고, <br /> 검정고시 시험에 합격한 사람을 의미해요.
      </>
    ),
  };

  return (
    <>
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
                value="GRADUATE"
              />
              <div>졸업자</div>
            </S.SystemLabel>
            <S.SystemLabel>
              <input
                {...register('status')}
                type="radio"
                name="status"
                value="CANDIDATE"
              />
              <div>졸업예정</div>
            </S.SystemLabel>
            <S.SystemLabel>
              <input
                {...register('status')}
                type="radio"
                name="status"
                value="GED"
              />
              <div>검정고시</div>
            </S.SystemLabel>
          </S.RadioSection>
          <S.Description>{desc[watch('status')]}</S.Description>
          <S.Submit>다음</S.Submit>
        </S.ChooseForm>
      </S.ChoosePage>
    </>
  );
};

export default ChoosePage;
