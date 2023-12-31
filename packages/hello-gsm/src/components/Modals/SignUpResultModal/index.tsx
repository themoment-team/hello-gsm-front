import * as S from './style';
import * as I from 'assets/svg';

const SignUpResultModal: React.FC = () => {
  return (
    <S.Background>
      <I.SignUpSuccess />
      <S.SucessComment>가입에 성공했습니다.</S.SucessComment>
    </S.Background>
  );
};

export default SignUpResultModal;
