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
}
