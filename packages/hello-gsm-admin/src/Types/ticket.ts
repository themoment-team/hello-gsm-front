import { ScreeningType } from 'Types/application';

export interface TicketDataType {
  data: {
    applicantName: string;
    applicantBirth: string;
    applicantImageUri: string;
    schoolName: string;
    screening: ScreeningType;
    registrationNumber: number;
  }[];
}
