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
      console.log(error);
    }
  }
}

export default new Auth();
