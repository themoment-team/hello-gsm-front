import { CommonApplicationResponseType } from './application';
import { IdentityType } from './identity';

export interface ApplicationIdentityType {
  applicationData: CommonApplicationResponseType | undefined;
  identityData: IdentityType | undefined;
}
