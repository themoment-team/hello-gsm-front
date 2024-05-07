import type { NextPage } from 'next';

import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import { FieldErrors, useForm } from 'react-hook-form';

import { application } from 'apis';

import { GEDScoreResultModal } from 'components';

import { GEDCalculate, Rounds } from 'utils/Calculate';

import { GEDLocalScoreType, GEDScoreType } from 'types/score';

import useStore from 'stores/StoreContainer';

import useScrollToTop from 'hooks/useScrollToTop';

import * as S from './style';

interface ScoreType {
  curriculumScoreSubtotal: number; // 전과목 득점
  nonCurriculumScoreSubtotal: number; // 전과목 만점
}

interface GEDCalculatorPageProps {
  score: string | undefined;
  isSubmissionProp: boolean;
}

const GEDCalculatorPage: NextPage<GEDCalculatorPageProps> = ({
  score,
  isSubmissionProp,
}) => {
  useScrollToTop();
  const { register, handleSubmit, setValue } = useForm<ScoreType>();

  const { showScoreResult, setShowScoreResult, applyData } = useStore();
  const [result, setResult] = useState<number[]>(); //결과 화면 컴포넌트에 보일 점수
  // 이전에 제출한 경험 여부 판단
  const [isSubmission, setIsSubmission] = useState<boolean>(isSubmissionProp);

  const TrySubmission = async (data: GEDScoreType) => {
    const middleSchoolGrade = JSON.stringify(data);
    if (applyData !== null)
      isSubmission
        ? await application.putApplication({
            ...applyData,
            middleSchoolGrade,
          })
        : await application.postApplication({
            ...applyData,
            middleSchoolGrade,
          });
    else if (applyData === null)
      toast.error(
        '인적사항 정보가 저장되지 않았어요. 처음부터 다시 시도해주세요.',
      );
  };

  const onValid = async ({
    curriculumScoreSubtotal,
    nonCurriculumScoreSubtotal,
  }: ScoreType) => {
    if (nonCurriculumScoreSubtotal >= curriculumScoreSubtotal) {
      const rankPercentage = GEDCalculate(
        curriculumScoreSubtotal,
        nonCurriculumScoreSubtotal,
      );
      const scoreTotal = Rounds((300 - (300 * rankPercentage) / 100) * 0.87, 3);
      try {
        await TrySubmission({
          curriculumScoreSubtotal,
          nonCurriculumScoreSubtotal,
          rankPercentage,
          scoreTotal,
        });

        setResult([rankPercentage, scoreTotal]);
        setShowScoreResult();
        setIsSubmission(true);
        toast.success('성적입력이 완료되었어요.');
      } catch (err: any) {
        console.error(err);
        toast.error('문제가 발생했어요. 다시 시도해주세요.');
      }
    } else {
      toast.error('성적은 만점보다 높을 수 없어요.');
    }
  };

  const inValid = (Errors: FieldErrors) => {
    console.error(Errors);
    toast.error('선택되지 않은 값이 있어요.');
  };

  useEffect(() => {
    const scoreData: GEDLocalScoreType | null = score
      ? JSON.parse(score)
      : null;
    if (scoreData) {
      setValue('curriculumScoreSubtotal', scoreData.curriculumScoreSubtotal);
      setValue(
        'nonCurriculumScoreSubtotal',
        scoreData.nonCurriculumScoreSubtotal,
      );
    }
  }, []);

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

export default GEDCalculatorPage;
