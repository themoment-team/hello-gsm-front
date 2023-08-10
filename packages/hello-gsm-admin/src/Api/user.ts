import RequestApi from 'Utils/Libs/requestApi';
import { UserController } from 'Utils/Libs/requestUrls';

class User {
  /**
   * @param accessToken
   * @param userId - user의 Id
   * @returns 특정 사용자 정보를 반환합니다.
   */
  getUserInfo(userId: string, accessToken?: string) {
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
}

export default new User();
