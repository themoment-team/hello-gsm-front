import { css, Global } from '@emotion/react';
import React, { useState } from 'react';
import * as S from './style';

const PassModal: React.FC = () => {
  const [showPassModal, setShowPassModal] = useState<boolean>(true);
  const [name, setName] = useState<string>('김형록');
  const [registrationNumber, setRegistrationNumber] = useState<number>(1001);
  const [firstPeriod, setFirstPeriod] = useState<boolean>(true);

  return (
    <S.PassModal>
      <Global
        styles={css`
          body {
            overflow: ${showPassModal ? 'hidden' : 'visible'};
          }
        `}
      />
      <S.PassModalBox>
        <S.PassModalContent>
          <S.DescriptionBox>
            <S.RegistrationNumber>
              접수번호 {registrationNumber}
            </S.RegistrationNumber>
            <S.Description>
              {name}님의 {firstPeriod ? 1 : 2}차 합격 여부를 선택해주세요.
            </S.Description>
          </S.DescriptionBox>
          <S.ButtonWrap>
            <S.Fail>불합격</S.Fail>
            <S.Pass>합격</S.Pass>
          </S.ButtonWrap>
        </S.PassModalContent>
      </S.PassModalBox>
    </S.PassModal>
  );
};

export default PassModal;
