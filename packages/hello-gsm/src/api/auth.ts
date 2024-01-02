import BASE_URL from 'shared/baseURL';
import { AuthController } from 'utils//Libs/requestUrls';

class Auth {
  /**
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
   * @returns 로그아웃을 위한 api
   */
  logout() {
    return BASE_URL + AuthController.logout();
  }
}

export default new Auth();
