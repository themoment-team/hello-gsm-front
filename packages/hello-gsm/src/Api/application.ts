import axios from 'axios';
import { ApplyFormType } from 'type/application';
import RequestApi from 'Utils/Libs/requestApi';
import { ApplicationController } from 'Utils/Libs/requestUrls';

class Application {
  /**
   *
   * @param accessToken
   * @returns 현재 사용자의 원서 정보를 반환합니다.
   */
  getMyApplication(accessToken?: string) {
    try {
      return RequestApi(
        {
          method: 'GET',
          url: ApplicationController.myInformation(),
        },
        accessToken,
      );
    } catch (error: any) {
      return error;
    }
  }

  /**
   *
   * @param data - 원서 정보
   * @returns 생성 결과를 반환합니다.
   */
  createApplication(data: ApplyFormType) {
    try {
      return RequestApi({
        method: 'POST',
        url: ApplicationController.myInformation(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }

  /**
   *
   * @param data - 원서 정보
   * @returns 수정 결과를 반환합니다.
   */
  updateApplication(data: ApplyFormType) {
    try {
      return RequestApi({
        method: 'PUT',
        url: ApplicationController.myInformation(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * 원서 삭제를 위한 api
   * @returns 삭제 결과를 반환합니다.
   */
  deleteApplication() {
    try {
      return RequestApi({
        method: 'DELETE',
        url: ApplicationController.myInformation(),
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

  /**
   *
   * @param data - 증명사진
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
