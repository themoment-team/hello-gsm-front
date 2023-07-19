import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeAnimation = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
    max-height: 0;
    padding-top: 0;
    position: relative;
  }
  100% {
    visibility: visible;
    opacity: 1;
    max-height: 1000px;
    position: relative;
  }
`;

const fadeOutAnimation = keyframes`
  0% {
    visibility: visible;
    opacity: 1;
    max-height: 1000px;
    position: relative;
  }
  100% {
    visibility: hidden;
    opacity: 0;
    max-height: 0;
    border-top: 0;
    padding-top: 0;
    position: relative;
  }
`;

export const FAQBox = styled.button<{ isClicked?: boolean }>`
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
  position: relative;

  ${props =>
    props.isClicked &&
    css`
      animation: ${fadeAnimation} 0.5s;
    `};
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
  isClicked?: boolean;
  isAnimation?: boolean;
}>`
  color: ${({ theme }) => theme.color.white};
  text-align: left;
  padding-top: 1rem;
  max-height: 0;
  width: 100%;
  opacity: 0;
  overflow: hidden;
  visibility: hidden;
  position: absolute;
  transition: opacity 0.3s max-height 0.3s position 0.5s;

  ${props =>
    props.isClicked &&
    css`
      animation: ${fadeAnimation} 0.5s;
      border-top: 0.8px solid;
      opacity: 1;
      max-height: 1000px;
      position: relative;
      visibility: visible;
    `}

  ${props =>
    props.isAnimation &&
    !props.isClicked &&
    css`
      animation: ${fadeOutAnimation} 0.5s;
      border-top: 0.8px solid;
      visibility: hidden;
    `};
`;
