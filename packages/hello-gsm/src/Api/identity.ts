import BASE_URL from 'shared/baseURL';
import { SignUpType } from 'type/signup';
import RequestApi from 'Utils/Libs/requestApi';
import { IdentityController } from 'Utils/Libs/requestUrls';

class Identity {
  /**
   * @returns 각 oauth 로그인 URL을 반환한다
   */

  sendCode(phonNumber: string) {
    try {
      return RequestApi({
        method: 'POST',
        url: IdentityController.sendCode.sendCode(),
        data: {
          phonNumber,
        },
      });
    } catch (error: any) {
      return error;
    }
  }

  sendCodeTest(phonNumber: string) {
    try {
      return RequestApi({
        method: 'POST',
        url: IdentityController.sendCode.sendCode(),
        data: {
          phonNumber,
        },
      });
    } catch (error: any) {
      return error;
    }
  }

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

  createMyIdentity(data: SignUpType) {
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

  updateMyIdentity(data: SignUpType) {
    try {
      return RequestApi({
        method: 'PUT',
        url: IdentityController.updateMyIdentity(),
        data,
      });
    } catch (error: any) {
      return error;
    }
  }
}

export default new Identity();
