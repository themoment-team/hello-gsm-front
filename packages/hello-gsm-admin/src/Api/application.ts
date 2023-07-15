import RequestApi from 'Utils/Libs/requestApi';
import { ApplicationController } from 'Utils/Libs/requestUrls';

class Application {
  /**
   * @param userId - 특장 서용자의 Id
   * @param accessToken
   * @returns 특정 사용자의 원서 정보를 반환합니다.
   */
  getUserApplication(userId: string, accessToken?: string) {
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

  /**
   * @param page - 페이지
   * @param size - 원서 크기
   * @returns - 모든 사용자의 원서가 반환됩니다.
   */
  getAllApplication(page: number, size: number, accessToken?: string) {
    try {
      return RequestApi(
        {
          method: 'GET',
          url: ApplicationController.allApplication(page, size),
        },
        accessToken,
      );
    } catch (error) {
      return error;
    }
  }

  /**
   * @param userId - 특정 사용자의 Id
   * @returns - 수정 결과가 반환됩니다.
   */
  updateUserApplication(userId: string) {
    try {
      return RequestApi({
        method: 'PUT',
        url: ApplicationController.userApplication(userId),
      });
    } catch (error) {
      return error;
    }
  }

  /**
   *
   * @param page - 페이지
   * @param size - 원서 크기
   * @returns 1차 합격자들의 수험표 출력을 위한 정보를 반환합니다.
   */
  getAllTickets(page: number, size: number) {
    try {
      return RequestApi({
        method: 'GET',
        url: ApplicationController.tickets(page, size),
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Application();
