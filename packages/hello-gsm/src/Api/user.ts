import RequestApi from 'Utils/Libs/requestApi';
import { UserController } from 'Utils/Libs/requestUrls';

class User {
  /**
   * @returns 유저의 상태를 반환한다
   */
  userStatus(accessToken: string, userId: string) {
    try {
      return RequestApi(
        {
          method: 'GET',
          url: UserController.info.user(userId),
        },
        accessToken,
      );
    } catch (error: any) {
      return error;
    }
  }

  myStatus(accessToken: string) {
    try {
      return RequestApi(
        {
          method: 'GET',
          url: UserController.info.my(),
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
}

export default new User();
