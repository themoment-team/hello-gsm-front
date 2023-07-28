import Image from 'next/image';
import * as S from './style';

interface GoogleLoginButtonProps {
  children: React.ReactNode;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ children }) => (
  <S.GoogleLoginButton>
    <S.ImgWrap>
      <Image src="/googleIcon.png" alt="google아이콘" width={30} height={30} />
    </S.ImgWrap>
    {children}
  </S.GoogleLoginButton>
);

export default GoogleLoginButton;
