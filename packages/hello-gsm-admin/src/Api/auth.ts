import { LoginType } from 'Types/user';
import RequestApi from 'Utils/Libs/requestApi';
import { AuthController } from 'Utils/Libs/requestUrls';

class Auth {
  /**
   * 로그인을 위한 api
   * @param data 아이디, 비밀번호
   */
  signin(data: LoginType) {
    try {
      return RequestApi({
        method: 'POST',
        url: AuthController.signin(),
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
   * 엑세스 토큰 재발급을 위한 api
   * @returns 엑세스 토큰이 재발급된다.
   */
  refresh() {
    try {
      return RequestApi({
        method: 'POST',
        url: AuthController.refresh(),
      });
    } catch (error) {
      return error;
    }
  }
  /**
   * 로그인 상태를 체크한다
   * @returns 로그인 상태
   */
  check() {
    try {
      return RequestApi({
        method: 'GET',
        url: AuthController.check(),
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();
