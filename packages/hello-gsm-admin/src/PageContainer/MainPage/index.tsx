import {
  ContentBox,
  ListHeader,
  MainpageHeader,
  PaginationController,
} from 'components';
import type { NextPage } from 'next';
import * as S from './style';
import useStore from 'Stores/StoreContainer';
import { css, Global } from '@emotion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ApplicantsType,
  ApplicantType,
  GetListType,
  SearchApplicationInfoType,
} from 'Types/application';
import application from 'Api/application';
import auth from 'Api/auth';
import { isStartFirstResult } from 'shared/acceptable';
import { useRouter } from 'next/router';

const MainPage: NextPage<ApplicantsType> = ({ list, count }) => {
  // const [applicationList, setApplicationList] = useState<ApplicantType[]>(list);
  const { showScoreModal } = useStore();
  const [searchValue, setSearchValue] = useState<string>('');
  const [tmpValue, setTmpValue] = useState<string>('');
  const [applicationData, setApplicationData] =
    useState<SearchApplicationInfoType>();
  const router = useRouter();
  const pageNumber = Number(router.query.pageNumber ?? 1);
  // useEffect(() => {
  //   const debounce = setTimeout(() => {
  //     return setSearchValue(tmpValue);
  //   }, 300);
  //   return () => clearTimeout(debounce);
  // }, [tmpValue]);

  // const filteredApplicationList = applicationList?.filter(applicant => {
  //   const values = Object.values(applicant).flatMap(value => {
  //     if (typeof value === 'object' && value !== null) {
  //       return Object.values(value);
  //     }
  //     return value;
  //   });

  //   return values.some(value => {
  //     if (typeof value === 'string' && value.includes(searchValue)) {
  //       return true;
  //     }
  //   });
  // });

  const getApplicationList = async () => {
    try {
      const { data }: { data: SearchApplicationInfoType } =
        await application.getSearchApplication(pageNumber, 8);
      setApplicationData(data);
      console.log(data);
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApplicationList();
  }, [pageNumber]);

  return (
    <>
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
            {/* {filteredApplicationList?.map((content, index: number) => (
              <>
                <ContentBox content={content} key={index} />
              </>
            ))} */}
            <S.Test />
            <S.Test />
            <S.Test />
            <S.Test />
            <S.Test />
            <S.Test />
            <S.Test />
            <S.Test />
          </S.ContentList>
          <PaginationController
            totalPages={applicationData?.info.totalPages ?? 10}
            pageNumber={pageNumber}
          />
        </S.MainPageContent>
      </S.MainPage>
    </>
  );
};

export default MainPage;
