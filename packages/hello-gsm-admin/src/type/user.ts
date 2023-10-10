type ProviderType = 'google' | 'kakao';
type RoleType =
  | 'ROLE_USER'
  | 'ROLE_UNAUTHENTICATED'
  | 'ROLE_ADMIN'
  | 'ROLE_TESTER';

export interface UserInfoType {
  id: number;
  provider: ProviderType;
  providerId: string;
  role: RoleType;
}
