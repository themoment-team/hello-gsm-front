import styled from '@emotion/styled';

export const Modal = styled.div`
  padding: 1.5rem 1.25rem 3rem 1.25rem;
  border-radius: 0.625rem;
  width: 55.5rem;
  gap: 0.625rem;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 32.0625rem;
  position: absolute;
`;

export const ModalContent = styled.div`
  height: 27.5625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: '53rem';
  height: '27.5625rem';
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 18.125rem;
`;

export const ModalOption = styled.button`
  border: none;
  height: 200px;
  background-color: white;
  cursor: pointer;
`;

export const XIcon = styled.div`
  height: 24px;
  display: flex;
  justify-content: end;
  padding-right: 20px;
`;

export const TitleBox = styled.div`
  width: 840px;
  height: 53px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 29px;
  padding-bottom: 5px;
`;

export const Desc = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #616161;
`;

export const ContentBox = styled.div`
  height: 441px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
