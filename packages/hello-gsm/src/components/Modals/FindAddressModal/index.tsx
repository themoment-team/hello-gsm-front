import DaumPostcode from 'react-daum-postcode';

import { css, Global } from '@emotion/react';

import useStore from 'stores/StoreContainer';

import * as S from './style';

const FindAddressModal = () => {
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
