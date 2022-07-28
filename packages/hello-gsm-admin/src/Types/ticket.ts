export interface TicketDataType {
  data: {
    name: string;
    birth: string;
    application: {
      schoolName?: string;
      screening: string;
      registrationNumber: number;
    };
    application_image: {
      idPhotoUrl: string;
    };
  }[];
}
