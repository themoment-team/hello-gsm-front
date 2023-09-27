import { ApplicationResponseType } from './application';
import { IdentityType } from './identity';

export interface ApplicationIdentityType {
  applicationData: ApplicationResponseType | undefined;
  identityData: IdentityType | undefined;
}
