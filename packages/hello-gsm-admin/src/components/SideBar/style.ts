import styled from '@emotion/styled';

export const SideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 13.8125rem;
  height: 100vh;
  background-color: #ffffff;
  border-right: 0.0625rem solid #eeeeee;
`;

export const Title = styled.div`
  height: 4.375rem;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 4.375rem;
  text-align: center;
  color: black;
`;

export const ApplicantListBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  gap: 0.5rem;
  width: 100%;
  cursor: pointer;
`;

export const ApplicantList = styled.div`
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  color: #616161;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0.125rem;
`;

export const LogoutBox = styled.div`
  width: 100%;
  height: 4.5625rem;
  display: flex;
  align-items: center;
  border-top: 0.0625rem solid #eeeeee;
  position: absolute;
  bottom: 0rem;
`;

export const InnerLogoutBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 5.9375rem;
  height: 1.5rem;
  margin-left: 1.5625rem;
  border: none;
  background: #ffffff;
  cursor: pointer;
`;
export const Logout = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 0.5rem;
  text-align: left;
  position: relative;
  top: 0.0625rem;
  color: #9e9e9e;
`;
