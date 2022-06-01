import RequestApi from 'Utils/Libs/requestApi';
import { AuthController } from 'Utils/Libs/requestUrls';

class Auth {
  signin() {
    try {
      return RequestApi({
        method: "get",
        url: AuthController.signin(),
      });
    }
  }
}