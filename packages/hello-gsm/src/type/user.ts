export interface StatusType {
  name: string;
  userImg: string;
  application: null | {
    firstResultScreening: boolean;
    finalResultScreening: boolean;
    isFinalSubmission: boolean;
    isDocumentReception: boolean;
  };
}
