import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeAnimation = keyframes`
  0% {
    opacity: 0;
    max-height: 0;
    position: relative;
    padding-top: 0;
  }
  100% {
    opacity: 1;
    max-height: 1000px;
    position: relative;
  }
`;

const fadeOutAnimation = keyframes`
  0% {
    opacity: 1;
    max-height: 1000px;
    position: relative;
  }
  100% {
    opacity: 0;
    max-height: 0;
    position: relative;
    border-top: 0;
    padding-top: 0;
  }
`;

export const FAQBox = styled.button<{ isAnimation?: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 1rem;
  background: #19132a;
  border: none;
  border-radius: 0.625rem;
  margin: 0.9375rem 0;
  padding: 1.2rem 2.5rem;
  cursor: pointer;
  gap: 1rem;

  ${props =>
    props.isAnimation &&
    css`
      animation: ${fadeAnimation} 0.5s;
    `}
`;

export const Title = styled.p`
  ${({ theme }) => theme.typo.h4}
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;

  &::before {
    content: 'Q. ';
    color: ${({ theme }) => theme.color.primary['lime']};
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
  isAnimation?: boolean;
  isClicked?: boolean;
}>`
  color: ${({ theme }) => theme.color.white};
  text-align: left;
  border-top: 0;
  padding-top: 1rem;
  width: 100%;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  position: fixed;
  transition: opacity 0.3s max-height 0.3s position 0.5s;

  ${props =>
    props.isAnimation &&
    css`
      border-top: 0.8px solid;
      animation: ${fadeAnimation} 0.5s;
      opacity: 1;
      max-height: 1000px;
      position: relative;
    `}

  ${props =>
    props.isClicked &&
    !props.isAnimation &&
    css`
      border-top: 0.8px solid;
      animation: ${fadeOutAnimation} 0.5s;
    `};
`;
