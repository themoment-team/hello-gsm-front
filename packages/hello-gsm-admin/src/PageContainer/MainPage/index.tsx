import {
  ContentBox,
  ListHeader,
  MainpageHeader,
  PaginationController,
  SideBar,
} from 'components';
import type { NextPage } from 'next';
import * as S from './style';
import { useEffect, useState } from 'react';
import { SearchApplicationInfoType } from 'type/application';
import application from 'Api/application';
import { useRouter } from 'next/router';
import { SearchTagType } from 'type/searchTag';

const MainPage: NextPage = () => {
  const [tmpValue, setTmpValue] = useState<string>('');
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [searchTag, setSearchTag] = useState<SearchTagType>('APPLICANT');
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

  const getList = () => getApplicationList(pageNumber);

  useEffect(() => {
    getApplicationList(pageNumber);
  }, [pageNumber, searchKeyword, searchTag]);

  useEffect(() => {
    if (searchKeyword && searchTag) {
      router.push(`${router.pathname}?pageNumber=${1}`);
    }
  }, [searchKeyword, searchTag]);

  return (
    <S.MainPage>
      <SideBar />
      <S.MainPageContent>
        <ListHeader
          searchValue={tmpValue}
          setSearchValue={setTmpValue}
          setSearchTag={setSearchTag}
          searchTag={searchTag}
          submitCount={applicationData?.info.totalElements ?? 0}
        />
        <MainpageHeader />
        <S.ContentList>
          {applicationData?.applications.map(data => {
            return (
              <ContentBox
                content={data}
                key={data.applicationId}
                getApplicationList={getList}
              />
            );
          })}
          <PaginationController totalPages={20} pageNumber={pageNumber} />
        </S.ContentList>
        {/* {applicationData?.info.totalPages ? (
          <PaginationController
            totalPages={applicationData.info.totalPages}
            pageNumber={pageNumber}
          />
        ) : (
          ''
        )} */}
      </S.MainPageContent>
    </S.MainPage>
  );
};

export default MainPage;
