import { GenderType } from './application';

export interface SignUpType {
  name: string;
  phoneNumber: string;
  gender: GenderType;
  birth: string;
}
