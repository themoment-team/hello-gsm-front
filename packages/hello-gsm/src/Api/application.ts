import axios from 'axios';
import { ApplyFormType } from 'type/application';
import RequestApi from 'Utils/Libs/requestApi';
import { ApplicationController } from 'Utils/Libs/requestUrls';

class Application {
  /**
   * @returns 원서에 저장된 정보를 반환한다
   */
  getMyInformation(accessToken?: string) {
    try {
      return RequestApi(
        {
          method: 'GET',
          url: ApplicationController.myApplication(),
        },
        accessToken,
      );
    } catch (error: any) {
      return error;
    }
  }

  getUserInformation(userId: string, accessToken?: string) {
    try {
      return RequestApi(
        {
          method: 'GET',
          url: ApplicationController.userInformation(userId),
        },
        accessToken,
      );
    } catch (error: any) {
      return error;
    }
  }

  createApplication(data: ApplyFormType) {
    try {
      return RequestApi({
        method: 'POST',
        url: ApplicationController.myApplication(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }

  updateApplication(data: ApplyFormType) {
    try {
      return RequestApi({
        method: 'PUT',
        url: ApplicationController.myApplication(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }

  deleteApplication() {
    try {
      return RequestApi({
        method: 'DELETE',
        url: ApplicationController.myApplication(),
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * 원서 삭제를 위한 api
   */
  deleteInformation() {
    try {
      return RequestApi({
        method: 'DELETE',
        url: ApplicationController.myApplication(),
      });
    } catch (error) {
      return error;
    }
  }

  getAllApplication(page: number, size: number) {
    try {
      return RequestApi({
        method: 'GET',
        url: ApplicationController.allApplication(page, size),
      });
    } catch (error) {
      return error;
    }
  }

  updateUserApplication(userName: string) {
    try {
      return RequestApi({
        method: 'PUT',
        url: ApplicationController.userApplication(userName),
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * 최종 제출을 위한 api
   */
  finalSubmission() {
    try {
      return RequestApi({
        method: 'PUT',
        url: ApplicationController.finalSubmission(),
      });
    } catch (error) {
      return error;
    }
  }

  getAllTickets(page: number, size: number) {
    try {
      return RequestApi({
        method: 'GET',
        url: ApplicationController.allTickets(page, size),
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * 증명사진 저장 및 수정을 위한 api
   */
  postImage(data: FormData) {
    try {
      return axios({
        method: 'POST',
        url: ApplicationController.image(),
        data,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Application();
