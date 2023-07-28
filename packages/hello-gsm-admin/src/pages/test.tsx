import { NextPage } from 'next';
import { ListHeader } from 'components';

import styled from '@emotion/styled';

const Test: NextPage = () => {
  return (
    <Container>
      <ListHeader />
    </Container>
  );
};

export default Test;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`;
