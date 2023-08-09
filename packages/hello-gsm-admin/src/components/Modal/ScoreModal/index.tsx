import application from 'Api/application';
import ModalDescription from 'components/ModalDescription';
import React, { useCallback, MouseEvent, useRef } from 'react';
import { toast } from 'react-toastify';
import useStore from 'Stores/StoreContainer';
import * as S from './style';

const ScoreModal: React.FC = () => {
  const scoreRef = useRef<HTMLInputElement>(null);
  const { setShowScoreModal, modalRegistrationNumber, setScoreModalValue } =
    useStore();

  const removeClick = useCallback((e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  }, []);

  const sendScore = async () => {
    const score: number = scoreRef.current?.value
      ? parseFloat(scoreRef.current?.value)
      : 0;
    const data = {
      registrationNumber: modalRegistrationNumber,
      personalityEvaluationScore: score,
    };
    if (!score || score > 100) {
      toast.error('점수를 확인해주세요.');
      return;
    }
    try {
      await application.score(data);
      setScoreModalValue(score);
      setShowScoreModal();
    } catch (error: any) {
      // accessToken 없을 시에 accessToken 발급 후 검색 결과 요청
      console.log(error);
    }
  };

  const enterEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendScore();
    }
  };

  return (
    <S.ScoreModal onClick={setShowScoreModal}>
      <S.ScoreModalBox onClick={removeClick}>
        <S.ScoreModalContent>
          <S.ScoreWrap>
            <ModalDescription />
            <S.ScoreInput
              ref={scoreRef}
              placeholder="2차 점수를 입력해주세요."
              onKeyPress={enterEvent}
            />
          </S.ScoreWrap>
          <S.ButtonWrap>
            <S.Cancel onClick={setShowScoreModal}>취소</S.Cancel>
            <S.Confirm onClick={sendScore}>확인</S.Confirm>
          </S.ButtonWrap>
        </S.ScoreModalContent>
      </S.ScoreModalBox>
    </S.ScoreModal>
  );
};

export default ScoreModal;
