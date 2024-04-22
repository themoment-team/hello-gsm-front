import { ButtonHTMLAttributes } from 'react';

import { ExcelIcon, PrintIcon } from 'Assets/svg';

import * as S from './style';

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
