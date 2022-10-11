import { css } from '@emotion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import * as S from './style';
import * as I from 'Assets/svg';
import { MainDescStatusType } from 'type/user';
import useStore from 'Stores/StoreContainer';

const MainPageDescription: React.FC<MainDescStatusType> = ({
  selectedIndex,
  data,
}) => {
  const today = new Date();
  const isFirstPeriod = today < new Date('2022-11-02 10:00:00');
  const firstResult = data?.application?.firstResultScreening ? true : false;
  const finalResult = data?.application?.finalResultScreening ? true : false;
  const pass = isFirstPeriod ? firstResult : finalResult;
  const [index, setIndex] = useState<number>(1);
  const name = data?.name || '';
  const registrationNumber = data?.application?.registrationNumber || '';

  const { setLogged } = useStore();

  useEffect(() => {
    today > new Date('2023-03-01 00:00:00')
      ? setIndex(0)
      : setIndex(selectedIndex);
    if (data) {
      setLogged(true);
      today < new Date('2022-10-24 10:00:00') &&
        selectedIndex === 5 &&
        setIndex(7);
    } else {
      setLogged(false);
      selectedIndex === 5 && setIndex(6);
    }
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
            원서접수 기간 내에 공문시행, 등기 우편, 방문 제출 중 한가지의
            방법으로 제출하여야 합니다.
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
            모두 작성하신 후 10월 17일 부터 10월 20일까지 교무실 원서접수처에
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
            정원의 1.3배의 인원을 선출합니다.
          </S.DescriptionLine>
          <S.PostScript>2022.10.24 발표</S.PostScript>
        </S.Description>
      );
    case 4:
      return (
        <S.Description>
          <S.DescriptionLine>
            2차 평가에서는 인성과 문제해결 능력을
          </S.DescriptionLine>
          <S.DescriptionLine>
            중심으로 직무적성 소양평가를 치룹니다.
          </S.DescriptionLine>
          <S.PostScript>2022.10.28 직무적성 소양평가 진행</S.PostScript>
        </S.Description>
      );
    case 5:
      return isFirstPeriod ? (
        pass ? (
          <S.Description>
            <S.DescriptionLine>
              {name}님 2022학년도 광주소프트웨어마이스터고등학교
            </S.DescriptionLine>
            <S.DescriptionLine>
              <S.Blue>1차 합격</S.Blue>하셨습니다.
            </S.DescriptionLine>
            <S.PostScript>접수 번호 {registrationNumber}</S.PostScript>
            <S.Celebration>
              <I.Celebration />
            </S.Celebration>
          </S.Description>
        ) : (
          <S.Description>
            <S.DescriptionLine>
              {name}님 2022학년도 광주소프트웨어마이스터고등학교
            </S.DescriptionLine>
            <S.DescriptionLine>
              1차 서류 심사 결과 <S.Red>불합격</S.Red>하셨습니다.
            </S.DescriptionLine>
            <S.PostScript>접수 번호 {registrationNumber}</S.PostScript>
          </S.Description>
        )
      ) : pass ? (
        <S.Description>
          <S.DescriptionLine>
            {name}님 2022학년도 광주소프트웨어마이스터고등학교
          </S.DescriptionLine>
          <S.DescriptionLine>
            <S.Blue>최종 합격</S.Blue>하셨습니다.
          </S.DescriptionLine>
          <S.PostScript>접수 번호 {registrationNumber}</S.PostScript>
          <S.Celebration>
            <I.Celebration />
          </S.Celebration>
        </S.Description>
      ) : (
        <S.Description>
          <S.DescriptionLine>
            {name}님 2022학년도 광주소프트웨어마이스터고등학교
          </S.DescriptionLine>
          <S.DescriptionLine>
            <S.Red>최종 불합격</S.Red>하셨습니다.
          </S.DescriptionLine>
          <S.PostScript>접수 번호 {registrationNumber}</S.PostScript>
        </S.Description>
      );
    case 6:
      return (
        <S.Description>
          <S.DescriptionLine>
            결과 발표 확인을 위해선 로그인이 필요합니다.
          </S.DescriptionLine>
          <Link href="/auth/signin" passHref>
            <S.Login>로그인</S.Login>
          </Link>
        </S.Description>
      );
    case 7:
      return (
        <S.Description>
          <S.DescriptionLine>
            1차 서류 심사와 인적성소양평가를 통해 최종 합격자를 선출합니다.
          </S.DescriptionLine>
          <S.PostScript>2022.11.09 발표</S.PostScript>
        </S.Description>
      );
    default:
      return (
        <S.Description>
          <S.DescriptionLine>지금은 지원 기간이 아닙니다.</S.DescriptionLine>
        </S.Description>
      );
  }
};

export default MainPageDescription;
