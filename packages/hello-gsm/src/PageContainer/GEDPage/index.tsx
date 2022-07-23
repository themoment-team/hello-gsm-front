import application from 'Api/application';
import { Header } from 'components';
import GEDScoreResultModal from 'components/Modals/GEDScoreResultModal';
import type { NextPage } from 'next';
import { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import useStore from 'Stores/StoreContainer';
import { GEDCalculate } from 'Utils/Calculate';
import * as S from './style';

interface ScoreType {
  curriculumScoreSubtotal: number; // 전과목 득점
  nonCurriculumScoreSubtotal: number; // 전과목 만점
}

const GEDPage: NextPage = () => {
  const { register, handleSubmit, setValue, watch } = useForm<ScoreType>();

  const { showScoreResult, setShowScoreResult } = useStore();
  const [resultNumber, setResultNumber] = useState<number>(); //결과 화면 컴포넌트에 보일 점수
  const [isSubmission, setIsSubmission] = useState(false);

  const onValid = async ({
    curriculumScoreSubtotal,
    nonCurriculumScoreSubtotal,
  }: ScoreType) => {
    const rankPercentage = GEDCalculate(
      curriculumScoreSubtotal,
      nonCurriculumScoreSubtotal,
    );
    window.localStorage.setItem(
      'curriculumScoreSubtotal',
      curriculumScoreSubtotal.toString(),
    );
    window.localStorage.setItem(
      'nonCurriculumScoreSubtotal',
      nonCurriculumScoreSubtotal.toString(),
    );

    setResultNumber(rankPercentage);
    setShowScoreResult();
    try {
      await application.postGedSubmission({
        curriculumScoreSubtotal,
        nonCurriculumScoreSubtotal,
        rankPercentage,
      });
    } catch (err) {
      console.log(err);
    }
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
              <S.PerfectScoreSubject>전과목 만점 합계</S.PerfectScoreSubject>
            </S.Row>
            <S.Row>
              <S.ScoreInput
                {...register('curriculumScoreSubtotal', { required: true })}
              />
              <S.ScoreInput
                {...register('nonCurriculumScoreSubtotal', { required: true })}
              />
            </S.Row>
          </div>
          <S.Submit>저장</S.Submit>
        </S.CalculateSection>
      </S.GEDPage>
    </>
  );
};

export default GEDPage;
