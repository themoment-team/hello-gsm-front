import styled from '@emotion/styled';

export const MainPage = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const MainPageContent = styled.div`
  width: 1530px;
  margin: 0 auto;
`;

export const FunctionBox = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
`;

export const CountBox = styled.div`
  width: 210px;
  height: 100%;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  color: #0f0921;
`;

export const Searchbox = styled.div`
  width: 650px;
  height: 100%;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
`;

export const SearchInput = styled.input`
  width: 560px;
  border: none;
  padding-left: 25px;
  border-radius: 10px;
  outline: none;
  font-weight: 900;
  font-size: 18px;
  ::placeholder {
    font-weight: 500;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.48);
  }
`;

export const SearchButton = styled.div`
  width: 90px;
  height: 100%;
  background: #19baff;
  border-radius: 10px;
  font-weight: 700;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ButtonBox = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

export const Print = styled.a`
  width: 140px;
  height: 100%;
  background: #19baff;
  border-radius: 10px;
  color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;

export const ContentList = styled.div`
  height: 600px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Target = styled.div`
  width: 100%;
`;

const Ball = styled.div`
  border-radius: 100%;
  position: absolute;
  z-index: -1;
`;

export const BlueBall = styled(Ball)`
  width: 920px;
  height: 920px;
  left: -550px;
  bottom: -370px;
  background: linear-gradient(
    201.42deg,
    rgba(123, 232, 255, 0.63) 13.47%,
    rgba(63, 152, 255, 0.63) 33.16%,
    rgba(0, 33, 65, 0.4284) 80.28%
  );
`;

export const SkyBlueBall = styled(Ball)`
  width: 280px;
  height: 280px;
  bottom: -120px;
  right: -60px;
  background: linear-gradient(
    207.52deg,
    rgba(210, 247, 255, 0.6) 13.95%,
    rgba(97, 197, 219, 0.6) 37.16%,
    rgba(0, 132, 201, 0.162) 91.31%
  );
`;
