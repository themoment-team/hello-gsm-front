import Image from 'next/image';
import * as S from './style';
import auth from 'Api/auth';

interface GoogleLoginButtonProps {
  children: React.ReactNode;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ children }) => (
  <S.GoogleLoginButton href={auth.googleSignin()}>
    <S.ImgWrap>
      <Image src="/googleIcon.png" alt="google아이콘" width={30} height={30} />
    </S.ImgWrap>
    {children}
  </S.GoogleLoginButton>
);

export default GoogleLoginButton;
