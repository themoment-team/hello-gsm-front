import * as S from './style';

import { PrintIcon, ExcelIcon } from 'Assets/svg';
import { ButtonHTMLAttributes } from 'react';

interface PrintButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  printType: 'excel' | 'ticket';
}

const PrintType = {
  excel: {
    icon: <ExcelIcon />,
    text: 'Excel',
  },
  ticket: {
    icon: <PrintIcon />,
    text: '수험표',
  },
};

const PrintButton: React.FC<PrintButtonProps> = ({
  printType,
  ...attributes
}) => (
  <S.PrintButton {...attributes}>
    {PrintType[printType].icon}
    <S.PrintText>{PrintType[printType].text} 출력</S.PrintText>
  </S.PrintButton>
);

export default PrintButton;
