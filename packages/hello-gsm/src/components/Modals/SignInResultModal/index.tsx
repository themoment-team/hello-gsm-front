import * as S from './style';
import Image from 'next/image';

const SignInResultModal: React.FC = () => {
  return (
    <S.Background>
      <Image
        src="/SigninFace.png"
        alt=""
        width={152}
        height={165}
        layout="fixed"
        quality={100}
      />
      <S.SucessComment>가입에 성공했습니다.</S.SucessComment>
      <S.Desc>다시 로그인해주세요.</S.Desc>
    </S.Background>
  );
};

export default SignInResultModal;
