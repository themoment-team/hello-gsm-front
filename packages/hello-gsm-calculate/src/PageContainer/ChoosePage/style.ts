import styled from '@emotion/styled';

export const SystemSection = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 75px;
  margin: 0 auto;
`;

export const SystemLabel = styled.label`
  display: inline-block;
  text-align: center;
  width: 45%;
  input {
    display: none;
  }
  div {
    cursor: pointer;
    width: 100%;
    height: 61px;
    background-color: #484453;
    color: rgba(255, 255, 255, 0.45);
    border-radius: 6px;
    line-height: 61px;
  }
  input[type='radio']:checked + div {
    background-color: #42bafe;
    color: #ffffff;
  }
`;

export const ChoosePage = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChooseForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RadioSection = styled.div`
  display: flex;
  margin: 40px 0 280px;
  width: 423px;
  justify-content: space-between;
  label {
    width: 30%;
    font-size: 22px;
  }
`;

export const ChooseTitle = styled.h1`
  color: white;
  font-size: 30px;
`;

export const Submit = styled.button`
  display: block;
  width: 225px;
  height: 64px;
  background: #ffffff;
  border-radius: 10px;
  margin: 0 auto;
  text-align: center;
  color: #0f0921;
  font-size: 20px;
  cursor: pointer;
  border: none;
`;

export const Desc = styled.p`
  text-align: center;
  color: white;
  line-height: 30px;
`;
