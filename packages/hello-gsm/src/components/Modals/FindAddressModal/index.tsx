import React from 'react';
import * as S from './style';
import DaumPostcode from 'react-daum-postcode';
import { css, Global } from '@emotion/react';
import useStore from 'Stores/StoreContainer';

const FindAddressModal: React.FC = () => {
  const { showFindAddressModal, setShowFindAddressModal, setApplicantAddress } =
    useStore();

  const modalStyle = {
    width: '500px',
    height: '500px',
  };

  const onComplete = ({ address }: { address: string }) => {
    setApplicantAddress(address);
    setShowFindAddressModal();
  };

  return (
    <S.FindAddressModal onClick={setShowFindAddressModal}>
      <Global
        styles={css`
          body {
            overflow: ${showFindAddressModal ? 'hidden' : 'visible'};
          }
        `}
      />
      <DaumPostcode style={modalStyle} onComplete={onComplete} />
    </S.FindAddressModal>
  );
};

export default FindAddressModal;
