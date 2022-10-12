interface StatusDataType extends StatusApplication {
  name: string;
  userImg: string;
}

export interface StatusApplication {
  application: null | {
    screening: '일반전형' | '사회통합전형' | '특별전형';
    firstResultScreening: '일반전형' | '사회통합전형' | '특별전형';
    finalResultScreening: '일반전형' | '사회통합전형' | '특별전형';
    isFinalSubmission: boolean;
    isDocumentReception: boolean;
    registrationNumber: null | number;
    application_score?: {
      scoreTotal: number;
    };
    application_details: {
      firstWantedMajor: '인공지능과' | '스마트IoT과' | '소프트웨어개발과';
      secondWantedMajor: '인공지능과' | '스마트IoT과' | '소프트웨어개발과';
      thirdWantedMajor: '인공지능과' | '스마트IoT과' | '소프트웨어개발과';
      educationStatus: '졸업예정' | '졸업' | '검정고시';
    };
  };
}

export interface StatusType {
  data: StatusDataType;
}

export interface MainDescStatusType {
  selectedIndex: number;
  data?: StatusDataType;
}

export interface InfoType {
  data: {
    user_idx: number;
    birth: Date;
    cellphoneNumber: string;
    gender: string;
    name: string;
  };
}
