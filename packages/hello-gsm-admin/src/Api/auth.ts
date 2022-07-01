import { LoginType } from 'Types/user';
import RequestApi from 'Utils/Libs/requestApi';
import { AuthController } from 'Utils/Libs/requestUrls';

class Auth {
  signin(data: LoginType) {
    try {
      return RequestApi({
        method: 'POST',
        url: AuthController.signin(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }

  logout() {
    try {
      return RequestApi({
        method: 'POST',
        url: AuthController.logout(),
      });
    } catch (error) {
      return error;
    }
  }

  refresh() {
    try {
      return RequestApi({
        method: 'POST',
        url: AuthController.refresh(),
      });
    } catch (error) {
      return error;
    }
  }

  check() {
    try {
      return RequestApi({
        method: 'GET',
        url: AuthController.check(),
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();
