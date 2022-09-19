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
import { useEffect, useRef, useState } from 'react';
import { ApplicantsType, ApplicantType } from 'Types/application';
import application from 'Api/application';
import auth from 'Api/auth';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

const MainPage: NextPage<ApplicantsType> = ({ data }) => {
  const [page, setPage] = useState<number>(2);
  const [applicationList, setApplicationList] = useState<ApplicantType[]>(data);
  const searchRef = useRef<HTMLInputElement>(null);
  const { showPassModal, showScoreModal } = useStore();

  const [target, setTarget] = useState(null);

  const search = async () => {
    const keyword = searchRef.current?.value;
    try {
      const { data }: ApplicantsType = await application.getList(1, keyword);
      setApplicationList(data);
    } catch (error: any) {
      // accessToken 없을 시에 accessToken 발급 후 가져오기 요청
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

  const onIntersect = async ([entry]: any, observer: any) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      console.log('load');
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer: any;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  const enterEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  const getList = async () => {
    try {
      const { data }: ApplicantsType = await application.getList(page);
      console.log(data);
      setApplicationList([...applicationList, ...data]);
      setPage(page => ++page);
    } catch (error) {
      console.log(error);
    }
  };

  const { loadMoreRef } = useInfiniteScroll();

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
          <S.Target ref={loadMoreRef} />
        </S.ContentList>
      </S.MainPageContent>
      <S.BlueBall />
      <S.SkyBlueBall />
    </S.MainPage>
  );
};

export default MainPage;
