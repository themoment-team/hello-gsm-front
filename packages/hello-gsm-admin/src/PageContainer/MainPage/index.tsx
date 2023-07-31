import { ContentBox, ListHeader, MainpageHeader, ScoreModal } from 'components';
import type { NextPage } from 'next';
import * as S from './style';
import useStore from 'Stores/StoreContainer';
import { css, Global } from '@emotion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ApplicantsType, ApplicantType, GetListType } from 'Types/application';
import application from 'Api/application';
import auth from 'Api/auth';
import { isStartFirstResult } from 'shared/acceptable';

const ListDummyData: ApplicantType[] = [
  {
    cellphoneNumber: '01038157596',
    name: '신희성',
    application: {
      applicationIdx: 1,
      finalResultScreening: '합격',
      firstResultScreening: '합격',
      guardianCellphoneNumber: '01000000000',
      isDocumentReception: true,
      registrationNumber: 0,
      schoolName: '금호중앙중학교',
      screening: '일반전형',
      teacherCellphoneNumber: '01000000000',
      application_score: null,
    },
  },
  {
    cellphoneNumber: '01000000000',
    name: '방가온',
    application: {
      applicationIdx: 2,
      finalResultScreening: null,
      firstResultScreening: null,
      guardianCellphoneNumber: '01000000000',
      isDocumentReception: false,
      registrationNumber: 0,
      schoolName: '수완중학교',
      screening: '사회통합전형',
      teacherCellphoneNumber: '01000000000',
      application_score: {
        personalityEvaluationScore: '99.99',
      },
    },
  },
  {
    cellphoneNumber: '01000000000',
    name: '박미리',
    application: {
      applicationIdx: 3,
      finalResultScreening: '합격',
      firstResultScreening: '합격',
      guardianCellphoneNumber: '01000000000',
      isDocumentReception: true,
      registrationNumber: 0,
      schoolName: '효광중학교',
      screening: '일반전형',
      teacherCellphoneNumber: '01000000000',
      application_score: {
        personalityEvaluationScore: '12.09',
      },
    },
  },
];

const MainPage: NextPage<ApplicantsType> = ({ list, count }) => {
  const [applicationList, setApplicationList] =
    useState<ApplicantType[]>(ListDummyData);
  const [isPageEnd, setIsPageEnd] = useState<boolean>(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const { showScoreModal } = useStore();

  const handleObserver = useCallback(
    async (
      [entry]: IntersectionObserverEntry[],
      observer: IntersectionObserver,
    ) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        observer.observe(entry.target);
      }
    },
    [],
  );

  useEffect(() => {
    if (!loadMoreRef.current) return;

    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    loadMoreRef.current && observer.observe(loadMoreRef.current);

    return () => observer && observer.disconnect();
  }, [handleObserver, isPageEnd]);

  return (
    <S.MainPage>
      {showScoreModal && <ScoreModal />}
      <Global
        styles={css`
          body {
            overflow: ${showScoreModal ? 'hidden' : 'visible'};
          }
        `}
      />
      <S.MainPageContent>
        <ListHeader />
        <MainpageHeader />
        <S.ContentList>
          {applicationList?.map((content, index: number) => (
            <ContentBox content={content} key={index} />
          ))}
          {!isPageEnd && <S.Target ref={loadMoreRef} />}
        </S.ContentList>
      </S.MainPageContent>
    </S.MainPage>
  );
};

export default MainPage;
