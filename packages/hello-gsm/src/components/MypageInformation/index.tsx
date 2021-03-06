import React from 'react';
import { StatusApplication } from 'type/user';
import * as S from './style';

const MypageInformation: React.FC<StatusApplication> = ({ application }) => {
  return (
    <S.Information>
      <S.InformationHeader>
        <S.InformationHeaderitem>지원전형</S.InformationHeaderitem>
        <S.InformationHeaderitem>1지망</S.InformationHeaderitem>
        <S.InformationHeaderitem>2지망</S.InformationHeaderitem>
        <S.InformationHeaderitem>3지망</S.InformationHeaderitem>
      </S.InformationHeader>
      <S.InformationBody>
        <S.InformationBodyitem>{application?.screening}</S.InformationBodyitem>
        <S.InformationBodyitem>
          {application?.application_details.firstWantedMajor}
        </S.InformationBodyitem>
        <S.InformationBodyitem>
          {application?.application_details.secondWantedMajor}
        </S.InformationBodyitem>
        <S.InformationBodyitem>
          {application?.application_details.thirdWantedMajor}
        </S.InformationBodyitem>
      </S.InformationBody>
    </S.Information>
  );
};

export default MypageInformation;
