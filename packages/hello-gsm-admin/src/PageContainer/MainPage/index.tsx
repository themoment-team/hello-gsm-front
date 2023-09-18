import {
  ContentBox,
  ListHeader,
  MainpageHeader,
  PaginationController,
  SideBar,
} from 'components';
import type { NextPage } from 'next';
import * as S from './style';
import useStore from 'Stores/StoreContainer';
import { css, Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import { SearchApplicationInfoType } from 'Types/application';
import application from 'Api/application';
import { useRouter } from 'next/router';

type SearchTagType = 'PHONE_NUMBER' | 'SCHOOL' | 'APPLICANT' | '';

const MainPage: NextPage = () => {
  const { showScoreModal } = useStore();
  const [tmpValue, setTmpValue] = useState<string>('');
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [searchTag, setSearchTag] = useState<SearchTagType>('');
  const [applicationData, setApplicationData] =
    useState<SearchApplicationInfoType>();
  const router = useRouter();
  const pageNumber = Number(router.query.pageNumber ?? 1);

  useEffect(() => {
    const debounce = setTimeout(() => {
      return setSearchKeyword(tmpValue);
    }, 300);
    return () => clearTimeout(debounce);
  }, [tmpValue]);

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

  const getApplicationList = async (pageNumber: number) => {
    try {
      const { data }: { data: SearchApplicationInfoType } =
        await application.getSearchApplication(
          pageNumber - 1,
          8,
          searchTag,
          searchKeyword,
        );
      setApplicationData(data);
      console.log(data);
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApplicationList(pageNumber);
  }, [pageNumber, searchKeyword, searchTag]);

  return (
    <S.MainPage>
      <SideBar />
      <S.MainPageContent>
        <ListHeader
          searchValue={tmpValue}
          setSearchValue={setTmpValue}
          setSearchTag={setSearchTag}
          searchTag={searchTag}
        />
        <MainpageHeader />
        <S.ContentList>
          {applicationData?.applications.map(data => {
            return <ContentBox content={data} key={data.applicationId} />;
          })}
        </S.ContentList>
        <PaginationController
          totalPages={applicationData?.info.totalPages ?? 0}
          pageNumber={pageNumber}
        />
      </S.MainPageContent>
    </S.MainPage>
  );
};

export default MainPage;
