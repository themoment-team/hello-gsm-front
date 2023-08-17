import styled from '@emotion/styled';
import device from 'shared/config';

export const SchoolPage = styled.div`
  margin-top: 70px;
  @media ${device.mobile} {
    margin-top: 30px;
  }
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.tablet} {
    height: 600px;
  }
  @media ${device.mobile} {
    height: 400px;
  }
`;

export const SchoolName = styled.p`
  color: #ffffff;
  font-weight: 700;
  font-size: 40px;
  @media ${device.mobile} {
    font-size: 16px;
  }
`;

export const VideoBox = styled.div`
  width: 69%;
  height: 35vw;
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(48px);
  margin: 63px 0 51px;
  @media ${device.tablet} {
    width: 95%;
    height: 50vw;
  }
`;

export const ToHomepage = styled.a`
  width: 281px;
  height: 63px;
  border: 1px solid #ffffff;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #ededed;
  font-weight: 700;
  font-size: 22px;
  color: #0f0921;
  @media ${device.mobile} {
    width: 90px;
    height: 30px;
    font-size: 15px;
  }
`;

export const Section2 = styled.div`
  padding: 185px 0 217px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    height: 400px;
  }
  @media ${device.mobile} {
    height: 250px;
  }
`;

export const Section2Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  padding-bottom: 60px;
  @media ${device.mobile} {
    font-size: 16px;
    padding-bottom: 30px;
  }
`;

export const Section3 = styled.div`
  height: 674px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 101px;
  @media ${device.tablet} {
    height: 500px;
    margin-bottom: 50px;
  }
  @media (max-width: 300px) {
    height: 300px;
  }
`;

export const Section3Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 35px;
  @media ${device.mobile} {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

// export const GraphWrap = styled.div`
//   width: 62.5%;
//   height: 75%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   @media ${device.tablet} {
//     width: 90%;
//     padding-left: 50px;
//   }
//   @media ${device.mobile} {
//     height: 90%;
//     padding: 0;
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// export const SelectBox = styled.div`
//   display: flex;
//   align-items: flex-start;
//   @media ${device.mobile} {
//     flex-direction: column;
//   }
// `;

// export const SelectBar = styled.div`
//   height: 450px;
//   border: 3px solid #9a9a9a;
//   @media ${device.tablet} {
//     height: 250px;
//   }
//   @media ${device.mobile} {
//     width: 90vw;
//     height: 0;
//     border: 1.5px solid #9a9a9a;
//     position: relative;
//     top: 5px;
//   }
// `;

// export const SelectOptionBox = styled.div`
//   height: 300px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   position: relative;
//   left: -8px;
//   @media ${device.tablet} {
//     height: 150px;
//   }
//   @media ${device.mobile} {
//     width: 100%;
//     height: 30px;
//     flex-direction: row;
//     justify-content: space-evenly;
//   }
// `;

// export const SelectOption = styled.div`
//   color: white;
//   font-weight: 700;
//   font-size: 20px;
//   color: rgba(255, 255, 255, 0.5);
//   cursor: pointer;
//   @media ${device.mobile} {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: flex-end;
//   }
//   &::before {
//     width: 10px;
//     height: 10px;
//     display: inline-block;
//     border-radius: 100%;
//     background-color: #c4c4c4;
//     content: '';
//     margin-right: 30px;
//     vertical-align: top;
//     @media ${device.mobile} {
//       width: 7px;
//       height: 7px;
//     }
//   }
// `;

// export const GraphBox = styled.div`
//   width: 500px;
//   height: 550px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   @media ${device.tablet} {
//     width: 300px;
//     height: 350px;
//   }
//   @media (max-width: 300px) {
//     width: 90%;
//     height: 75%;
//   }
// `;

// export const Title = styled.div`
//   font-weight: 700;
//   font-size: 20px;
//   color: white;
// `;

// export const Graph = styled.div`
//   width: 100%;
//   @media (max-width: 300px) {
//     width: 70%;
//   }
// `;

export const ColorMarkerWrapper = styled.div`
  display: flex;
  height: 26px;
  gap: 23px;
`;

export const ColorMarker = styled.div`
  display: flex;
  gap: 9px;
  align-items: center;

  color: #fff;
  font-size: 18px;
  font-weight: 400;
`;

const Square = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 2px;
`;

export const BlueSquare = styled(Square)`
  background: #49bdff;
`;

export const LimeSquare = styled(Square)`
  background: #eef759;
`;

export const GraphWrapper = styled.div`
  width: 1354px;
  height: 576px;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`;

export const StickWrapper = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Stick = styled.div`
  width: 60px;
  height: 393px;
  border-radius: 10px;
  background: #49bdff;
`;

export const YearText = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;

export const RatioText = styled(YearText)`
  font-size: 18px;
  margin-bottom: 14px;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fff;
  margin: 20px 0 17px;
`;

const Ball = styled.div`
  border-radius: 100%;
  position: absolute;
  z-index: -1;
`;

export const GreenBall = styled(Ball)`
  width: 176px;
  height: 177px;
  background: linear-gradient(
    220deg,
    #faffa4 10.2%,
    #e6ef54 32.84%,
    #2a3409 88.36%
  );
  top: 400px;
  left: 59%;
  @media ${device.tablet} {
    display: none;
  }
`;

export const BlueBall = styled(Ball)`
  width: 110px;
  height: 110px;
  background: linear-gradient(
    220deg,
    #7be8ff 10.2%,
    #3b8ef0 32.84%,
    rgba(0, 51, 77, 0.51) 88.36%
  );
  top: 804px;
  left: 82%;
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.mobile} {
    display: block;
    width: 32px;
    height: 32px;
    top: 450px;
    left: 85%;
  }
`;

export const SkyBlueBall = styled(Ball)`
  width: 283px;
  height: 283px;
  background: linear-gradient(
    220deg,
    #9cddff 10.2%,
    #48afe4 32.84%,
    rgba(0, 51, 77, 0.51) 88.36%
  );
  top: 719px;
  left: 6%;
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.mobile} {
    display: block;
    width: 75px;
    height: 75px;
    top: 430px;
    left: 2%;
  }
`;

export const SmallBlueBall = styled(Ball)`
  width: 99px;
  height: 99px;
  background: linear-gradient(
    220deg,
    #7be8ff 10.2%,
    #339aff 24.7%,
    #004891 88.36%
  );
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.25);
  top: 1980px;
  left: 8%;
  @media ${device.tablet} {
    width: 45px;
    height: 45px;
    top: 1250px;
    left: 3%;
  }
  @media ${device.mobile} {
    width: 38px;
    height: 38px;
    top: 850px;
    left: 2%;
  }
`;

export const BigGreenBall = styled(Ball)`
  width: 308px;
  height: 308px;
  border-radius: 50%;
  background: linear-gradient(
    203deg,
    rgba(252, 255, 192, 0.93) 0%,
    rgba(247, 255, 95, 0.93) 29.48%,
    rgba(208, 218, 68, 0.93) 63.85%,
    rgba(112, 165, 46, 0.93) 100%
  );
  box-shadow: 4px 4px 31px 0px rgba(0, 0, 0, 0.25);
  top: 1786px;
  left: 75%;
`;
