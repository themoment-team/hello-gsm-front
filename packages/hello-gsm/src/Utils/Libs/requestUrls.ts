// 회원
export const AuthController = {
  // 각 oauth 로그인 URL 반환
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
  // logout URL 반환
  logout: () => {
    return `/auth/v1/logout`;
  },
};

// 유저 상태
export const UserController = {
  // get 현재 사용자 정보 조회하기
  myInfo: () => {
    return `/user/v1/user/me`;
  },
};

// 유저 인증
export const IdentityController = {
  // post 사용자에게 본인인증 코드 발송시키기
  sendCode: () => {
    return `/identity/v1/identity/me/send-code`;
  },
  // post 본인인증 코드 발신, 가져오기
  sendCodeTest: () => {
    return `/identity/v1/identity/me/send-code-test`;
  },
  // post 코드 인증하기
  authCode: () => {
    return `/identity/v1/identity/me/auth-code`;
  },
  // get 현재 사용자의 본인인증 정보 조회, post identity 생성하기, put identity 수정하기
  myIdentity: () => {
    return `/identity/v1/identity/me`;
  },
  // get 특정 사용자의 본인인증 정보 조회하기
  getUserIdentity: (userID: string) => {
    return `/identity/v1/identity/${userID}`;
  },
};

// 원서
export const ApplicationController = {
  // get 원서정보 가져오기, post 원서 생성하기, put 원서 수정하기 ,delete 원서 삭제하기
  myInformation: () => {
    return `/application/v1/application/me`;
  },
  // get 특정 사용자의 원서 정보 조회하기
  userInformation: (userId: string) => {
    return `/application/v1/application/${userId}`;
  },
  // get 모든 사용자의 원서 정보 조회하기
  allApplication: (page: number, size: number) => {
    return `/application/v1/application/all?page=${page}&size=${size}`;
  },
  // put 특정 사용자의 원서 정보 수정하기
  userApplication: (userId: string) => {
    return `/application/v1/status/${userId}`;
  },
  // put 원서 최종 제출하기
  finalSubmission: () => {
    return `/application/v1/final-submit`;
  },
  // get 모든 사용자의 수험표 정보 조회하기
  allTickets: (page: number, size: number) => {
    return `/application/v1/tickets?page=${page}&size=${size}`;
  },
  // post 증명사진 저장 및 수정
  image: () => {
    return `/application/v1/image`;
  },
};
