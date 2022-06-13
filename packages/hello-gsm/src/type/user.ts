interface StatusDataType {
  name: string;
  userImg: string;
  application: null | {
    firstResultScreening: boolean;
    finalResultScreening: boolean;
    isFinalSubmission: boolean;
    isDocumentReception: boolean;
  };
}

export interface StatusType {
  data: StatusDataType;
}

export interface MainDescStatusType {
  selectedIndex: number;
  data: StatusDataType;
}
