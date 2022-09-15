export interface TicketDataType {
  data: {
    name: string;
    birth: Date;
    application: {
      schoolName?: string;
      screening: string;
      registrationNumber?: number;
    };
    application_image: {
      idPhotoUrl: string;
    };
  }[];
}
