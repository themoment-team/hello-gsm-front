import { ReceptionType } from './../../Types/application';
import RequestApi from 'Utils/Libs/requestApi';
import { ApplicationController } from 'Utils/Libs/requestUrls';

class Application {
  reception(data: ReceptionType) {
    try {
      return RequestApi({
        method: 'POST',
        url: ApplicationController.reception(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Application();
