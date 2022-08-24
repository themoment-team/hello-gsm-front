import Link from 'next/link';
import useStore from 'Stores/StoreContainer';
import * as S from './style';

interface ResultType {
  result: number[];
}

const GEDScoreResultModal: React.FC<ResultType> = ({ result }) => {
  const { setShowScoreResult } = useStore();
  console.log(result);

  return (
    <S.Background>
      <S.ResultSection>
        <S.Wrapper>
          <S.ResultTotal>석차백분율</S.ResultTotal>
          <S.ResultTotal>환산총점</S.ResultTotal>
        </S.Wrapper>
        <S.Wrapper>
          <S.Score>{result[0]}</S.Score>
          <S.Score>{result[1]}</S.Score>
        </S.Wrapper>

        <hr />
        <S.MainDesc>원서를 저장했습니다.</S.MainDesc>
        <S.SubDesc>
          ( 원서나 성적은 내정보 페이지에서 최종 제출 전에 수정할 수 있습니다. )
        </S.SubDesc>
        <S.ConfirmSection>
          <S.Confirm onClick={() => setShowScoreResult()}>수정</S.Confirm>
          <Link href="/mypage" passHref>
            <S.Confirm>확인</S.Confirm>
          </Link>
        </S.ConfirmSection>
      </S.ResultSection>
    </S.Background>
  );
};

export default GEDScoreResultModal;
