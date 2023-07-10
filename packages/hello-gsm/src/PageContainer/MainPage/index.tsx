import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import {
  Header,
  Footer,
  MainPageDescription,
  BubbleButton,
  MainResultModal,
  MainNonLoginModal,
  LinkButton,
} from 'components';
import { css, useTheme } from '@emotion/react';
import { StatusType } from 'type/user';
import useStore from 'Stores/StoreContainer';
import device from 'shared/config';
import {
  acceptable,
  isStartFinalResult,
  isStartFirstResult,
} from 'shared/acceptable';

const contentSelects = [
  '원서 작성',
  '원서 학교 제출',
  '1차 서류 전형',
  '2차 평가',
  '결과 발표',
];

const MainPage: NextPage<StatusType> = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const [isPC, setIsPC] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isAcceptable, setIsAcceptable] = useState<boolean>(false);
  const [isFirstResultPeriod, setIsFirstResultPeriod] = useState<boolean>(true);

  const {
    showMainNonLoginModal,
    setShowMainNonLoginModal,
    showMainResultModal,
    setShowMainResultModal,
    logged,
  } = useStore();

  const selectedStyle = (index: number) =>
    selectedIndex === index &&
    css`
      color: #ffffff;
      font-weight: 700;
      font-size: '1.5rem';
      padding: 0;
      &:before,
      &:after {
        content: 'ㅣ';
      }
      @media ${device.tablet} {
        padding: 0;
      }
      @media ${device.mobile} {
        padding: 0;
      }
    `;

  const theme = useTheme();
  useEffect(() => {
    // 최종 합격 나오기 전
    setIsFirstResultPeriod(!isStartFinalResult);
    setIsMobile(window.innerWidth < 640 ? true : false);
    setIsAcceptable(acceptable);
    setIsPC(
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi|mobi/i.test(
        navigator.userAgent,
      ),
    );
    window.onresize = () => {
      setIsMobile(window.innerWidth < 640 ? true : false);
    };
  }, []);

  useEffect(() => {
    setShowMainNonLoginModal(
      // 1차 합격 발표 날짜
      isStartFirstResult &&
        !logged &&
        localStorage.getItem('mainNonLoginModalInvisible') !==
          new Date().getDate().toString(),
    );
  }, [logged]);

  useEffect(() => {
    setShowMainResultModal(
      // 1차 합격 발표 날짜
      isStartFirstResult &&
        localStorage.getItem('mainResultModalInvisible') !==
          new Date().getDate().toString() &&
        data?.application?.isFinalSubmission === true,
    );
  }, [data?.application?.isFinalSubmission]);
  return (
    <S.MainPage>
      {showMainResultModal && (
        <MainResultModal
          name={data?.name ?? ''}
          pass={
            isFirstResultPeriod
              ? data?.application?.firstResultScreening
                ? true
                : false
              : data?.application?.finalResultScreening
              ? true
              : false
          }
          isMobile={isMobile}
          majorResult={
            data?.application?.application_details.majorResult ?? undefined
          }
        />
      )}
      {showMainNonLoginModal && <MainNonLoginModal />}
      <Header />
      <S.MainContent>
        <div>
          <S.Title>
            꿈과 끼를 마음껏{' '}
            <span
              css={css`
                color: ${theme.color.primary.sky};
              `}
            >
              Up!
            </span>{' '}
            할 수 있는 <br />
            광주 소프트웨어 마이스터고등학교
          </S.Title>
          <S.Description>
            광주소프트웨어마이스터고등학교 입학 지원 시스템
          </S.Description>

          {isPC ? (
            isAcceptable ? (
              !data?.application?.isFinalSubmission ? (
                <LinkButton
                  href={logged ? '/information' : '/auth/signin'}
                  color="sky"
                >
                  📑 원서접수 하러가기
                </LinkButton>
              ) : (
                <S.ToApply disabled>접수 완료</S.ToApply>
              )
            ) : (
              <S.ToApply disabled>접수 기간이 아닙니다.</S.ToApply>
            )
          ) : (
            <S.ToApply
              css={css`
                height: 4.0625rem;
                background: #615d6c;
                box-shadow: none;
                :hover {
                  box-shadow: none;
                }
              `}
            >
              {isAcceptable
                ? '원서 접수는 pc로만 가능해요'
                : '접수 기간이 아닙니다.'}
            </S.ToApply>
          )}

          <div>
            <S.Underline />
            <S.TermWrapper>
              <S.ApplyTerm
                css={css`
                  list-style: initial;
                  list-style-position: inside;
                  font-weight: 600;
                `}
              >
                접수 기간
              </S.ApplyTerm>
              <S.ApplyTerm>2023. 10. 16 ~ 2023. 10. 19</S.ApplyTerm>
            </S.TermWrapper>
          </div>
        </div>
        <BubbleButton link="/calculator/choose">
          🧾 모의 성적 계산해보기
        </BubbleButton>
        <BubbleButton link="/manual">
          ❓️ 여러 계정으로 로그인 하는 방법
        </BubbleButton>

        <S.ContentBox>
          {!isMobile ? (
            <S.ContentHeader>
              {contentSelects.map((content, index) => (
                <S.ContentSelect
                  key={index}
                  css={selectedStyle(index + 1)}
                  onClick={() => setSelectedIndex(index + 1)}
                >
                  {content}
                </S.ContentSelect>
              ))}
            </S.ContentHeader>
          ) : (
            <S.ContentHeader>
              <S.ContentHeaderLine>
                {contentSelects
                  .filter((_, index) => index < 3)
                  .map((content, index) => (
                    <S.ContentSelect
                      key={index}
                      css={selectedStyle(index + 1)}
                      onClick={() => setSelectedIndex(index + 1)}
                    >
                      {content}
                    </S.ContentSelect>
                  ))}
              </S.ContentHeaderLine>
              <S.ContentHeaderLine>
                {contentSelects
                  .filter((_, index) => index > 2)
                  .map((content, index) => (
                    <S.ContentSelect
                      key={index}
                      css={selectedStyle(index + 4)}
                      onClick={() => setSelectedIndex(index + 4)}
                    >
                      {content}
                    </S.ContentSelect>
                  ))}
              </S.ContentHeaderLine>
            </S.ContentHeader>
          )}
          <MainPageDescription selectedIndex={selectedIndex} data={data} />
        </S.ContentBox>
      </S.MainContent>
      <S.GreenBall />
      <S.BigBlueBall />
      <S.YellowBall />
      <S.OrangeBall />
      <S.SmallBlueBall />
      <S.MintBall />
      <S.NanoBlueBall />
    </S.MainPage>
  );
};

export default MainPage;
