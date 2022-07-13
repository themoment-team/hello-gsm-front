interface StatusDataType {
  name: string;
  userImg: string;
  application: null | {
    firstResultScreening: boolean;
    finalResultScreening: boolean;
    isFinalSubmission: boolean;
    isDocumentReception: boolean;
    registrationNumber: null | number;
  };
}

export interface StatusType {
  data: StatusDataType;
}

export interface MainDescStatusType {
  selectedIndex: number;
  data: StatusDataType;
}
