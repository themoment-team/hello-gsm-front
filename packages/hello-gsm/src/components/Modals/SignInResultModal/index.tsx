import * as S from './style';
import SigninFace from '@/public/SigninFace.png';
import Image from 'next/image';
const SignInResultModal: React.FC = () => {
  return (
    <S.Background>
      <Image src={SigninFace} alt="" layout="fixed" />
      <S.SucessComment>가입에 성공했습니다.</S.SucessComment>
    </S.Background>
  );
};

export default SignInResultModal;
