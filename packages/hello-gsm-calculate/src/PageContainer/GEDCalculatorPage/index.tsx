import { GEDScoreResultModal } from 'components';
import type { NextPage } from 'next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useStore from 'stores/StoreContainer';
import { GEDCalculate, Rounds } from 'utils/';
import * as S from './style';

interface ScoreType {
  curriculumScoreSubtotal: number; // 전과목 득점
  nonCurriculumScoreSubtotal: number; // 전과목 만점
}

const GEDCalculatorPage: NextPage = () => {
  const { register, handleSubmit } = useForm<ScoreType>();

  const { showScoreResult, setShowScoreResult } = useStore();
  const [result, setResult] = useState<number[]>(); //결과 화면 컴포넌트에 보일 점수

  const onValid = async ({
    curriculumScoreSubtotal,
    nonCurriculumScoreSubtotal,
  }: ScoreType) => {
    const rankPercentage = GEDCalculate(
      curriculumScoreSubtotal,
      nonCurriculumScoreSubtotal,
    );
    const scoreTotal = Rounds((300 - (300 * rankPercentage) / 100) * 0.87, 3);

    setResult([rankPercentage, scoreTotal]);
    setShowScoreResult();
  };

  const inValid = () => {
    toast.error('문제가 발생하였습니다. 다시 시도해주세요.');
  };

  return (
    <>
      {showScoreResult && <GEDScoreResultModal result={result} />}
      <S.GEDPage>
        <S.Title>성적입력(검정고시)</S.Title>
        <S.CalculateSection onSubmit={handleSubmit(onValid, inValid)}>
          <div>
            <S.Row>
              <S.ScoreSubject>전과목 득점 합계</S.ScoreSubject>
              <S.PerfectScoreSubject>전과목 만점 합계</S.PerfectScoreSubject>
            </S.Row>
            <S.Row>
              <S.ScoreInput
                type="number"
                {...register('curriculumScoreSubtotal', {
                  valueAsNumber: true,
                  required: true,
                })}
              />
              <S.ScoreInput
                type="number"
                {...register('nonCurriculumScoreSubtotal', {
                  valueAsNumber: true,
                  required: true,
                })}
              />
            </S.Row>
          </div>
          <S.Submit>저장</S.Submit>
        </S.CalculateSection>
      </S.GEDPage>
    </>
  );
};

export default GEDCalculatorPage;
