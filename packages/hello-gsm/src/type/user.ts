export interface StatusType {
  data: {
    name: string;
    userImg: string;
    application: null | {
      firstResultScreening: boolean;
      finalResultScreening: boolean;
      isFinalSubmission: boolean;
      isDocumentReception: boolean;
    };
  };
}
