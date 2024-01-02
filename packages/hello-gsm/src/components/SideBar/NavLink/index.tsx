import Link from 'next/link';
import { useRouter } from 'next/router';
import useStore from 'stores/StoreContainer';
import * as S from '../style';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

/**
 * @param children - 자식요소
 * @param href - 주소
 */

const NavLink: React.FC<NavLinkProps> = ({ children, href }) => {
  const { pathname } = useRouter();
  const { setShowSideBar } = useStore();
  const select = (navPath: string) =>
    navPath === pathname && { color: '#ffffff' };

  return (
    <Link href={href} passHref>
      <S.NavLink onClick={() => setShowSideBar(null)} css={select(href)}>
        {children}
      </S.NavLink>
    </Link>
  );
};

export default NavLink;
