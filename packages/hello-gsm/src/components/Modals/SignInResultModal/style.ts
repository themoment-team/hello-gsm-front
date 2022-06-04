import styled from '@emotion/styled';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  background: rgba(0, 0, 0, 0.66);
  z-index: 2;
  -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1s; /* Firefox < 16 */
  -ms-animation: fadein 1s; /* Internet Explorer */
  -o-animation: fadein 1s; /* Opera < 12.1 */
  animation: fadein 1s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const SucessComment = styled.h1`
  font-weight: 700;
  font-size: 32px;
  text-align: center;
  color: #ffffff;
`;
