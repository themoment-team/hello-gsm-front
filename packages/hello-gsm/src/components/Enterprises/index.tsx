import { css } from '@emotion/react';
import React from 'react';

import * as S from './style';

const Enterprises = () => {
  const enterprises = [
    [
      '/Enterprises/Hancom.jpg',
      '/Enterprises/GSTEC.jpg',
      '/Enterprises/AICA.jpg',
      '/Enterprises/MIDAS.jpg',
      '/Enterprises/GJKorcham.jpg',
      '/Enterprises/Mindlogic.jpg',
    ],
    [
      '/Enterprises/RFA.jpg',
      '/Enterprises/Payhere.png',
      '/Enterprises/Doomoolmori.png',
      '/Enterprises/Gameduo.jpg',
      '/Enterprises/Clika.jpg',
      '/Enterprises/Zetabank.jpg',
    ],
    [
      '/Enterprises/Meimpact.jpg',
      '/Enterprises/Nuua.jpg',
      '/Enterprises/Aurender.jpg',
      '/Enterprises/Wiseitech.jpg',
      '/Enterprises/Morrowbogi.jpg',
    ],
  ];

  return (
    <>
      <S.EnterpriseWrap>
        {enterprises.map((enterprise, index: number) => (
          <S.EnterpriseLine key={index}>
            {enterprise.map((name: string, index: number) => (
              <S.Enterprise key={index}>
                <S.EnterpriseImg
                  css={css`
                    background-image: url(${name});
                  `}
                />
              </S.Enterprise>
            ))}
          </S.EnterpriseLine>
        ))}
      </S.EnterpriseWrap>
      <S.ExampleBlank />
    </>
  );
};

export default Enterprises;
