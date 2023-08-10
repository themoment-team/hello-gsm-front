import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import * as S from './style';

const ChoosePage: NextPage = () => {
  const { push } = useRouter();

  return (
    <>
      <S.ChoosePage>
        <S.ChooseTitle>
          성적을 계산하기 전에 현재 상태를 골라주세요.
        </S.ChooseTitle>
        <S.ChooseSection>
          <S.ChooseButton onClick={() => push('/calculator/test')}>
            졸업자
          </S.ChooseButton>
          <S.ChooseButton onClick={() => push('/calculator/test')}>
            졸업예정
          </S.ChooseButton>
          <S.ChooseButton onClick={() => push('/calculator/test/ged')}>
            검정고시
          </S.ChooseButton>
        </S.ChooseSection>
      </S.ChoosePage>
    </>
  );
};

export default ChoosePage;
