import { DocumentType, ScoreType } from 'Types/application';
import RequestApi from 'Utils/Libs/requestApi';
import { ApplicationController } from 'Utils/Libs/requestUrls';

class Application {
  /**
   * 지원자들 리스트를 가져온다
   * @param page 1 부터 시작하는 페이지 인덱스
   * @param name 지원자 이름으로 검색
   * @param accessToken api 요청을 하기 위한 토큰
   * @returns 지원자들 리스트
   */
  getList(page: number, name?: string, accessToken?: string) {
    try {
      return RequestApi(
        {
          method: 'GET',
          url: ApplicationController.getList(page, name),
        },
        accessToken,
      );
    } catch (error: any) {
      return error;
    }
  }
  /**
   * 최종 제출자들의 인원을 가져온다
   * @param accessToken api 요청을 하기 위한 토큰
   * @returns 최종 제출 인원
   */
  getCount(accessToken?: string) {
    try {
      return RequestApi(
        {
          method: 'GET',
          url: ApplicationController.getCount(),
        },
        accessToken,
      );
    } catch (error: any) {
      return error;
    }
  }
  /**
   * 관리자가 서류를 받았을 때 서류 제출 여부를 체킹한다
   * @param data 서류 제출 완료 여부
   */
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
  /**
   * 인적성 평가 점수를 입력한다
   * @param data 수험번호, 인적성 평가 점수
   */
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
  /**
   * 1차 합격자들의 수험표 출력을 위한 정보를 가져온다
   * @returns 1차 합격자들의 수험표 정보
   */
  ticket(accessToken?: string) {
    try {
      return RequestApi(
        {
          method: 'GET',
          url: ApplicationController.ticket(),
        },
        accessToken,
      );
    } catch (error: any) {
      return error;
    }
  }
}

export default new Application();
