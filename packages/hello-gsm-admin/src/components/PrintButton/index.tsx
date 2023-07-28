import * as S from './style';

import { NewPrintIcon, ExcelIcon } from 'assets/svg';

interface PrintButtonProps {
  printType: 'excel' | 'ticket';
}

const PrintType = {
  excel: {
    icon: <ExcelIcon />,
    text: 'Excel',
  },
  ticket: {
    icon: <NewPrintIcon />,
    text: '수험표',
  },
};

const PrintButton: React.FC<PrintButtonProps> = ({ printType }) => (
  <S.PrintButtonWrapper>
    {PrintType[printType].icon}
    <S.PrintText>{PrintType[printType].text} 출력</S.PrintText>
  </S.PrintButtonWrapper>
);

export default PrintButton;
