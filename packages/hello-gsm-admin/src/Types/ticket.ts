export interface TicketDataType {
  data: {
    applicantName: string;
    applicantBirth: string;
    applicantImageUri: string;
    schoolName: string;
    screening: 'GENERAL' | 'SOCIAL' | 'SPECIAL_VETERANS' | 'SPECIAL_ADMISSION';
    registrationNumber: number;
  }[];
}
