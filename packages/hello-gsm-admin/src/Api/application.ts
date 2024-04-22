import RequestApi from 'Utils/Libs/requestApi';
import { ApplicationController } from 'Utils/Libs/requestUrls';
import { ApplicationFormType } from 'type/application';

import BASE_URL from 'shared/baseURL';
class Application {
  /**
   * @param userId - 특정 서용자의 Id
   * @returns 특정 사용자의 원서 정보를 반환합니다.
   */
  getUserApplication(userId: string) {
    try {
      return RequestApi({
        method: 'GET',
        url: ApplicationController.userInformation(userId),
      });
    } catch (error: any) {
      return error;
    }
  }

  /**
   * @param page - 페이지
   * @param size - 원서 크기
   * @returns - 모든 사용자의 원서가 반환됩니다.
   */
  getAllApplication(page: number, size: number) {
    try {
      return RequestApi({
        method: 'GET',
        url: ApplicationController.allApplication(page, size),
      });
    } catch (error: any) {
      return error;
    }
  }

  /**
   * @param userId - 특정 사용자의 Id
   * @returns - 수정 결과가 반환됩니다.
   */
  putUserApplication(data: ApplicationFormType, userId: string) {
    try {
      return RequestApi({
        method: 'PUT',
        url: ApplicationController.userApplication(userId),
        data,
      });
    } catch (error: any) {
      return error;
    }
  }

  /**
   * @returns 1차 합격자들의 수험표 출력을 위한 정보를 반환합니다.
   */
  getAllTickets() {
    try {
      return RequestApi({
        method: 'GET',
        url: ApplicationController.tickets(),
      });
    } catch (error: any) {
      return error;
    }
  }

  /**
   * @param page - 페이지
   * @param size - 원서크기
   * @param tag - 검색태그
   * @param keyword - 검색 키워드
   */
  getSearchApplication(
    page: number,
    size: number,
    tag?: string,
    keyword?: string,
  ) {
    try {
      return RequestApi({
        method: 'GET',
        url: ApplicationController.searchApplication(page, size, tag, keyword),
      });
    } catch (error: any) {
      return error;
    }
  }

  getExcel() {
    return BASE_URL + ApplicationController.excel();
  }
}

export default new Application();
