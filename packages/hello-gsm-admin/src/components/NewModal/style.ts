import styled from '@emotion/styled';

export const Modal = styled.div<{ isStatus: boolean }>`
  padding: 24px 20px 48px 20px;
  border-radius: 10px;
  width: ${props => (props.isStatus ? '888px' : '456px')};
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
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalOption = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;

export const XIcon = styled.div<{ isStatus: boolean }>`
  height: 24px;
  width: ${props => (props.isStatus ? '888px' : '456px')};
  display: flex;
  cursor: pointer;
  justify-content: end;
  padding-right: 20px;
`;

export const TitleBox = styled.div`
  width: inherit;
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
