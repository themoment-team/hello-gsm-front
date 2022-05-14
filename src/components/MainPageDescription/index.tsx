import * as S from './style';

interface indexType {
  index: number;
}

const MainPageDescription: React.FC<indexType> = ({ index }) => {
  const today = new Date();
  console.log(index);

  switch (index) {
    case 1:
      return (
        <S.Description>
          <S.DescriptionLine>
            2차 면접에서는 인성과 문제해결 능력을
          </S.DescriptionLine>
          <S.DescriptionLine>중심으로 시험을 치룹니다.</S.DescriptionLine>
          <S.PostScript>2022.11.09 면접 진행</S.PostScript>
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
          <S.DescriptionLine>중심으로 인적성검사 치룹니다.</S.DescriptionLine>
          <S.PostScript>2022.10.28 인적성 검사 진행</S.PostScript>
        </S.Description>
      );
    case 5:
      return <S.Description></S.Description>;
  }
};

export default MainPageDescription;
