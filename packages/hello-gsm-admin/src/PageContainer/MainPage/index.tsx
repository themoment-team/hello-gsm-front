import { ContentBox, ListHeader, MainpageHeader, Modal } from 'components';
import type { NextPage } from 'next';
import * as S from './style';
import useStore from 'Stores/StoreContainer';
import { css, Global } from '@emotion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ApplicantsType,
  ApplicantType,
  GetListType,
  ApplicationListType,
  SearchApplicationType,
} from 'Types/application';
import application from 'Api/application';
import auth from 'Api/auth';
import { isStartFirstResult } from 'shared/acceptable';

const ListDummyData: ApplicationListType[] = [
  {
    applicationId: 1211,
    isFinalSubmitted: false,
    isPrintsArrived: false,
    applicantName: '김이박',
    screening: 'GENERAL',
    schoolName: '금호중학교',
    applicantPhoneNumber: '01012321232',
    guardianPhoneNumber: '01012321232',
    teacherPhoneNumber: '01012321232',
    firstEvaluation: 'PASS',
    secondEvaluation: 'PASS',
    secondScore: 111,
  },
  {
    applicationId: 1212,
    isFinalSubmitted: false,
    isPrintsArrived: false,
    applicantName: '이승제',
    screening: 'GENERAL',
    schoolName: '금호중학교',
    applicantPhoneNumber: '01012321232',
    guardianPhoneNumber: '01012321232',
    teacherPhoneNumber: '01012321232',
    firstEvaluation: 'PASS',
    secondEvaluation: 'PASS',
    secondScore: 111,
  },
  {
    applicationId: 1213,
    isFinalSubmitted: false,
    isPrintsArrived: false,
    applicantName: '이정우',
    screening: 'GENERAL',
    schoolName: '금호중학교',
    applicantPhoneNumber: '01012321232',
    guardianPhoneNumber: '01012321232',
    teacherPhoneNumber: '01012321232',
    firstEvaluation: 'PASS',
    secondEvaluation: 'PASS',
    secondScore: 111,
  },
];

const MainPage: NextPage<ApplicantsType> = ({ list, count }) => {
  const [applicationList, setApplicationList] =
    useState<ApplicationListType[]>(ListDummyData);
  const { showScoreModal } = useStore();

  const [searchValue, setSearchValue] = useState<string>('');
  const [tmpValue, setTmpValue] = useState<string>('');

  useEffect(() => {
    const debounce = setTimeout(() => {
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

  const getApplicationList = async () => {
    try {
      const { data }: SearchApplicationType =
        await application.getSearchApplication(0, 8);
      console.log(data);
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApplicationList();
  }, []);

  return (
    <S.MainPage>
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
          {applicationList?.map((content, index: number) => (
            <>
              <ContentBox content={content} key={index} />
            </>
          ))}
        </S.ContentList>
      </S.MainPageContent>
    </S.MainPage>
  );
};

export default MainPage;
