import RequestApi from 'utils//Libs/requestApi';
import { UserController } from 'utils//Libs/requestUrls';

class User {
  /**
   * @returns 현재 사용자 정보를 반환합니다.
   */
  getMyInfo() {
    try {
      return RequestApi({
        method: 'GET',
        url: UserController.myInfo(),
      });
    } catch (error: any) {
      return error;
    }
  }
}

export default new User();
