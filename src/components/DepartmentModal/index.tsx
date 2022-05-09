import { css, Global } from '@emotion/react';
import React from 'react';
import useStore from 'Stores/StoreContainer';
import * as S from './style';

const DepartmentModal: React.FC = () => {
  const { showDepartmentModal, setShowDepartmentModal } = useStore();

  return (
    <S.DepartmentModal>
      <Global
        styles={css`
          body {
            overflow: ${showDepartmentModal ? 'hidden' : 'visible'};
          }
        `}
      />
      <S.FAQModalBox>
        <S.Title>원하시는 과를 골라주세요</S.Title>
        <S.SelectBox>
          <S.SelectContent onClick={setShowDepartmentModal}>
            인공지능 개발과
          </S.SelectContent>
          <S.SelectContent onClick={setShowDepartmentModal}>
            소프트웨어 개발과
          </S.SelectContent>
          <S.SelectContent onClick={setShowDepartmentModal}>
            스마트 iot과
          </S.SelectContent>
        </S.SelectBox>
      </S.FAQModalBox>
    </S.DepartmentModal>
  );
};

export default DepartmentModal;
