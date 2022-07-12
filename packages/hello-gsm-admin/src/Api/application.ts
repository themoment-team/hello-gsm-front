import { DocumentType, ScoreType } from 'Types/application';
import RequestApi from 'Utils/Libs/requestApi';
import { ApplicationController } from 'Utils/Libs/requestUrls';

class Application {
  getList(page: number, name: string) {
    try {
      return RequestApi({
        method: 'GET',
        url: ApplicationController.getList(page, name),
      });
    } catch (error) {
      return error;
    }
  }

  document(data: DocumentType) {
    try {
      return RequestApi({
        method: 'PATCH',
        url: ApplicationController.document(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }

  score(data: ScoreType) {
    try {
      return RequestApi({
        method: 'PATCH',
        url: ApplicationController.score(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }

  ticket() {
    try {
      return RequestApi({
        method: 'GET',
        url: ApplicationController.ticket(),
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Application();
