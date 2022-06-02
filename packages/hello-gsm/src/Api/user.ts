import RequestApi from 'Utils/Libs/requestApi';
import { UserController } from 'Utils/Libs/requestUrls';

class User {
  status() {
    try {
      return RequestApi({
        method: 'GET',
        url: UserController.status(),
      });
    } catch (error) {
      return error;
    }
  }

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
