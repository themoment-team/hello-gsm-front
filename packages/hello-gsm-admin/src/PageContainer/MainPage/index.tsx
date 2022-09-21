import {
  ContentBox,
  Logout,
  MainpageHeader,
  PassModal,
  ScoreModal,
} from 'components';
import type { NextPage } from 'next';
import * as S from './style';
import useStore from 'Stores/StoreContainer';
import { css, Global } from '@emotion/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ApplicantsType, ApplicantType } from 'Types/application';
import application from 'Api/application';
import auth from 'Api/auth';

const MainPage: NextPage<ApplicantsType> = ({ data }) => {
  let page = 2;
  const [applicationList, setApplicationList] = useState<ApplicantType[]>(data);
  const [isPageEnd, setIsPageEnd] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const { showPassModal, showScoreModal } = useStore();
  const loadMoreRef = useRef<HTMLDivElement>(null);

  let getApplicationList: ApplicantType[] = [];

  const handleObserver = useCallback(
    async (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver,
    ) => {
      // const [target] = entries;
      if (entries[0].isIntersecting) {
        observer.unobserve(entries[0].target);
        await getList();
        // getApplicationList &&
        //   setApplicationList(list => [...list, ...getApplicationList]);
        // getApplicationList === []
        //   ? setIsPageEnd(getApplicationList === [] ? true : false)
        //   : setIsPageEnd(false);
        observer.observe(entries[0].target);
      }
    },
    [],
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    let observer: IntersectionObserver;

    if (loadMoreRef) {
      observer = new IntersectionObserver(handleObserver, option);

      loadMoreRef.current && observer.observe(loadMoreRef.current);
    }

    return () => observer && observer.disconnect();
  }, [handleObserver]);

  const getList = async () => {
    try {
      const { data }: ApplicantsType = await application.getList(page);
      setApplicationList(list => [...list, ...data]);
      page++;
      setIsPageEnd(data.length < 10 ? true : false);
    } catch (error: any) {
      // accessToken 없을 시에 accessToken 발급 후 가져오기 요청
      if (error.response.status === 401) {
        try {
          // accessToken 발급
          await auth.refresh();
          getList();
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log(error);
      }
    }
  };

  const search = async () => {
    const keyword = searchRef.current?.value;
    try {
      const { data }: ApplicantsType = await application.getList(1, keyword);
      setApplicationList(data);
      data.length < 10 && setIsPageEnd(true);
    } catch (error: any) {
      // accessToken 없을 시에 accessToken 발급 후 검색 결과 요청
      if (error.response.status === 401) {
        try {
          // accessToken 발급
          await auth.refresh();
          search();
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log(error);
      }
    }
  };

  const enterEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  return (
    <S.MainPage>
      {showPassModal && <PassModal />}
      {showScoreModal && <ScoreModal />}
      <Global
        styles={css`
          body {
            overflow: ${showPassModal || showScoreModal ? 'hidden' : 'visible'};
          }
        `}
      />
      <S.MainPageContent>
        <S.FunctionBox>
          <Logout />
          <S.Searchbox>
            <S.SearchInput
              placeholder="검색어를 입력하세요"
              ref={searchRef}
              onKeyPress={enterEvent}
            />
            <S.SearchButton onClick={search}>검색</S.SearchButton>
          </S.Searchbox>
          <S.Print onClick={getList}>수험표 출력</S.Print>
        </S.FunctionBox>
        <MainpageHeader />
        <S.ContentList>
          {applicationList.map((content, index: number) => (
            <ContentBox content={content} key={index} />
          ))}
          {!isPageEnd && <S.Target ref={loadMoreRef} />}
        </S.ContentList>
      </S.MainPageContent>
      <S.BlueBall />
      <S.SkyBlueBall />
    </S.MainPage>
  );
};

export default MainPage;
