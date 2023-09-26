import { useState } from 'react';
import * as I from 'Assets/svg';
import * as S from './style';
import * as C from 'components';

import useStore from 'Stores/StoreContainer';
import { ApplicationListType } from 'Types/application';

const ModalSubmit = ({
  data,
  isButtonClicked,
  handleModalButtonClick,
}: {
  data: ApplicationListType;
  isButtonClicked: boolean;
  handleModalButtonClick: (id: number, confirm: '다음' | '확인') => void;
}) => {
  const [selectedButtonId, setSelectedButtonId] = useState<number>(
    data.isPrintsArrived ? 1 : 2,
  );
  const { setSelectedOption } = useStore();

  const handleButtonClick = (id: number) => {
    setSelectedButtonId(id);
    setSelectedOption(id);
  };

  return (
    <S.ContentBox>
      <S.TitleBox style={{ width: '26rem' }}>
        <S.Title>수험번호 {data.applicationId}</S.Title>
        <S.Desc>{data.applicantName}님의 서류 제출 여부를 선택해주세요</S.Desc>
      </S.TitleBox>
      <S.ModalSubmit>
        <S.ModalOption onClick={() => handleButtonClick(1)}>
          <I.Submit isActive={selectedButtonId !== 1} />
        </S.ModalOption>
        <S.ModalOption onClick={() => handleButtonClick(2)}>
          <I.NotSubmit isActive={selectedButtonId !== 2} />
        </S.ModalOption>
      </S.ModalSubmit>
      <C.ModalButton
        buttonTitle="확인"
        isConfirm={!isButtonClicked}
        onClick={() => handleModalButtonClick(selectedButtonId, '확인')}
      />
    </S.ContentBox>
  );
};

export default ModalSubmit;
