import * as S from './style';
import * as I from 'Assets/svg';

const SignUpResultModal: React.FC = () => {
  return (
    <S.Background>
      <I.SignUpSuccess />
      <S.SucessComment>가입에 성공했습니다.</S.SucessComment>
      <S.Desc>다시 로그인해주세요.</S.Desc>
    </S.Background>
  );
};

export default SignUpResultModal;
