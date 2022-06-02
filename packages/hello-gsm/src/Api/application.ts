import RequestApi from 'Utils/Libs/requestApi';
import { ApplicationController } from 'Utils/Libs/requestUrls';

class Application {
  getInformation() {
    try {
      return RequestApi({
        method: 'GET',
        url: ApplicationController.information(),
      });
    } catch (error) {
      return error;
    }
  }
}
