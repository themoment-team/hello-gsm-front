import React from 'react';

import formatMajor from 'utils/Format/formatMajor';
import formatScreening from 'utils/Format/formatScreening';

import { AdmissionInfoType } from 'types/application';

import * as S from './style';

const MypageInformation: React.FC<AdmissionInfoType> = ({ admissionInfo }) => {
  return (
    <S.Information>
      <S.InformationHeader>
        <S.InformationHeaderitem>지원전형</S.InformationHeaderitem>
        <S.InformationHeaderitem>1지망</S.InformationHeaderitem>
        <S.InformationHeaderitem>2지망</S.InformationHeaderitem>
        <S.InformationHeaderitem>3지망</S.InformationHeaderitem>
      </S.InformationHeader>
      <S.InformationBody>
        <S.InformationBodyitem>
          {formatScreening(admissionInfo?.screening ?? '')}
        </S.InformationBodyitem>
        <S.InformationBodyitem>
          {formatMajor(admissionInfo?.desiredMajor.firstDesiredMajor ?? '')}
        </S.InformationBodyitem>
        <S.InformationBodyitem>
          {formatMajor(admissionInfo?.desiredMajor.secondDesiredMajor ?? '')}
        </S.InformationBodyitem>
        <S.InformationBodyitem>
          {formatMajor(admissionInfo?.desiredMajor.thirdDesiredMajor ?? '')}
        </S.InformationBodyitem>
      </S.InformationBody>
    </S.Information>
  );
};

export default MypageInformation;
