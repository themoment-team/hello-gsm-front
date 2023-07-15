import RequestApi from 'Utils/Libs/requestApi';
import { UserController } from 'Utils/Libs/requestUrls';

class User {
  /**
   * @param accessToken
   * @returns 현재 사용자 정보를 반환합니다.
   */
  myInfo(accessToken?: string) {
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
