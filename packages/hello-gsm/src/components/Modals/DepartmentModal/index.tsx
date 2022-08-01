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

  const choiceDepartment = (
    choice: '소프트웨어개발과' | '스마트IoT과' | '인공지능과' | '',
  ) => {
    setShowDepartmentModal();
    switch (selectedChoice) {
      case 1:
        if (choice2 === choice) {
          setChoice2('');
        } else if (choice3 === choice) {
          setChoice3('');
        }
        setChoice1(choice);
        break;
      case 2:
        if (choice1 === choice) {
          setChoice1('');
        } else if (choice3 === choice) {
          setChoice3('');
        }
        setChoice2(choice);
        break;
      case 3:
        if (choice1 === choice) {
          setChoice1('');
        } else if (choice2 === choice) {
          setChoice2('');
        }
        setChoice3(choice);
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
          <S.SelectContent onClick={() => choiceDepartment('인공지능과')}>
            인공지능과
          </S.SelectContent>
          <S.SelectContent onClick={() => choiceDepartment('소프트웨어개발과')}>
            소프트웨어개발과
          </S.SelectContent>
          <S.SelectContent onClick={() => choiceDepartment('스마트IoT과')}>
            스마트IoT과
          </S.SelectContent>
        </S.SelectBox>
      </S.FAQModalBox>
    </S.DepartmentModal>
  );
};

export default DepartmentModal;
