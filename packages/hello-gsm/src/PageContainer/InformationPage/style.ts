import styled from '@emotion/styled';

export const InformationPage = styled.div`
  position: relative;
  overflow-x: hidden;
`;

export const InformationContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InformationBox = styled.div`
  width: 850px;
  height: 420px;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Number = styled.p`
  font-weight: 700;
  font-size: 40px;
  color: #ffffff;
`;

export const Title = styled.div`
  width: 170px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
  color: #0f0921;
  font-weight: 700;
  font-size: 20px;
  border-radius: 17px;
`;

export const Point = styled.div`
  width: 15px;
  height: 15px;
  background: #19baff;
  border-radius: 100%;
  position: relative;
  bottom: 17px;
  z-index: 3;
`;

export const Content = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 35px;
  background: #f3f3f3;
  font-weight: 700;
  font-size: 24px;
  color: #0f0921;
  text-align: center;
  border-radius: 43px;
`;

export const Confirm = styled.a`
  width: 230px;
  height: 65px;
  background: #19baff;
  border-radius: 10px;
  font-weight: 700;
  font-size: 28px;
  color: #ffffff;
  padding: 18px 87px;
  margin: 200px 0;
  cursor: pointer;
`;

const Ball = styled.div`
  border-radius: 100%;
  position: absolute;
  z-index: -1;
`;

export const GreenBall = styled(Ball)`
  width: 154px;
  height: 154px;
  background: linear-gradient(
    207.52deg,
    rgba(252, 255, 173, 0.9) 13.95%,
    rgba(222, 228, 73, 0.9) 27.08%,
    rgba(48, 95, 2, 0.513) 91.31%
  );
`;

export const BigBlueBall = styled(Ball)`
  width: 459px;
  height: 459px;
  background: linear-gradient(
    207.52deg,
    rgba(93, 196, 255, 0.9) 13.95%,
    rgba(41, 120, 214, 0.9) 37.16%,
    rgba(10, 36, 74, 0.9) 91.31%
  );
`;

export const SmallBlueBall = styled(Ball)`
  width: 75px;
  height: 75px;
  background: linear-gradient(
    207.52deg,
    rgba(93, 196, 255, 0.9) 13.95%,
    rgba(41, 120, 214, 0.9) 37.16%,
    rgba(10, 36, 74, 0.9) 91.31%
  );
`;

export const LightBlueBall = styled(Ball)`
  width: 230px;
  height: 230px;
  top: 2075px;
  left: 80%;
  background: linear-gradient(
    220deg,
    #9cddff 10.2%,
    #48afe4 32.84%,
    rgba(0, 51, 77, 0.51) 88.36%
  );
`;
