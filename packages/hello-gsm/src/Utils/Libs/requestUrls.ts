// 회원
export const AuthController = {
  signin: {
    kakao: () => {
      return `/auth/v1/oauth2/authorization/kakao`;
    },
    google: () => {
      return `/auth/v1/oauth2/authorization/google`;
    },
    github: () => {
      return `/auth/v1/oauth2/authorization/github`;
    },
  },
  logout: () => {
    return `/auth/v1/logout`;
  },
  refresh: () => {
    return `/auth/refresh`;
  },
  check: () => {
    return `/auth/check`;
  },
};

// 유저 상태
export const UserController = {
  userInfo: (userId: string) => {
    return `/user/v1/user/${userId}`;
  },
  myInfo: () => {
    return `/user/v1/user/me`;
  },
};

export const IdentityController = {
  sendCode: {
    sendCode: () => {
      return `identity/v1/identity/me/send-code`;
    },
    test: () => {
      return `identity/v1/identity/me/send-code-test`;
    },
  },
  authCode: () => {
    return `identity/v1/identity/me/auth-code`;
  },
  myIdentity: () => {
    return `identity/v1/identity/me`;
  },
  getUserIdentity: (userID: string) => {
    return `identity/v1/identity/${userID}`;
  },
  updateMyIdentity: () => {
    return `identity/v1/identity/me`;
  },
};

// 원서
export const ApplicationController = {
  // get 서류정보 가져오기, delete 원서 삭제
  information: () => {
    return `/application`;
  },
  // post 1차 서류 제출, patch 1차 서류 제출 수정
  firstSubmission: () => {
    return `/application/firstSubmission`;
  },
  // post 2차 서류 제출, patch 2차 서류 제출 수정
  secondSubmission: () => {
    return `/application/secondSubmission`;
  },
  // post 졸업자 2차 서류 제출, patch 졸업자 2차 서류 수정
  graduationSubmission: () => {
    return `/application/graduationSubmission`;
  },
  // post 검정고시 2차 서류 제출, patch 검정고시 2차 서류 수정
  gedSubmission: () => {
    return `/application/gedSubmission`;
  },
  finalSubmission: () => {
    return `/application/finalSubmission`;
  },
  // post 증명사진 저장 및 수정
  image: () => {
    return `/application/image`;
  },
};
