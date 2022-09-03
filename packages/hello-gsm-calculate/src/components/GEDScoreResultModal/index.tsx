import Link from 'next/link';
import useStore from 'stores/StoreContainer';
import * as S from './style';

interface ResultType {
  result?: number;
}

const GEDScoreResultModal: React.FC<ResultType> = ({ result }) => {
  const { setShowScoreResult } = useStore();

  return (
    <S.Background>
      <S.ResultSection>
        <S.SubjectSection>
          <S.ResultTotal>석차백분율</S.ResultTotal>
        </S.SubjectSection>
        <S.SubjectSection>
          <S.Score>{result}</S.Score>
        </S.SubjectSection>
        <hr />
        <S.MainDesc>원서를 저장했습니다.</S.MainDesc>
        <S.SubDesc>
          ( 원서나 성적은 내정보 페이지에서 최종 제출 전에 수정할 수 있습니다. )
        </S.SubDesc>
        <S.ConfirmSection>
          <S.Confirm onClick={() => setShowScoreResult()}>수정</S.Confirm>
          <Link href="/" passHref>
            <S.Confirm>확인</S.Confirm>
          </Link>
        </S.ConfirmSection>
      </S.ResultSection>
    </S.Background>
  );
};

export default GEDScoreResultModal;
