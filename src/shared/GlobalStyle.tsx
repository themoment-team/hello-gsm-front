import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        *,
          *::after,
          *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }

        @font-face {
          font-family: 'Product-Sans-Bold';
          src: url('/Fonts/Product Sans Bold.ttf') format('truetype');
        }

        @font-face {
          font-family: 'Product-Sans-Regular';
          src: url('/Fonts/Product Sans Regular.ttf') format('truetype');
        }

        body {
          font-family: 'Product-Sans-Bold';
        }
      `}
    />
  );
}
