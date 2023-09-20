import RequestApi from 'Utils/Libs/requestApi';
import { StatusController } from 'Utils/Libs/requestUrls';

class Status {
  /**
   * @param accessToken
   * @param userID
   * @returns 특정 사용자의 본인인증 정보를 가져옵니다.
   */
  putStatus(userID: number, accessToken?: string) {
    try {
      return RequestApi(
        {
          method: 'PUT',
          url: StatusController.putStatus(userID),
        },
        accessToken,
      );
    } catch (error: any) {
      return error;
    }
  }
}

export default new Status();
