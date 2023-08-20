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

const List: ApplicantType[] = [
  {
    cellphoneNumber: '01012345678',
    name: '이승제',
    application: {
      applicationIdx: 0,
      finalResultScreening: null,
      firstResultScreening: null,
      guardianCellphoneNumber: '01012345678',
      isDocumentReception: false,
      registrationNumber: 0,
      schoolName: '수완중학교',
      screening: '일반전형',
      teacherCellphoneNumber: '01012345678',
      application_score: {
        personalityEvaluationScore: 'string',
      },
    },
  },
  {
    cellphoneNumber: '01098765432',
    name: '전예빈',
    application: {
      applicationIdx: 1,
      finalResultScreening: null,
      firstResultScreening: null,
      guardianCellphoneNumber: '01098765432',
      isDocumentReception: false,
      registrationNumber: 0,
      schoolName: '왕의중학교',
      screening: '사회통합전형',
      teacherCellphoneNumber: '01098765432',
      application_score: null,
    },
  },
  {
    cellphoneNumber: '01012345678',
    name: '이정우',
    application: {
      applicationIdx: 2,
      finalResultScreening: null,
      firstResultScreening: null,
      guardianCellphoneNumber: '01012345678',
      isDocumentReception: false,
      registrationNumber: 0,
      schoolName: '금호중학교',
      screening: '특별전형',
      teacherCellphoneNumber: '01012345678',
      application_score: {
        personalityEvaluationScore: 'string',
      },
    },
  },
  {
    cellphoneNumber: '01098765432',
    name: '최장우',
    application: {
      applicationIdx: 3,
      finalResultScreening: null,
      firstResultScreening: null,
      guardianCellphoneNumber: '01098765432',
      isDocumentReception: false,
      registrationNumber: 0,
      schoolName: '아무중학교',
      screening: '일반전형',
      teacherCellphoneNumber: '01098765432',
      application_score: null,
    },
  },
  {
    cellphoneNumber: '01012345678',
    name: '하제우',
    application: {
      applicationIdx: 4,
      finalResultScreening: null,
      firstResultScreening: null,
      guardianCellphoneNumber: '01012345678',
      isDocumentReception: false,
      registrationNumber: 0,
      schoolName: '게로중학교',
      screening: '사회통합전형',
      teacherCellphoneNumber: '01012345678',
      application_score: {
        personalityEvaluationScore: 'string',
      },
    },
  },
  {
    cellphoneNumber: '01098765432',
    name: '박준호',
    application: {
      applicationIdx: 5,
      finalResultScreening: null,
      firstResultScreening: null,
      guardianCellphoneNumber: '01098765432',
      isDocumentReception: false,
      registrationNumber: 0,
      schoolName: '아나콘다중학교',
      screening: '특별전형',
      teacherCellphoneNumber: '01098765432',
      application_score: null,
    },
  },
  {
    cellphoneNumber: '01012345678',
    name: '김하온',
    application: {
      applicationIdx: 6,
      finalResultScreening: null,
      firstResultScreening: null,
      guardianCellphoneNumber: '01012345678',
      isDocumentReception: false,
      registrationNumber: 0,
      schoolName: '하온중학교',
      screening: '일반전형',
      teacherCellphoneNumber: '01012345678',
      application_score: {
        personalityEvaluationScore: 'string',
      },
    },
  },
];

const MainPage: NextPage<ApplicantsType> = ({ list, count }) => {
  const [applicationList, setApplicationList] = useState<ApplicantType[]>(list);
  const [isPageEnd, setIsPageEnd] = useState<boolean>(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const { showScoreModal } = useStore();

  const [searchValue, setSearchValue] = useState<string>('');
  const [tmpValue, setTmpValue] = useState<string>('');

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
    setApplicationList(List);
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

  useEffect(() => {
    const debounce = setTimeout(() => {
      console.log('하하');
      return setSearchValue(tmpValue);
    }, 300);
    return () => clearTimeout(debounce);
  }, [tmpValue]);

  const filteredApplicationList = applicationList?.filter(applicant => {
    const values = Object.values(applicant).flatMap(value => {
      if (typeof value === 'object' && value !== null) {
        return Object.values(value);
      }
      return value;
    });

    return values.some(value => {
      if (typeof value === 'string' && value.includes(searchValue)) {
        return true;
      }
    });
  });

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
        <ListHeader searchValue={tmpValue} setSearchValue={setTmpValue} />
        <MainpageHeader />
        <S.ContentList>
          {filteredApplicationList?.map((content, index: number) => (
            <ContentBox content={content} key={index} />
          ))}
          {!isPageEnd && <S.Target ref={loadMoreRef} />}
        </S.ContentList>
      </S.MainPageContent>
    </S.MainPage>
  );
};

export default MainPage;
