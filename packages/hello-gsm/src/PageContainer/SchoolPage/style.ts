import styled from '@emotion/styled';
import device from 'shared/config';

export const SchoolPage = styled.div`
  margin-top: 4.375rem;
  @media ${device.mobile} {
    margin-top: 1.875rem;
  }
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.tablet} {
    height: 37.5rem;
  }
  @media ${device.mobile} {
    height: 25rem;
  }
`;

export const SchoolName = styled.p`
  color: #ffffff;
  font-weight: 700;
  font-size: 2.5rem;
  @media ${device.mobile} {
    font-size: 1rem;
  }
`;

export const VideoBox = styled.div`
  width: 69%;
  height: 35vw;
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(3rem);
  margin: 3.9375rem 0 3.1875rem;
  @media ${device.tablet} {
    width: 95%;
    height: 50vw;
  }
`;

export const ToHomepage = styled.a`
  width: 17.5625rem;
  height: 3.9375rem;
  border: 0.0625rem solid #ffffff;
  border-radius: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #ededed;
  font-weight: 700;
  font-size: 1.375rem;
  color: #0f0921;
  @media ${device.mobile} {
    width: 5.625rem;
    height: 1.875rem;
    font-size: 0.9375rem;
  }
`;

export const Section2 = styled.div`
  padding: 11.5625rem 0 13.5625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    height: 25rem;
  }
  @media ${device.mobile} {
    height: 15.625rem;
  }
`;

export const Section2Title = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  color: #ffffff;
  padding-bottom: 3.75rem;
  @media ${device.mobile} {
    font-size: 1rem;
    padding-bottom: 1.875rem;
  }
`;

export const Section3 = styled.div`
  height: 42.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6.3125rem;
`;

export const Section3Title = styled.div`
  font-weight: 700;
  font-size: 1.6875rem;
  color: #ffffff;
  margin-bottom: 2.1875rem;
  @media ${device.mobile} {
    font-size: 1rem;
    margin-bottom: 1.25rem;
  }
`;

export const ColorMarkerWrapper = styled.div`
  height: 1.625rem;
`;

export const ColorMarker = styled.div`
  display: flex;
  gap: 0.5625rem;
  align-items: center;

  color: #fff;
  font-size: 1.125rem;
  font-weight: 400;
`;

export const Square = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.125rem;
  background: #49bdff;
`;

export const GraphWrapper = styled.div`
  max-width: 84.625rem;
  width: 100%;
  height: 36rem;
  display: flex;
  justify-content: flex-start;
  gap: 1.25rem;
  position: relative;

  @media (max-width: 500px) {
    gap: 0.35rem;
  }
`;

export const Blank = styled.div`
  width: 2.6875rem;
`;

export const Line = styled.div`
  width: 100%;
  height: 0.1875rem;
  position: absolute;
  top: 33.3438rem;
  z-index: -1;
  background: #9a9a9a;
`;

export const StickWrapper = styled.div<{ ratio: number | null }>`
  margin-top: auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 500px) {
    ${({ ratio }) => !ratio && 'display: none'}
  }
`;

export const Stick = styled.div<{ ratio: number; isCurIndex: boolean }>`
  width: 3.75rem;
  height: ${({ ratio }) => (393 / 100) * ratio}px;
  border-radius: 0.625rem;
  background: ${({ isCurIndex }) =>
    isCurIndex ? '#49bdff' : 'rgba(82, 82, 82, 0.60)'};
  cursor: pointer !important;
  transition: ease-in-out 0.2s;

  @media ${device.tablet} {
    height: ${({ ratio }) => (330 / 100) * ratio}px;
  }
  @media ${device.mobile} {
    height: ${({ ratio }) => (280 / 100) * ratio}px;
  }
  @media (max-width: 500px) {
    width: 2.4rem;
  }
`;

export const YearText = styled.span`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.25rem;
  width: 4.35rem;
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    font-size: 0.875rem;
    width: 3.5rem;
  }
`;

export const NotCurrentYearText = styled(YearText)`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.5);
`;

export const RatioText = styled(YearText)`
  font-size: 1.125rem;
  margin-bottom: 0.875rem;
`;

export const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: #c4c4c4;
  margin: 1.25rem 0 1.0625rem;
`;

export const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 60%;
  top: 30%;
`;

export const BigTotal = styled.p`
  color: #fff;
  font-size: 6rem;
  font-weight: 700;
  line-height: 8.6875rem;

  @media (max-width: 500px) {
    font-size: 5rem;
    line-height: 4.6875rem;
  }
`;

export const MiddleTotal = styled(BigTotal)`
  font-size: 2.5rem;
  line-height: 3.625rem;

  @media (max-width: 500px) {
    font-size: 1.5rem;
    line-height: 2.6875rem;
  }
`;

export const SmallTotal = styled(BigTotal)`
  font-size: 1.5rem;
  line-height: 2.1875rem;
  margin-bottom: 0.875rem;

  @media (max-width: 500px) {
    margin-bottom: 0rem;
    font-size: 1.2rem;
    line-height: 1.6875rem;
  }
`;

export const FlippedTotal = styled(BigTotal)`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 34.17%,
    rgba(255, 255, 255, 0.27) 100%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: scaleY(-1);

  position: relative;
  top: -3.375rem;

  @media ${device.mobile} {
    top: -3.075rem;
  }

  @media (max-width: 500px) {
    font-size: 5rem;
    line-height: 4.6875rem;
  }
`;

const Ball = styled.div`
  border-radius: 100%;
  position: absolute;
  z-index: -1;
`;

export const GreenBall = styled(Ball)`
  width: 11rem;
  height: 11.0625rem;
  background: linear-gradient(
    220deg,
    #faffa4 10.2%,
    #e6ef54 32.84%,
    #2a3409 88.36%
  );
  top: 25rem;
  left: 59%;
  @media ${device.tablet} {
    display: none;
  }
`;

export const BlueBall = styled(Ball)`
  width: 6.875rem;
  height: 6.875rem;
  background: linear-gradient(
    220deg,
    #7be8ff 10.2%,
    #3b8ef0 32.84%,
    rgba(0, 51, 77, 0.51) 88.36%
  );
  top: 50.25rem;
  left: 82%;
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.mobile} {
    display: block;
    width: 2rem;
    height: 2rem;
    top: 28.125rem;
    left: 85%;
  }
`;

export const SkyBlueBall = styled(Ball)`
  width: 17.6875rem;
  height: 17.6875rem;
  background: linear-gradient(
    220deg,
    #9cddff 10.2%,
    #48afe4 32.84%,
    rgba(0, 51, 77, 0.51) 88.36%
  );
  top: 44.9375rem;
  left: 6%;
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.mobile} {
    display: block;
    width: 4.6875rem;
    height: 4.6875rem;
    top: 26.875rem;
    left: 2%;
  }
`;

export const SmallBlueBall = styled(Ball)`
  width: 6.1875rem;
  height: 6.1875rem;
  background: linear-gradient(
    220deg,
    #7be8ff 10.2%,
    #339aff 24.7%,
    #004891 88.36%
  );
  box-shadow: -0.125rem 0.125rem 0.625rem rgba(0, 0, 0, 0.25);
  top: 123.75rem;
  left: 8%;
  @media ${device.tablet} {
    display: none;
  }
`;

export const BigGreenBall = styled(Ball)`
  width: 19.25rem;
  height: 19.25rem;
  border-radius: 50%;
  background: linear-gradient(
    203deg,
    rgba(252, 255, 192, 0.93) 0%,
    rgba(247, 255, 95, 0.93) 29.48%,
    rgba(208, 218, 68, 0.93) 63.85%,
    rgba(112, 165, 46, 0.93) 100%
  );
  box-shadow: 0.25rem 0.25rem 1.9375rem 0rem rgba(0, 0, 0, 0.25);
  top: 111.625rem;
  left: 75%;
  @media ${device.tablet} {
    display: none;
  }
  @media (max-width: 1255px) {
    left: 80%;
    width: 11.25rem;
    height: 11.25rem;
  }
`;
