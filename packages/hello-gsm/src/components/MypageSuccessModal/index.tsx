import * as S from './style';
import * as I from 'Assets/svg';
import React, { useEffect } from 'react';
import useStore from 'Stores/StoreContainer';

const SuccessModal: React.FC = () => {
  const { setShowMypageSuccessModal } = useStore();

  useEffect(() => {
    setTimeout(() => setShowMypageSuccessModal(), 5000);
  }, []);

  return (
    <S.SuccessModal>
      <S.Content>
        <I.Success />
        <S.DescriptionWrap>
          <S.Description>원서 제출에 성공했습니다.</S.Description>
          <S.PostScript>
            ( 원서와 수기로 작성해야되는 파일들을 출력해서 저희 학교 행정실에
            제출해야됩니다. )
          </S.PostScript>
        </S.DescriptionWrap>
      </S.Content>
    </S.SuccessModal>
  );
};

export default SuccessModal;
