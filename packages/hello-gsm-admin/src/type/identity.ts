import { GenderType } from './application';

export interface IdentityType {
  id: number;
  name: string;
  phoneNumber: string;
  birth: Date;
  gender: GenderType;
  userId: number;
}
