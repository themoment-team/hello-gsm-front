import RequestApi from 'Utils/Libs/requestApi';
import { StatusController } from 'Utils/Libs/requestUrls';

class Status {
  /**
   * @param userID
   */
  putStatus(userID: number) {
    try {
      return RequestApi({
        method: 'PUT',
        url: StatusController.putStatus(userID),
      });
    } catch (error: any) {
      return error;
    }
  }
}

export default new Status();
