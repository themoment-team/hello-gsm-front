import * as S from './style';
import * as I from 'assets/svg';
import React, { useEffect } from 'react';

const SuccessModal: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }, []);

  return (
    <S.SuccessModal>
      <S.Content>
        <I.MypageSuccess />
        <S.DescriptionWrap>
          <S.Description>원서 제출에 성공했습니다.</S.Description>
          <S.PostScript>
            ( 원서와 수기로 작성해야되는 파일들을 출력해서 저희 학교 행정실에
            제출해야됩니다. )
          </S.PostScript>
        </S.DescriptionWrap>
      </S.Content>
    </S.SuccessModal>
  );
};

export default SuccessModal;
