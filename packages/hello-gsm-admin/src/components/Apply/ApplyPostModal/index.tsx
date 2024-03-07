import { css, Global } from '@emotion/react';

import useApplyStore from 'Stores/ApplyStoreContainer';

import * as S from './style';

const ApplyPostModal = () => {
  const { showApplyPostModal } = useApplyStore();

  return (
    <S.ApplyPostModal>
      <Global
        styles={css`
          body {
            overflow: ${showApplyPostModal ? 'hidden' : 'visible'};
          }
        `}
      />
      <S.ContentWrap>
        <S.LoadingCircleBackGround>
          <S.LoadingCircle />
        </S.LoadingCircleBackGround>
        <S.LoadingText>원서를 저장 중 입니다..</S.LoadingText>
      </S.ContentWrap>
    </S.ApplyPostModal>
  );
};

export default ApplyPostModal;
