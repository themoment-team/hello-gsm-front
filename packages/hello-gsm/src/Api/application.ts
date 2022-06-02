import { applicationType } from 'type/application';
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

  deleteInformation(data: applicationType) {
    try {
      return RequestApi({
        method: 'DELETE',
        url: ApplicationController.information(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }
}
