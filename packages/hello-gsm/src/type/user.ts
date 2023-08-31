import { CommonApplicationResponseType } from './application';

export interface MainDescStatusType {
  selectedIndex: number;
  data?: CommonApplicationResponseType;
}

type ProviderType = 'google' | 'kakao';
type RoleType = 'ROLE_USER' | 'ROLE_UNAUTHENTICATED' | 'ROLE_ADMIN';

export interface UserInfoType {
  id: number;
  provider: ProviderType;
  providerId: string;
  role: RoleType;
}
