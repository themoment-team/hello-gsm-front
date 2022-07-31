import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import { css } from '@emotion/react';
import Graph from './Graph';
import { Header, Footer } from 'components';

interface EmployType {
  x: string;
  y: number;
}

const SchoolPage: NextPage = () => {
  const [select, setSelect] = useState<number>(0);
  const [EmoployRate, setEmployRate] = useState<EmployType[]>([]);
  const [total, setTotal] = useState<number>(75);

  const data = [
    [
      { x: '취업\n80%', y: 60 },
      { x: '기타\n20%', y: 15 },
    ],
    [
      { x: '취업\n86.8%', y: 66 },
      { x: '기타\n13.2%', y: 10 },
    ],
  ];
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

  const selectStyle = (index: number) =>
    select === index && { color: '#ffffff' };

  const selecting = (index: number) => setSelect(index);

  useEffect(() => {
    setEmployRate(data[select]);
    select === 0 && setTotal(75);
    select === 1 && setTotal(76);
  }, [select]);

  return (
    <>
      <Header />
      <S.SchoolPage>
        <S.Section1>
          <S.SchoolName>광주소프트웨어마이스터고등학교</S.SchoolName>
          <S.VideoBox>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ajKbPblRU7Q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </S.VideoBox>
          <S.ToHomepage
            href="http://gsm.gen.hs.kr/main/main.php"
            target="_blank"
          >
            홈페이지
          </S.ToHomepage>
        </S.Section1>
        <S.Section2>
          <S.Section2Title>MOU 기업</S.Section2Title>
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
        </S.Section2>
        <S.Section3>
          <S.Section3Title>취업률</S.Section3Title>
          <S.GraphWrap>
            <S.SelectBox>
              <S.SelectBar />
              <S.SelectOptionBox>
                <S.SelectOption
                  css={selectStyle(0)}
                  onClick={() => selecting(0)}
                >
                  2020년
                </S.SelectOption>
                <S.SelectOption
                  css={selectStyle(1)}
                  onClick={() => selecting(1)}
                >
                  2021년
                </S.SelectOption>
              </S.SelectOptionBox>
            </S.SelectBox>
            <S.GraphBox>
              <S.Title>총 {total}명</S.Title>
              <S.Graph>
                <Graph data={EmoployRate} />
              </S.Graph>
            </S.GraphBox>
          </S.GraphWrap>
        </S.Section3>
      </S.SchoolPage>
      <S.GreenBall />
      <S.BlueBall />
      <S.SkyBlueBall />
      <S.SmallBlueBall />
      <Footer />
    </>
  );
};

export default SchoolPage;
