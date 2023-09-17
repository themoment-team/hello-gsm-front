import { ContentBox, ListHeader, MainpageHeader } from 'components';
import type { NextPage } from 'next';
import * as S from './style';
import useStore from 'Stores/StoreContainer';
import { css, Global } from '@emotion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ApplicantsType,
  ApplicantType,
  GetListType,
  SearchApplicationType,
} from 'Types/application';
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
      guardianCellphoneNumber: '01099999999',
      isDocumentReception: true,
      registrationNumber: 0,
      schoolName: '금호중앙중학교',
      screening: '국가보훈대상자',
      teacherCellphoneNumber: '01099999999',
      application_score: null,
    },
  },
];

const MainPage: NextPage<ApplicantsType> = ({ list, count }) => {
  const [applicationList, setApplicationList] =
    useState<ApplicantType[]>(ListDummyData);
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
          {filteredApplicationList?.map((content, index: number) => (
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
