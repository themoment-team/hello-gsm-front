import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const SignInPage = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
  background-color: #fafafa;
`;

export const ContentWrap = styled.div`
  width: 27.8125rem;
  height: 22.375rem;
  padding: 3.75rem 2.5rem;
  border-radius: 0.625rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LoginTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const AdminTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  font-style: normal;
  line-height: 1.5163rem;
  padding-left: 0.375rem;
`;

export const LoginTitle = styled.h2`
  font-size: 2.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 3.125rem;
  margin-top: 0.375rem;
`;
