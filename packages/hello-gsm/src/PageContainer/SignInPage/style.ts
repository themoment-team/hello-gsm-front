import styled from '@emotion/styled';

export const SignInPage = styled.div`
  position: relative;
  height: calc(100vh - 5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
`;

export const SignInForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 18.75rem;

  .google {
    background-color: #ffffff;
  }

  .kakao {
    background-color: #fee500;
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 4.375rem;
  color: #ffffff;
  border-bottom: 0.0625rem solid #fff;
  margin-bottom: 1.875rem;
`;

export const SignInBtn = styled.a`
  display: flex;
  align-items: center;
  width: 20.5rem;
  height: 2.8125rem;
  padding: 0 1.25rem;
  border-radius: 0.625rem;
  cursor: pointer;
  color: #0f0921;
  font-size: 1.25rem;
  border: none;
  gap: 3rem;
  line-height: 2.8125rem;
  margin-bottom: 1.5rem;
`;
