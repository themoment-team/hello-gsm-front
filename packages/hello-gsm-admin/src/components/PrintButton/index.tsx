import * as S from './style';

import { PrintIcon, ExcelIcon } from 'assets/svg';

interface PrintButtonProps {
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

const PrintButton: React.FC<PrintButtonProps> = ({ printType }) => (
  <S.PrintButton>
    {PrintType[printType].icon}
    <S.PrintText>{PrintType[printType].text} 출력</S.PrintText>
  </S.PrintButton>
);

export default PrintButton;
