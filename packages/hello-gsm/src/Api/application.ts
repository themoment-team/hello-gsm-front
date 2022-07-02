import axios from 'axios';
import { BASE_URL } from 'shared/config';
import { ApplicationType, ScoreType } from 'type/application';
import RequestApi from 'Utils/Libs/requestApi';
import { ApplicationController } from 'Utils/Libs/requestUrls';

class Application {
  /**
   * @returns 원서에 저장된 정보를 반환한다
   */
  getInformation(accessToken?: string) {
    try {
      return RequestApi(
        {
          method: 'GET',
          url: ApplicationController.information(),
        },
        accessToken,
      );
    } catch (error: any) {
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
        url: ApplicationController.information(),
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * @param data - 1차 제출(인적 사항) 파라미터
   */
  postFirstSubmission(data: ApplicationType) {
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

  /**
   * @param data - 2차 제출(성적) 파라미터
   */
  postSecondSubmisson(data: ScoreType) {
    try {
      return RequestApi({
        method: 'POST',
        url: ApplicationController.secondsSubmission(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * @param data - 1차 수정(인적 사항) 파라미터
   */
  patchFirstSubmission(data: ApplicationType) {
    try {
      return RequestApi({
        method: 'PATCH',
        url: ApplicationController.firstSubmission(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * @param data - 2차 수정(성적) 파라미터
   */
  patchSecondSubmisson(data: ScoreType) {
    try {
      return RequestApi({
        method: 'PATCH',
        url: ApplicationController.secondSubmission(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * 최종 제출을 위한 api
   */
  patchFinalSubmission() {
    try {
      return RequestApi({
        method: 'PATCH',
        url: ApplicationController.finalSubmission(),
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
        baseURL: BASE_URL,
        url: ApplicationController.image(),
        data: data,
        withCredentials: true,
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
