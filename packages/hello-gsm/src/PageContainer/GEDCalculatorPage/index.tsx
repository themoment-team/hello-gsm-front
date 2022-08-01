import application from 'Api/application';
import auth from 'Api/auth';
import { Header, GEDScoreResultModal } from 'components';
import useGEDLocalStorage from 'hooks/useGEDLocalstorage';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useStore from 'Stores/StoreContainer';
import { GEDScoreType } from 'type/score';
import { GEDCalculate } from 'Utils/Calculate';
import * as S from './style';

interface ScoreType {
  curriculumScoreSubtotal: number; // 전과목 득점
  nonCurriculumScoreSubtotal: number; // 전과목 만점
}

const GEDCalculatorPage: NextPage = () => {
  const curriculumScoreSubtotal = useGEDLocalStorage('curriculumScoreSubtotal');
  const nonCurriculumScoreSubtotal = useGEDLocalStorage(
    'nonCurriculumScoreSubtotal',
  );

  const { register, handleSubmit, setValue } = useForm<ScoreType>();

  const { showScoreResult, setShowScoreResult } = useStore();
  const [resultNumber, setResultNumber] = useState<number>(); //결과 화면 컴포넌트에 보일 점수
  // 이전에 제출한 경험 여부 판단
  const [isSubmission, setIsSubmission] = useState<boolean>();

  useEffect(() => {
    curriculumScoreSubtotal &&
      setValue('curriculumScoreSubtotal', curriculumScoreSubtotal);
    nonCurriculumScoreSubtotal &&
      setValue('nonCurriculumScoreSubtotal', nonCurriculumScoreSubtotal);

    setIsSubmission(curriculumScoreSubtotal ? true : false); // 이전 값이 있다면 true
  }, [curriculumScoreSubtotal, nonCurriculumScoreSubtotal]);

  const TrySubmission = async ({
    curriculumScoreSubtotal,
    nonCurriculumScoreSubtotal,
    rankPercentage,
  }: GEDScoreType) => {
    isSubmission
      ? await application.patchGedSubmission({
          curriculumScoreSubtotal,
          nonCurriculumScoreSubtotal,
          rankPercentage,
        })
      : await application.postGedSubmission({
          curriculumScoreSubtotal,
          nonCurriculumScoreSubtotal,
          rankPercentage,
        });
  };

  const onValid = async ({
    curriculumScoreSubtotal,
    nonCurriculumScoreSubtotal,
  }: ScoreType) => {
    const rankPercentage = GEDCalculate(
      curriculumScoreSubtotal,
      nonCurriculumScoreSubtotal,
    );

    try {
      await TrySubmission({
        curriculumScoreSubtotal,
        nonCurriculumScoreSubtotal,
        rankPercentage,
      });
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
      setIsSubmission(true);
      toast.error('문제가 발생하였습니다. 다시 시도해주세요.');
    } catch (err: any) {
      // accessToken 없을 시에 accessToken 발급 후 TrySubmission 요청
      if (err.response.status === 401) {
        try {
          // accessToken 발급
          await auth.refresh();
          await onValid({
            curriculumScoreSubtotal,
            nonCurriculumScoreSubtotal,
          });
          await TrySubmission({
            curriculumScoreSubtotal,
            nonCurriculumScoreSubtotal,
            rankPercentage,
          });
        } catch (err) {
          console.log(err);
          toast.error('문제가 발생하였습니다. 다시 시도해주세요.');
        }
      } else {
        console.log(err);
        toast.error('문제가 발생하였습니다. 다시 시도해주세요.');
      }
    }
  };

  const inValid = (Errors: FieldErrors) => {
    console.log(Errors);
    toast.error('문제가 발생하였습니다. 다시 시도해주세요.');
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
