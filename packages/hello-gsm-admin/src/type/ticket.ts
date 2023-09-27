import { ScreeningType } from 'type/application';

export interface TicketDataType {
  data: TicketType[];
}

export interface TicketType {
  applicantName: string;
  applicantBirth: string;
  applicantImageUri: string;
  schoolName: string;
  screening: ScreeningType;
  registrationNumber: number;
}
