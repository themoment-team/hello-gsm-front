import { BASE_URL } from 'shared/config';
import { SignUpType } from 'type/signup';
import RequestApi from 'Utils/Libs/requestApi';
import { AuthController } from 'Utils/Libs/requestUrls';

class Auth {
  /**
   * @returns 카카오 로그인 URL을 반환한다
   */
  signin() {
    return BASE_URL + AuthController.signin();
  }

  /**
   * @param data - 회원가입에 필요한 파라미터
   */
  signup(data: SignUpType) {
    try {
      return RequestApi({
        method: 'POST',
        url: AuthController.signup(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * 로그아웃을 위한 api
   */
  logout() {
    try {
      return RequestApi({
        method: 'POST',
        url: AuthController.logout(),
      });
    } catch (error) {
      return error;
    }
  }

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
