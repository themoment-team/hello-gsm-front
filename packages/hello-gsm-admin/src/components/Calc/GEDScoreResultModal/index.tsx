import Link from 'next/link';
import { useRouter } from 'next/router';
import useApplyStore from 'Stores/ApplyStoreContainer';
import * as S from './style';

interface ResultType {
  result?: number[];
  userId: string;
}

const GEDScoreResultModal: React.FC<ResultType> = ({ result, userId }) => {
  const { setShowScoreResult } = useApplyStore();
  const { push } = useRouter();

  return (
    <S.Background>
      <S.ResultSection>
        <S.Wrapper>
          <S.ResultTotal>석차백분율</S.ResultTotal>
          <S.ResultTotal>환산총점</S.ResultTotal>
        </S.Wrapper>
        <S.Wrapper>
          <S.Score>{result && result[0]}</S.Score>
          <S.Score>{result && result[1]}</S.Score>
        </S.Wrapper>

        <hr />
        <S.MainDesc>원서를 저장했습니다.</S.MainDesc>
        <S.ConfirmSection>
          <S.Confirm onClick={setShowScoreResult}>수정</S.Confirm>
          <Link href="/mypage" passHref>
            <S.Confirm
              onClick={() => {
                setShowScoreResult();
                push(`/application/${userId}`);
              }}
            >
              확인
            </S.Confirm>
          </Link>
        </S.ConfirmSection>
      </S.ResultSection>
    </S.Background>
  );
};

export default GEDScoreResultModal;
