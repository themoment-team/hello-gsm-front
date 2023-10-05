import { GEDScoreResultModal } from 'components';
import type { NextPage } from 'next';
import { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useStore from 'Stores/StoreContainer';
import { GEDCalculate, Rounds } from 'Utils/Calculate';
import * as S from 'PageContainer/GEDCalculatorPage/style';
import { usePreventBackAndClose } from 'hooks/usePreventBackAndClose';

interface ScoreType {
  curriculumScoreSubtotal: number; // 전과목 득점
  nonCurriculumScoreSubtotal: number; // 전과목 만점
}

const TestGEDCalculatorPage: NextPage = () => {
  const { register, handleSubmit } = useForm<ScoreType>();

  const { showScoreResult, setShowScoreResult } = useStore();
  const [resultNumber, setResultNumber] = useState<number[]>(); //결과 화면 컴포넌트에 보일 점수
  // 이전에 제출한 경험 여부 판단

  const onValid = async ({
    curriculumScoreSubtotal,
    nonCurriculumScoreSubtotal,
  }: ScoreType) => {
    if (curriculumScoreSubtotal > nonCurriculumScoreSubtotal) {
      const rankPercentage = GEDCalculate(
        curriculumScoreSubtotal,
        nonCurriculumScoreSubtotal,
      );
      const scoreTotal =
        rankPercentage &&
        Rounds((300 - (300 * rankPercentage) / 100) * 0.87, 3);

      setResultNumber([rankPercentage, scoreTotal]);
      setShowScoreResult();
    }
  };

  const inValid = (Errors: FieldErrors) => {
    console.error(Errors);
    toast.error('문제가 발생하였습니다. 다시 시도해주세요.');
  };

  usePreventBackAndClose();

  return (
    <>
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
                {...register('curriculumScoreSubtotal', {
                  valueAsNumber: true,
                  required: true,
                  validate: {
                    nagativeNumber: value => !(value < 0),
                  },
                })}
                type="number"
              />
              <S.ScoreInput
                {...register('nonCurriculumScoreSubtotal', {
                  valueAsNumber: true,
                  required: true,
                  validate: {
                    nagativeNumber: value => !(value < 0),
                  },
                })}
                type="number"
              />
            </S.Row>
          </div>
          <S.Submit>저장</S.Submit>
        </S.CalculateSection>
      </S.GEDPage>
    </>
  );
};

export default TestGEDCalculatorPage;
