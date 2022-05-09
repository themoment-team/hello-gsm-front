import { css, Global } from '@emotion/react';
import React from 'react';
import useStore from 'Stores/StoreContainer';
import * as S from './style';

const DepartmentModal: React.FC = () => {
  const {
    showDepartmentModal,
    setShowDepartmentModal,
    selectedChoice,
    choice1,
    choice2,
    choice3,
    setChoice1,
    setChoice2,
    setChoice3,
  } = useStore();

  const choiceDepartment = (choiceNumber: number) => {
    setShowDepartmentModal();
    switch (selectedChoice) {
      case 1:
        if (choice2 === choiceNumber) {
          setChoice2(0);
        } else if (choice3 === choiceNumber) {
          setChoice3(0);
        }
        setChoice1(choiceNumber);
        break;
      case 2:
        if (choice1 === choiceNumber) {
          setChoice1(0);
        } else if (choice3 === choiceNumber) {
          setChoice3(0);
        }
        setChoice2(choiceNumber);
        break;
      case 3:
        if (choice1 === choiceNumber) {
          setChoice1(0);
        } else if (choice2 === choiceNumber) {
          setChoice2(0);
        }
        setChoice3(choiceNumber);
        break;
    }
  };

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
          <S.SelectContent onClick={() => choiceDepartment(1)}>
            인공지능 개발과
          </S.SelectContent>
          <S.SelectContent onClick={() => choiceDepartment(2)}>
            소프트웨어 개발과
          </S.SelectContent>
          <S.SelectContent onClick={() => choiceDepartment(3)}>
            스마트 iot과
          </S.SelectContent>
        </S.SelectBox>
      </S.FAQModalBox>
    </S.DepartmentModal>
  );
};

export default DepartmentModal;
