import React from 'react';
import * as S from './style';

interface IndexType {
  index: number;
}

const InformationDescription: React.FC<IndexType> = ({ index }) => {
  switch (index) {
    case 0:
      return <S.Description>{index}</S.Description>;
    case 1:
      return <S.Description>{index}</S.Description>;
    case 2:
      return <S.Description>{index}</S.Description>;
    case 3:
      return <S.Description>{index}</S.Description>;
    case 4:
      return <S.Description>{index}</S.Description>;
    case 5:
      return <S.Description>{index}</S.Description>;
    default:
      return <></>;
  }
};

export default InformationDescription;
