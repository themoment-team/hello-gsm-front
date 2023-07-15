import BASE_URL from 'shared/baseURL';
import RequestApi from 'Utils/Libs/requestApi';
import { AuthController } from 'Utils/Libs/requestUrls';

class Auth {
  /**
   *
   * @returns 각 oauth 로그인 URL을 반환합니다.
   */
  kakaoSignin() {
    return BASE_URL + AuthController.signin.kakao();
  }

  googleSignin() {
    return BASE_URL + AuthController.signin.google();
  }

  guthubSignin() {
    return BASE_URL + AuthController.signin.github();
  }

  /**
   *
   * @returns 로그아웃을 위한 api
   */
  logout() {
    return BASE_URL + AuthController.logout();
  }

  ///////////////////////////////////////////////////////////////////

  /**
   * 토큰 재발급을 위한 api
   */
  refresh(refreshToken?: string) {
    try {
      return RequestApi(
        {
          method: 'POST',
          url: AuthController.refresh(),
        },
        refreshToken,
      );
    } catch (error: any) {
      return error;
    }
  }

  /**
   *
   * @param accessToken - api 요청을 하기 위한 토큰
   * @returns - 로그인 여부 확인
   */
  check(accessToken?: string) {
    try {
      return RequestApi(
        {
          method: 'GET',
          url: AuthController.check(),
        },
        accessToken,
      );
    } catch (error: any) {
      return error;
    }
  }
}

export default new Auth();
