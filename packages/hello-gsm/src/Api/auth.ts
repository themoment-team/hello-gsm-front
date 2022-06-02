import { BASE_URL } from 'shared/config';
import RequestApi from 'Utils/Libs/requestApi';
import { AuthController } from 'Utils/Libs/requestUrls';

class Auth {
  signin() {
    return BASE_URL + AuthController.signin();
  }

  signup(name: string, cellphoneNumber: string, birth: Date, gender: string) {
    try {
      const data = {
        name,
        cellphoneNumber,
        birth,
        gender,
      };
      return RequestApi({
        method: 'POST',
        url: AuthController.signup(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }

  logout() {
    try {
      return RequestApi({
        method: 'post',
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
}

export default new Auth();
