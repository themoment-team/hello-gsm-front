import { ContentBox, Logout, MainpageHeader, ScoreModal } from 'components';
import type { NextPage } from 'next';
import * as S from './style';
import useStore from 'Stores/StoreContainer';
import { css, Global } from '@emotion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ApplicantsType, ApplicantType, GetListType } from 'Types/application';
import application from 'Api/application';
import auth from 'Api/auth';
import Link from 'next/link';
import { toast } from 'react-toastify';
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
  const [printable, setPrintable] = useState<boolean>(false);
  const [applicationList, setApplicationList] =
    useState<ApplicantType[]>(ListDummyData);
  const [isPageEnd, setIsPageEnd] = useState<boolean>(false);
  const pageIndexRef = useRef<number>(2);
  const searchRef = useRef<HTMLInputElement>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const { showScoreModal } = useStore();

  useEffect(() => {
    // 수험표를 출력할 수 있는 기간
    setPrintable(isStartFirstResult);
  }, []);

  const getList = useCallback(async () => {
    const keyword = searchRef.current?.value;
    try {
      const { data }: GetListType = await application.getList(
        pageIndexRef.current,
        keyword,
      );
      setApplicationList(list => [...list, ...data]);
      pageIndexRef.current++;
      setIsPageEnd(data.length < 10 ? true : false);
    } catch (error: any) {
      // accessToken 없을 시에 accessToken 발급 후 가져오기 요청
      if (error.response?.status === 401) {
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
  }, []);

  const search = async () => {
    const keyword = searchRef.current?.value;
    try {
      const { data }: GetListType = await application.getList(1, keyword);
      pageIndexRef.current = 2;
      setApplicationList(data);
      setIsPageEnd(data.length < 10 ? true : false);
    } catch (error: any) {
      // accessToken 없을 시에 accessToken 발급 후 검색 결과 요청
      if (error.response?.status === 401) {
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
          <S.CountBox>{`최종 제출 인원 : ${count ?? 0}명`}</S.CountBox>
          <S.Searchbox>
            <S.SearchInput
              placeholder="검색어를 입력하세요"
              ref={searchRef}
              onKeyPress={enterEvent}
            />
            <S.SearchButton onClick={search}>검색</S.SearchButton>
          </S.Searchbox>
          <S.ButtonBox>
            <Logout />
            {printable ? (
              <Link href="/ticket">
                <S.Print>수험표 출력</S.Print>
              </Link>
            ) : (
              <S.Print
                onClick={() => toast.error('수험표 출력 가능 기간이 아닙니다.')}
                css={css`
                  background: #625e6f;
                  color: rgba(31, 31, 31, 0.86);
                  cursor: default;
                `}
              >
                수험표 출력
              </S.Print>
            )}
          </S.ButtonBox>
        </S.FunctionBox>
        <MainpageHeader />
        <S.ContentList>
          {applicationList?.map((content, index: number) => (
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
