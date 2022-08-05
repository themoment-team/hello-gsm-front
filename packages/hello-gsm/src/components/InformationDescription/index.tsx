import React from 'react';
import * as S from './style';

interface IndexType {
  index: number;
}

const InformationDescription: React.FC<IndexType> = ({ index }) => {
  switch (index) {
    case 1:
      return <S.Description>{index}</S.Description>;
    default:
      return <></>;
  }
};

export default InformationDescription;
