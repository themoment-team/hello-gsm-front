import React, { useCallback, MouseEvent } from 'react';
import * as S from './style';
import useStore from 'Stores/StoreContainer';
import { ModalDescription } from 'components';

const PassModal: React.FC = () => {
  const { setShowPassModal } = useStore();

  const removeClick = useCallback((e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  }, []);

  return (
    <S.PassModal onClick={setShowPassModal}>
      <S.PassModalBox onClick={removeClick}>
        <S.PassModalContent>
          <ModalDescription />
          <S.ButtonWrap>
            <S.Fail onClick={setShowPassModal}>불합격</S.Fail>
            <S.Pass onClick={setShowPassModal}>합격</S.Pass>
          </S.ButtonWrap>
        </S.PassModalContent>
      </S.PassModalBox>
    </S.PassModal>
  );
};

export default PassModal;
