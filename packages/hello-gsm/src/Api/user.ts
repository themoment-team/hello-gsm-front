import RequestApi from 'Utils/Libs/requestApi';
import { UserController } from 'Utils/Libs/requestUrls';

class User {
  /**
   * @returns 유저의 상태를 반환한다
   */
  status(accessToken: string) {
    try {
      return RequestApi(
        {
          method: 'GET',
          url: UserController.status(),
        },
        accessToken,
      );
    } catch (error: any) {
      return error;
    }
  }

  /**
   * @returns 회원가입 시에 기입한 유저의 정보를 반환한다
   */
  info() {
    try {
      return RequestApi({
        method: 'GET',
        url: UserController.info(),
      });
    } catch (error) {
      return error;
    }
  }
}

export default new User();
