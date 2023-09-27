import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import device from 'shared/config';

const fadeAnimation = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
    max-height: 0;
    padding-top: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
    max-height: 200px;
    padding-top: 1rem;
  }
`;

const fadeOutAnimation = keyframes`
  0% {
    visibility: visible;
    opacity: 1;
    padding-top: 1rem;
    margin-top: 1rem;
    max-height: 200px;
  }
  100% {
    visibility: hidden;
    opacity: 0;
    padding-top: 0;
    margin-top: 0;
    max-height: 0;
  }
`;

export const FAQBox = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background: #19132a;
  border: none;
  border-radius: 0.625rem;
  margin: 0.9375rem 0;
  padding: 1.2rem 2.5rem;
  cursor: pointer;
  position: relative;
  display: block;

  @media ${device.mobile} {
    margin: 0 auto 0.9375rem;
    padding: 1.2rem 1rem;
  }
`;

export const Title = styled.p`
  ${({ theme }) => theme.typo.h4}
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;

  &::before {
    content: 'Q. ';
    color: ${({ theme }) => theme.color.primary['lime']};
  }

  @media ${device.mobile} {
    ${({ theme }) => theme.typo.h5}
  }
`;

export const IsSearching = styled.span`
  color: ${({ theme }) => theme.color.primary['lime']};
`;

export const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const AnswerContent = styled.p<{
  isClicked: boolean;
  isAnimation: boolean;
}>`
  color: ${({ theme }) => theme.color.white};
  text-align: left;
  border-top: 0.8px solid;
  padding-top: 0;
  max-height: 0;
  width: 100%;
  opacity: 0;
  overflow: hidden;
  visibility: hidden;
  transition: opacity 0.3s max-height 0.3s position 0.5s;

  ${({ isClicked }) =>
    isClicked &&
    css`
      animation: ${fadeAnimation} 0.4s;
      border-top: 0.8px solid;
      opacity: 1;
      margin-top: 1rem;
      padding-top: 1rem;
      max-height: 200px;
      visibility: visible;
    `}

  ${({ isClicked, isAnimation }) =>
    isAnimation &&
    !isClicked &&
    css`
      animation: ${fadeOutAnimation} 0.3s ease;
      border-top: 0.8px solid;
      padding-top: 0;
      max-height: 0;
    `};
`;
