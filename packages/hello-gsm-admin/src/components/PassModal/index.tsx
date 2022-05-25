import { css, Global } from '@emotion/react';
import React, { useCallback, MouseEvent } from 'react';
import * as S from './style';
import useStore from 'Stores/StoreContainer';

const PassModal: React.FC = () => {
  const {
    showPassModal,
    setShowPassModal,
    passModalRegistrationNumber,
    passModalName,
    passModalPeriod,
  } = useStore();

  const removeClick = useCallback((e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  }, []);

  return (
    <S.PassModal onClick={setShowPassModal}>
      <Global
        styles={css`
          body {
            overflow: ${showPassModal ? 'hidden' : 'visible'};
          }
        `}
      />
      <S.PassModalBox onClick={removeClick}>
        <S.PassModalContent>
          <S.DescriptionBox>
            <S.RegistrationNumber>
              접수번호 {passModalRegistrationNumber}
            </S.RegistrationNumber>
            <S.Description>
              {passModalName}님의 {passModalPeriod}차 합격 여부를 선택해주세요.
            </S.Description>
          </S.DescriptionBox>
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
