import styled from '@emotion/styled';

export const Modal = styled.div`
  width: 888px;
  height: 513px;
  padding: 24px 20px 48px 20px;
  border-radius: 10px;
  gap: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
export const TitleBox = styled.div`
  height: 53px;
  width: 848px;
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

export const ButtonBox = styled.div`
  width: 848px;
  height: 200px;
  display: flex;
  justify-content: space-between;
`;
export const ModalOption = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;

export const XIcon = styled.div`
  height: 24px;
  width: 848px;
  display: flex;
  justify-content: end;
  cursor: pointer;
`;
