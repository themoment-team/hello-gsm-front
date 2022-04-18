import styled from '@emotion/styled';

export const TitleWrap = styled.div`
  height: 520px;
  position: relative;
  top: 250px;
  left: 100px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleBox = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.p`
  width: 710px;
  font-weight: 700;
  font-size: 96px;
  line-height: 110px;
`;

export const Description = styled.p`
  width: 340px;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: rgba(255, 255, 255, 0.66);
`;

export const ApplyBox = styled.div`
  width: 280px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ToApply = styled.a`
  width: 100%;
  height: 60px;
  display: block;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToApplyText = styled.p`
  font-weight: 700;
  font-size: 22px;
`;

export const ApplyTerm = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
`;

export const Underline = styled.div`
  width: 55px;
  border: 2px solid #ffffff;
`;

export const ContentBox = styled.div`
  width: 1550px;
  height: 800px;
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(48px);
  position: relative;
  top: 400px;
  margin: 0 auto;
  border-radius: 24px;
`;

export const ContentHeader = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ContentSelect = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: #d6d6d6;
  cursor: pointer;
`;

export const Test = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
`;
