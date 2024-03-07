import { css, Global } from '@emotion/react';

import useApplyStore from 'Stores/ApplyStoreContainer';

import * as S from './style';

const DepartmentModal = () => {
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
  } = useApplyStore();

  const choiceDepartment = (choice: 'SW' | 'IOT' | 'AI' | '') => {
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
          <S.SelectContent onClick={() => choiceDepartment('AI')}>
            인공지능과
          </S.SelectContent>
          <S.SelectContent onClick={() => choiceDepartment('SW')}>
            소프트웨어개발과
          </S.SelectContent>
          <S.SelectContent onClick={() => choiceDepartment('IOT')}>
            스마트IoT과
          </S.SelectContent>
        </S.SelectBox>
      </S.FAQModalBox>
    </S.DepartmentModal>
  );
};

export default DepartmentModal;
