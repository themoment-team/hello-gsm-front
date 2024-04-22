import styled from '@emotion/styled';

import device from 'shared/config';

export const MainPage = styled.div`
  position: relative;
  overflow: hidden;
`;

export const MainContent = styled.div`
  padding: 0 13vw;
  height: 106.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 18.75rem;
  margin-top: 10.38rem;

  @media (${device.mobile}) {
    padding: 0 7vw;
    height: 90rem;
  }
`;

export const TitleBox = styled.div`
  height: 18.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.h1}
  color: ${({ theme }) => theme.color.white};
  font-weight: 600;
  margin-bottom: 1rem;

  @media ${device.mobile} {
    ${({ theme }) => theme.typo.h2}
  }
`;

export const Description = styled.p`
  ${({ theme }) => theme.typo.h3}
  color: ${({ theme }) => theme.color.white};
  font-weight: 400;
  margin-bottom: 3rem;
`;

export const ApplyBox = styled.div`
  width: 17.5rem;
  height: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ToApply = styled.button`
  width: 18.75rem;
  height: 3.75rem;
  border-radius: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  color: #303030;
  background: #dbe44e;
  box-shadow: 0rem 0.3125rem 1.25rem 0rem #dbe44e;
  border: none;

  :hover {
    transition: box-shadow 0.5s;
    box-shadow: 0rem 0rem 3.125rem 0rem #dbe44e;
  }

  &:disabled {
    background: #a2a2a2;
    border-radius: 0.75rem;
    box-shadow: 0rem 0.3125rem 1.25rem 0rem #a2a2a2;
    pointer-events: none;

    @media ${device.mobile} {
      ${({ theme }) => theme.typo.h4}
    }
  }
`;

export const TermWrapper = styled.ul`
  color: #ffffff;
  padding-left: 0.8125rem;
`;

export const GuideAnchor = styled.a`
  ${({ theme }) => theme.typo.h4}
  position: absolute;
  right: 10%;
  padding: 1rem 1.5rem;
  text-align: center;
  background-color: #f3f3f3;
  border-radius: 0.75rem;
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.color.black};
  font-weight: 600;
  top: 45rem;

  &:hover {
    background: rgba(243, 243, 243, 0.52);
    transition: 0.3s;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

export const ApplyTerm = styled.li`
  ${({ theme }) => theme.typo.h3}
  font-weight: 400;
`;

export const Underline = styled.div`
  width: 6.25rem;
  height: 0.0625rem;
  background: #ffffff;
  margin: 3.75rem 0;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 50rem;
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(3rem);
  margin: 0 auto;
  border-radius: 1.5rem;
  position: relative;

  border-radius: 2.5rem;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(24px);

  border: 1px solid #ffffff;
`;

export const ContentHeader = styled.div`
  width: 100%;
  height: 8.125rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  z-index: 1;

  @media ${device.mobile} {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: baseline;
  }
`;

export const ContentHeaderLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const ContentSelect = styled.button`
  ${({ theme }) => theme.typo.h3}
  color: #d6d6d6;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0 1.1716rem;
  margin: 0;

  @media ${device.laptop} {
    ${({ theme }) => theme.typo.h5}
  }

  @media ${device.mobile} {
    ${({ theme }) => theme.typo.body1}
  }
`;

const Ball = styled.div`
  border-radius: 100%;
  position: absolute;
  z-index: -1;
`;

export const GreenBall = styled(Ball)`
  width: 15.8125rem;
  height: 15.8125rem;
  background: linear-gradient(
    207.52deg,
    #fcffad 13.95%,
    #dee449 27.08%,
    rgba(48, 95, 2, 0.57) 91.31%
  );
  top: 12.5rem;
  right: 23%;
  @media ${device.tablet} {
    width: 5rem;
    height: 5rem;
    top: 45rem;
    right: 24%;
  }
  @media ${device.mobile} {
    width: 4.125rem;
    height: 4.125rem;
    top: 20.625rem;
    left: 90%;
  }
`;

export const BigBlueBall = styled(Ball)`
  width: 64.8125rem;
  height: 64.8125rem;
  background: linear-gradient(
    198.09deg,
    #7be7ff 14.23%,
    #3290ff 30.3%,
    rgba(0, 33, 65, 0.63) 90.22%
  );
  box-shadow: -0.75rem -0.75rem 1.5rem rgba(0, 0, 0, 0.25);
  top: 28.125rem;
  left: 67%;
  @media ${device.tablet} {
    width: 20.6875rem;
    height: 20.6875rem;
    top: 45.5rem;
    left: 78%;
  }
  @media ${device.mobile} {
    width: 17.25rem;
    height: 17.25rem;
    top: 29.8125rem;
    left: 80%;
  }
`;

export const YellowBall = styled(Ball)`
  width: 8.5rem;
  height: 8.5rem;
  background: linear-gradient(
    202.92deg,
    #fcffc0 7.76%,
    #f7ff5f 32.18%,
    #d0da44 60.66%,
    #70a52e 90.6%
  );
  box-shadow: 0.25rem 0.25rem 1.9375rem rgba(0, 0, 0, 0.25);
  top: 84.375rem;
  left: 88%;
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.mobile} {
    width: 7.9375rem;
    height: 7.9375rem;
    top: 58.4375rem;
    left: 5%;
  }
`;

export const OrangeBall = styled(Ball)`
  width: 19.5rem;
  height: 19.5rem;
  background: linear-gradient(220deg, #e1da40 10.2%, #f29100 88.36%);
  top: 84.4375rem;
  left: 26%;
  @media ${device.tablet} {
    width: 7.375rem;
    height: 7.375rem;
    top: 68.75rem;
  }
  @media ${device.mobile} {
    top: 43.75rem;
  }
`;

export const SmallBlueBall = styled(Ball)`
  width: 14.1875rem;
  height: 14.1875rem;
  background: linear-gradient(
    220deg,
    #5da7ff 10.2%,
    #0081ff 41.79%,
    #00366b 88.36%
  );
  left: 54%;
  top: 103.125rem;
  @media ${device.tablet} {
    width: 5.375rem;
    height: 5.375rem;
    top: 74.25rem;
  }
  @media ${device.mobile} {
    width: 5.8125rem;
    height: 5.8125rem;
    top: 55rem;
    left: 90%;
  }
`;

export const MintBall = styled(Ball)`
  width: 30.0625rem;
  height: 30.0625rem;
  background: linear-gradient(
    220deg,
    #9cddff 10.2%,
    #48afe4 32.84%,
    rgba(0, 51, 77, 0.51) 88.36%
  );
  top: 109.375rem;
  left: -4.375rem;
  @media ${device.tablet} {
    width: 14.0625rem;
    height: 14.0625rem;
    top: 84.4375rem;
  }
  @media ${device.mobile} {
    display: none;
  }
`;

export const NanoBlueBall = styled(Ball)`
  width: 6.1875rem;
  height: 6.1875rem;
  background: linear-gradient(
    220deg,
    #7be8ff 10.2%,
    #339aff 24.7%,
    #004891 88.36%
  );
  box-shadow: -0.125rem 0.125rem 0.625rem rgba(0, 0, 0, 0.25);
  top: 125rem;
  left: 24%;
  @media ${device.tablet} {
    width: 4.125rem;
    height: 4.125rem;
    top: 90.625rem;
  }
  @media ${device.mobile} {
    display: none;
  }
`;
