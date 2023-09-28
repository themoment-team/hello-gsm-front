import styled from '@emotion/styled';

export const SideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  border-right: 1px solid #eeeeee;
`;

export const Title = styled.div`
  width: 166px;
  height: 94px;
  font-family: Product Sans;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: black;
  margin: 0 auto;
  height: 70px;
  display: flex;
  align-items: center;
`;

export const ApplicantListBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  gap: 8px;
  width: 100%;
  cursor: pointer;
`;

export const ApplicantList = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  color: #616161;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 2px;
`;

export const LogoutBox = styled.div`
  width: 100%;
  height: 73px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eeeeee;
  position: absolute;
  bottom: 0px;
`;

export const InnerLogoutBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95px;
  height: 24px;
  margin-left: 25px;
  border: none;
  background: #ffffff;
  cursor: pointer;
`;
export const Logout = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 8px;
  text-align: left;
  position: relative;
  top: 1px;
  color: #9e9e9e;
`;
