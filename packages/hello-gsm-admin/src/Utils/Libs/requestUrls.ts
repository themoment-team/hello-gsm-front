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
  // get 특정 사용자 정보 조회하기
  userInfo: (userId: string) => {
    return `/user/v1/user/${userId}`;
  },
};

// 지원자 관리
export const ApplicationController = {
  getList: (page: number, name?: string) => {
    return `/application?page=${page}&name=${name || ''}`;
  },
  getCount: () => {
    return `/application/count`;
  },
  document: () => {
    return `/application/document`;
  },
  score: () => {
    return `/application/score`;
  },
  ticket: () => {
    return `/application/ticket`;
  },
};
