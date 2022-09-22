import { ContentBox, Logout, MainpageHeader, ScoreModal } from 'components';
import type { NextPage } from 'next';
import * as S from './style';
import useStore from 'Stores/StoreContainer';
import { css, Global } from '@emotion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ApplicantsType, ApplicantType } from 'Types/application';
import application from 'Api/application';
import auth from 'Api/auth';

const MainPage: NextPage<ApplicantsType> = ({ data }) => {
  const [pageIndex, setPageIndex] = useState<number>(2);
  const [applicationList, setApplicationList] = useState<ApplicantType[]>(data);
  const [isPageEnd, setIsPageEnd] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const { showScoreModal } = useStore();

  const getList = useCallback(async () => {
    const keyword = searchRef.current?.value;
    console.log('getList');
    try {
      const { data }: ApplicantsType = await application.getList(
        pageIndex,
        keyword,
      );
      setApplicationList(list => [...list, ...data]);
      setPageIndex(page => {
        return page + 1;
      });
      // console.log(page);
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
  }, [pageIndex]);

  const search = async () => {
    const keyword = searchRef.current?.value;
    setIsPageEnd(false);
    try {
      const { data }: ApplicantsType = await application.getList(1, keyword);
      setApplicationList(data);
      setPageIndex(2);
      // console.log(page);
      setIsPageEnd(data.length < 10 ? true : false);
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

  const handleObserver = useCallback(
    async (
      [entry]: IntersectionObserverEntry[],
      observer: IntersectionObserver,
    ) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        await getList();
        observer.observe(entry.target);
      }
    },
    [getList],
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

  const enterEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      search();
    }
  };

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
          <S.Print
            onClick={() => {
              setPageIndex(page => {
                console.log(page);
                return page++;
              });
            }}
          >
            수험표 출력
          </S.Print>
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
