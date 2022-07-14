import { Header } from 'components';
import GEDScoreResultModal from 'components/Modals/GEDScoreResultModal';
import type { NextPage } from 'next';
import { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import useStore from 'Stores/StoreContainer';
import { GEDCalculate } from 'Utils/Calculate';
import * as S from './style';

interface ScoreType {
  score: number;
  perfectScore: number;
}

const GEDPage: NextPage = () => {
  const { register, handleSubmit } = useForm<ScoreType>();
  const { showScoreResult, setShowScoreResult } = useStore();
  const [resultNumber, setResultNumber] = useState<number>(); //결과 화면 컴포넌트에 보일 점수

  const onValid = (validForm: ScoreType) => {
    const scoreTotal = GEDCalculate(validForm.score, validForm.perfectScore);
    setResultNumber(scoreTotal);
    setShowScoreResult();
  };

  const inValid = (Errors: FieldErrors) => {
    console.log(Errors);
  };
  return (
    <>
      <Header />
      {showScoreResult && <GEDScoreResultModal result={resultNumber} />}
      <S.GEDPage>
        <S.Title>성적입력(검정고시)</S.Title>
        <S.CalculateSection onSubmit={handleSubmit(onValid, inValid)}>
          <div>
            <S.Row>
              <S.ScoreSubject>전과목 득점 합계</S.ScoreSubject>
              <S.PerfectScoreSubject>전과목 득점 합계</S.PerfectScoreSubject>
            </S.Row>
            <S.Row>
              <S.ScoreInput {...register('score', { required: true })} />
              <S.ScoreInput {...register('perfectScore', { required: true })} />
            </S.Row>
          </div>
          <S.Submit>저장</S.Submit>
        </S.CalculateSection>
      </S.GEDPage>
    </>
  );
};

export default GEDPage;
