import styled from '@emotion/styled';
import device from 'shared/config';

export const MyPage = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6.25rem;
  gap: 2rem;
`;

export const UserSection = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.h2}
  color:${({ theme }) => theme.color.white};
  font-weight: 600;
`;

export const UserImgBox = styled.div`
  position: relative;
  width: 7.5rem;
  height: 7.5rem;
  margin: 1.5rem 0 0.75rem;

  img {
    border-radius: 50%;
  }
`;

export const Name = styled.p`
  ${({ theme }) => theme.typo.h4}
  color: ${({ theme }) => theme.color.white};
  font-weight: 600;
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
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
  border: 0;
  padding: 0;
  margin: 0;
`;

export const MypageDescription = styled.p`
  ${({ theme }) => theme.typo.body1}
  color: ${({ theme }) => theme.color.white};
  font-weight: 400;
`;

export const ButtonAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const ApplicationLink = styled.a`
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

export const IsNotPCWrap = styled.div`
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media ${device.mobile} {
    height: 70px;
  }
`;

export const Point = styled.div`
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.87);
  border-radius: 100%;
`;

export const IsNotPC = styled.p`
  width: 260px;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #bcbac1;
  @media ${device.mobile} {
    width: 230px;
    font-size: 18px;
    line-height: 26px;
  }
`;
