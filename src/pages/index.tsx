import React from 'react';
import type { NextPage } from 'next';
import { css } from '@emotion/react';

const Home: NextPage = () => {
  return (
    <div
      css={css`
        color: red;
      `}
    >
      Designed by sunwoo in californium
    </div>
  );
};

export default Home;
