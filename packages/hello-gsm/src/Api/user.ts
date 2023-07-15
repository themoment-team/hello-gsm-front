import RequestApi from 'Utils/Libs/requestApi';
import { UserController } from 'Utils/Libs/requestUrls';

class User {
  /**
   * @returns 특정 사용자 정보를 반환한다
   */
  userInfo(accessToken: string, userId: string) {
    try {
      return RequestApi(
        {
          method: 'GET',
          url: UserController.userInfo(userId),
        },
        accessToken,
      );
    } catch (error: any) {
      return error;
    }
  }

  /**
   * @returns 현재 사용자 정보를 반환한다.
   */
  myInfo(accessToken: string) {
    try {
      return RequestApi(
        {
          method: 'GET',
          url: UserController.myInfo(),
        },
        accessToken,
      );
    } catch (error: any) {
      return error;
    }
  }
}

export default new User();
