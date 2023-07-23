import { SignUpType } from 'type/signup';
import RequestApi from 'Utils/Libs/requestApi';
import { IdentityController } from 'Utils/Libs/requestUrls';

interface newSignUpType extends SignUpType {
  code: string;
}

class Identity {
  /**
   * @param accessToken
   * @param phonNumber - 사용자의 전화번호
   * @returns 본인인증 코드를 발송합니다.
   * 테스트 환경에서만 사용 가능합니다
   */
  postCode(phonNumber: string, accessToken?: string) {
    try {
      return RequestApi(
        {
          method: 'POST',
          url: IdentityController.sendCode(),
          data: {
            phonNumber,
          },
        },
        accessToken,
      );
    } catch (error: any) {
      return error;
    }
  }

  /**
   * @param accessToken
   * @param phonNumber - 사용자의 전화번호
   * @returns 현재 사용자의 본인인증 코드를 SMS로 발신하고, 본인인증 코드를 가져옵니다.
   */
  postCodeTest(phonNumber: string, accessToken?: string) {
    try {
      return RequestApi(
        {
          method: 'POST',
          url: IdentityController.sendCodeTest(),
          data: {
            phonNumber,
          },
        },
        accessToken,
      );
    } catch (error: any) {
      return error;
    }
  }

  /**
   * @param accessToken
   * @param code - 인증 코드
   * @returns 휴대폰으로 발송된 인증 코드를 인증합니다.
   */
  postAuthCode(code: string, accessToken?: string) {
    try {
      return RequestApi(
        {
          method: 'POST',
          url: IdentityController.authCode(),
          data: {
            code,
          },
        },
        accessToken,
      );
    } catch (error: any) {
      return error;
    }
  }

  /**
   * @param accessToken
   * @returns 현재 사용자의 본인인증 정보를 가져옵니다.
   */
  getMyIdentity(accessToken?: string) {
    try {
      return RequestApi(
        {
          method: 'GET',
          url: IdentityController.myIdentity(),
        },
        accessToken,
      );
    } catch (error: any) {
      return error;
    }
  }

  /**
   * @param accessToken
   * @param data - 회원가입에 필요한 파라미터
   */
  postMyIdentity(data: newSignUpType, accessToken?: string) {
    try {
      return RequestApi(
        {
          method: 'POST',
          url: IdentityController.myIdentity(),
          data,
        },
        accessToken,
      );
    } catch (error: any) {
      return error;
    }
  }

  /**
   * @param accessToken
   * @param data - 회원가입에 필요한 파라미터
   */
  putMyIdentity(data: newSignUpType, accessToken?: string) {
    try {
      return RequestApi(
        {
          method: 'PUT',
          url: IdentityController.myIdentity(),
          data,
        },
        accessToken,
      );
    } catch (error: any) {
      return error;
    }
  }
}

export default new Identity();
