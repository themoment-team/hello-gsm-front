import styled from '@emotion/styled';

export const Modal = styled.div`
  padding: 24px 20px 48px 20px;
  border-radius: 10px;
  width: 888px;
  gap: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 513px;
`;

export const ModalContent = styled.div`
  height: 441px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: '848px';
  height: '441px';
`;
export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 290px;
`;

export const ModalOption = styled.button`
  border: none;
  height: 12.5rem;
  background-color: white;
  cursor: pointer;
`;

export const XIcon = styled.div`
  height: 1.5rem;
  width: 55.5rem;
  display: flex;
  cursor: pointer;
  justify-content: end;
  padding-right: 1.25rem;
`;

export const TitleBox = styled.div`
  width: 52.5rem;
  height: 3.3125rem;
`;

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.8125rem;
  padding-bottom: 0.3125rem;
`;

export const Desc = styled.div`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: #616161;
`;

export const ContentBox = styled.div`
  height: 27.5625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
