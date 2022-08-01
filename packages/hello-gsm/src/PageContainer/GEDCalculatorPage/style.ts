import styled from '@emotion/styled';

export const GEDPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 70px);
  padding: 300px 0 100px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #f8f8f8;
  margin-bottom: 60px;
`;

export const CalculateSection = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Row = styled.div`
  width: 368px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const ScoreInput = styled.input`
  width: 174px;
  height: 37px;
  background: #484453;
  border-radius: 6px;
  outline: none;
  border: none;
  color: #f8f8f8;
  text-align: center;
`;

const Subject = styled.div`
  width: 174px;
  height: 55px;
  left: 776px;
  top: 474px;
  border-radius: 6px;

  font-family: 'Noto Sans KR';
  font-weight: 700;
  font-size: 16px;
  line-height: 55px;
  text-align: center;
  color: #f8f8f8;
`;

export const ScoreSubject = styled(Subject)`
  background: #0c4680;
`;

export const PerfectScoreSubject = styled(Subject)`
  background: #19baff;
`;

export const Submit = styled.button`
  display: block;
  width: 225px;
  height: 64px;
  background: #f8f8f8;
  border-radius: 10px;

  text-align: center;
  color: #0f0921;
  font-size: 20px;
  cursor: pointer;
  border: none;
  line-height: 64px;
`;
