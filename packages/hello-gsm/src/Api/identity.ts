import { SignUpType } from 'type/signup';
import RequestApi from 'Utils/Libs/requestApi';
import { IdentityController } from 'Utils/Libs/requestUrls';

interface newSignUpType extends SignUpType {
  code: string;
}

class Identity {
  /**
   * 본인인증 코드를 발송한다.
   */
  sendCode(phonNumber: string) {
    try {
      return RequestApi({
        method: 'POST',
        url: IdentityController.sendCode(),
        data: {
          phonNumber,
        },
      });
    } catch (error: any) {
      return error;
    }
  }

  /**
   * @returns 현재 사용자의 본인인증 코드를 SMS로 발신하고, 본인인증 코드를 가져온다.
   */
  sendCodeTest(phonNumber: string) {
    try {
      return RequestApi({
        method: 'POST',
        url: IdentityController.sendCodeTest(),
        data: {
          phonNumber,
        },
      });
    } catch (error: any) {
      return error;
    }
  }

  /**
   * 휴대폰으로 발송된 인증 코드를 인증한다.
   */
  authCode(code: string) {
    try {
      return RequestApi({
        method: 'POST',
        url: IdentityController.authCode(),
        data: {
          code,
        },
      });
    } catch (error: any) {
      return error;
    }
  }

  /**
   * @returns 현재 사용자의 본인인증 정보를 가져온다.
   */
  getMyIdentity() {
    try {
      return RequestApi({
        method: 'GET',
        url: IdentityController.myIdentity(),
      });
    } catch (error: any) {
      return error;
    }
  }

  /**
   * 본인인증 코드와 개인정보를 입력받아 Identity를 생성한다.
   */
  createMyIdentity(data: newSignUpType) {
    try {
      return RequestApi({
        method: 'POST',
        url: IdentityController.myIdentity(),
        data,
      });
    } catch (error: any) {
      return error;
    }
  }

  /**
   * @returns 특정 사용자의 본인인증 정보를 가져온다.
   */
  getUserIdentity(userID: string) {
    try {
      return RequestApi({
        method: 'GET',
        url: IdentityController.getUserIdentity(userID),
      });
    } catch (error: any) {
      return error;
    }
  }

  /**
   *  현재 사용자의 본인인증 정보를 수장한다.
   */
  updateMyIdentity(data: newSignUpType) {
    try {
      return RequestApi({
        method: 'PUT',
        url: IdentityController.myIdentity(),
        data,
      });
    } catch (error: any) {
      return error;
    }
  }
}

export default new Identity();
