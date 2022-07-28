import application from 'Api/application';
import auth from 'Api/auth';
import { Header } from 'components';
import GEDScoreResultModal from 'components/Modals/GEDScoreResultModal';
import useGEDLocalStorage from 'hooks/useGEDLocalstorage';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import useStore from 'Stores/StoreContainer';
import { GEDScoreType } from 'type/score';
import { GEDCalculate } from 'Utils/Calculate';
import * as S from './style';

interface ScoreType {
  curriculumScoreSubtotal: number; // 전과목 득점
  nonCurriculumScoreSubtotal: number; // 전과목 만점
}

const GEDPage: NextPage = () => {
  const curriculumScoreSubtotal = useGEDLocalStorage('curriculumScoreSubtotal');
  const nonCurriculumScoreSubtotal = useGEDLocalStorage(
    'nonCurriculumScoreSubtotal',
  );

  useEffect(() => {
    curriculumScoreSubtotal &&
      setValue('curriculumScoreSubtotal', curriculumScoreSubtotal);
    nonCurriculumScoreSubtotal &&
      setValue('nonCurriculumScoreSubtotal', nonCurriculumScoreSubtotal);

    setIsSubmission(window.localStorage.getItem('isSubmission'));
  }, [curriculumScoreSubtotal, nonCurriculumScoreSubtotal]);

  const { register, handleSubmit, setValue } = useForm<ScoreType>();

  const { showScoreResult, setShowScoreResult } = useStore();
  const [resultNumber, setResultNumber] = useState<number>(); //결과 화면 컴포넌트에 보일 점수
  const [isSubmission, setIsSubmission] = useState<string | null>(); // 이전에 제출한 경험 여부 판단

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
      window.localStorage.setItem('isSubmission', 'true');

      setResultNumber(rankPercentage);
      setShowScoreResult();
    } catch (err: any) {
      // accessToken 없을 시에 accessToken 발급 후 TrySubmission 요청
      if (err.response.status === 401) {
        try {
          // accessToken 발급
          await auth.refresh();
          await TrySubmission({
            curriculumScoreSubtotal,
            nonCurriculumScoreSubtotal,
            rankPercentage,
          });
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log(err);
      }
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
