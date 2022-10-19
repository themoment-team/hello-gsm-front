// 회원
export const AuthController = {
  signin: () => {
    return `/auth/login`;
  },
  logout: () => {
    return `/auth/logout`;
  },
  refresh: () => {
    return `/auth/refresh`;
  },
  check: () => {
    return `/auth/check`;
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
