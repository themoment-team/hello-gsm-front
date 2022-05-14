import { css } from '@emotion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import * as S from './style';

interface indexType {
  selectedIndex: number;
}

const MainPageDescription: React.FC<indexType> = ({ selectedIndex }) => {
  const today = new Date();
  const [index, setIndex] = useState<number>(1);
  const [logged, setLogged] = useState<boolean>(false);

  useEffect(() => {
    today > new Date('2023-03-01') ? setIndex(0) : setIndex(selectedIndex);
  }, [selectedIndex]);

  switch (index) {
    case 1:
      return (
        <S.Description>
          <S.DescriptionLine>
            1. 인터넷 접수 후 출력하여 작성교사, 지원자, 보호자 및 학교장 직인을
            날인하여
          </S.DescriptionLine>
          <S.DescriptionLine>
            원서접수 기간 내에 우편접수 또는 공문시행을 통해 제출하여야 합니다.
          </S.DescriptionLine>
          <S.DescriptionLine
            css={css`
              margin-top: 50px;
            `}
          >
            2. 입력사항에 오류가 있거나 허위로 입력한 경우 접수가 취소될 수
            있으며,
          </S.DescriptionLine>
          <S.DescriptionLine>
            이에 따른 책임은 지원자에게 있습니다.
          </S.DescriptionLine>
          <S.DescriptionLine
            css={css`
              margin-top: 50px;
            `}
          >
            3. 접수번호는 원서 최종 제출 후 자동으로 부여됩니다.
          </S.DescriptionLine>
          <S.PostScript
            css={css`
              margin-top: 50px;
            `}
          >
            2022.10.17 ~ 2022.10.20
          </S.PostScript>
        </S.Description>
      );
    case 2:
      return (
        <S.Description>
          <S.DescriptionLine>
            작성하신 입학 원서와 그 외 서류들을 출력하여 수기 부분을
          </S.DescriptionLine>
          <S.DescriptionLine>
            모두 작성하신 후 10월 17일 부터 10월 20일까지 학교 행정실에
          </S.DescriptionLine>
          <S.DescriptionLine>제출해야합니다.</S.DescriptionLine>
          <S.PostScript>광주광역시 광산구 송정동 상무대로 312</S.PostScript>
        </S.Description>
      );
    case 3:
      return (
        <S.Description>
          <S.DescriptionLine>
            1차 서류 심사에서는 내신과 봉사시간, 출결현황을 점수로 환산하여
          </S.DescriptionLine>
          <S.DescriptionLine>
            정원의 1.5배의 인원을 선출합니다.
          </S.DescriptionLine>
          <S.PostScript>2022.10.24 발표</S.PostScript>
        </S.Description>
      );
    case 4:
      return (
        <S.Description>
          <S.DescriptionLine>
            2차 면접에서는 인성과 문제해결 능력을
          </S.DescriptionLine>
          <S.DescriptionLine>중심으로 인적성검사를 치룹니다.</S.DescriptionLine>
          <S.PostScript>2022.10.28 인적성 검사 진행</S.PostScript>
        </S.Description>
      );
    case 5:
      return logged ? (
        <S.Description>
          <S.DescriptionLine>로그인 완료</S.DescriptionLine>
        </S.Description>
      ) : (
        <S.Description>
          <S.DescriptionLine>
            결과 발표 확인을 위해선 로그인이 필요합니다.
          </S.DescriptionLine>
          <Link href="/auth/signin" passHref>
            <S.Login>로그인</S.Login>
          </Link>
        </S.Description>
      );
    default:
      return (
        <S.DescriptionLine>
          현재 2022년 신입생 모집이 종료되었습니다
        </S.DescriptionLine>
      );
  }
};

export default MainPageDescription;
