import { useRouter } from 'next/router';
import useStore from 'Stores/StoreContainer';
import * as S from './style';

interface ResultType {
  result: number[];
}

const ScoreResultModal: React.FC<ResultType> = ({ result }) => {
  const { setShowScoreResult } = useStore();
  const router = useRouter();

  return (
    <S.Background>
      <S.ResultSection>
        <S.SubjectSection>
          <S.ResultSubject>교과성적</S.ResultSubject>
          <S.ResultSubject>예체능</S.ResultSubject>
          <S.ResultSubject>비교과 성적</S.ResultSubject>
          <S.ResultTotal>총합</S.ResultTotal>
        </S.SubjectSection>
        <S.SubjectSection>
          {result?.map((res, i) => (
            <S.Score key={i}>{res}</S.Score>
          ))}
        </S.SubjectSection>
        <hr />
        <S.MainDesc>원서를 저장했습니다.</S.MainDesc>
        <S.SubDesc>
          ( 원서나 성적은 내정보 페이지에서 최종 제출 전에 수정할 수 있습니다. )
        </S.SubDesc>
        <S.ConfirmSection>
          <S.Confirm onClick={() => router.push('/')}>홈으로</S.Confirm>
          <S.Confirm onClick={() => setShowScoreResult()}>확인</S.Confirm>
        </S.ConfirmSection>
      </S.ResultSection>
    </S.Background>
  );
};

export default ScoreResultModal;
