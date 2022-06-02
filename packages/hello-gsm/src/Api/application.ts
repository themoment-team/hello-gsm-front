import { applicationType, scoreType } from 'type/application';
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

  deleteInformation() {
    try {
      return RequestApi({
        method: 'DELETE',
        url: ApplicationController.information(),
      });
    } catch (error) {
      return error;
    }
  }

  postFirstSubmission(data: applicationType) {
    try {
      return RequestApi({
        method: 'POST',
        url: ApplicationController.firstSubmission(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }
}
