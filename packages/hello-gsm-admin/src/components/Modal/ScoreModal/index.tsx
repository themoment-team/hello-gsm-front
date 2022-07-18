import ModalDescription from 'components/ModalDescription';
import React, { useCallback, MouseEvent } from 'react';
import useStore from 'Stores/StoreContainer';
import * as S from './style';

const ScoreModal: React.FC = () => {
  const { setShowScoreModal } = useStore();

  const removeClick = useCallback((e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  }, []);

  return (
    <S.ScoreModal onClick={setShowScoreModal}>
      <S.ScoreModalBox onClick={removeClick}>
        <S.ScoreModalContent>
          <S.ScoreWrap>
            <ModalDescription />
            <S.ScoreInput placeholder="2차 점수를 입력해주세요." />
          </S.ScoreWrap>
          <S.ButtonWrap>
            <S.Cancel onClick={setShowScoreModal}>취소</S.Cancel>
            <S.Confirm onClick={setShowScoreModal}>확인</S.Confirm>
          </S.ButtonWrap>
        </S.ScoreModalContent>
      </S.ScoreModalBox>
    </S.ScoreModal>
  );
};

export default ScoreModal;
