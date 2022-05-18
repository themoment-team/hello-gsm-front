import styled from '@emotion/styled';

export const MyPage = styled.div`
  height: 100vh;
  position: relative;
  overflow-y: hidden;
`;

export const Content = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 100px;
`;

export const UserBox = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.a`
  width: 160px;
  height: 45px;
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  color: #0f0921;
  cursor: pointer;
`;

const Ball = styled.div`
  border-radius: 100%;
  z-index: -1;
  position: absolute;
`;

export const GreenBall = styled(Ball)`
  width: 253px;
  height: 253px;
  background: linear-gradient(
    207.52deg,
    #fcffad 13.95%,
    #dee449 27.08%,
    rgba(48, 95, 2, 0.57) 91.31%
  );
  top: 500px;
  left: 85%;
`;

export const BigBlueBall = styled(Ball)`
  width: 902px;
  height: 902px;
  background: linear-gradient(
    201.42deg,
    #7be8ff 13.47%,
    #3f98ff 33.16%,
    rgba(0, 33, 65, 0.68) 80.28%
  );
  bottom: -500px;
  left: -300px;
`;

export const MiddleBlueBall = styled(Ball)`
  width: 162px;
  height: 162px;
  background: linear-gradient(
    220deg,
    #9cddff 10.2%,
    #48afe4 32.84%,
    rgba(0, 51, 77, 0.51) 88.36%
  );
  top: 830px;
  left: 75%;
`;

export const SmallBlueBall = styled(Ball)`
  width: 75px;
  height: 75px;
  background: linear-gradient(
    207.52deg,
    #5dc4ff 13.95%,
    #2978d6 37.16%,
    #0a244a 91.31%
  );
  top: 850px;
  left: 90%;
`;
