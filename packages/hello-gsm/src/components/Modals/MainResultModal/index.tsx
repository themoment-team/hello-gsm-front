import { Global, css } from '@emotion/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import * as I from 'assets/svg';
import useStore from 'stores/StoreContainer';
import * as S from './style';
import device from 'shared/config';
import { MajorType } from 'type/application';
import { isFirstResult } from 'shared/Date/firstScreening';
import formatMajor from 'Utils/Format/formatMajor';

interface ResultModal {
  name: string;
  pass: boolean | undefined;
  isMobile: boolean;
  majorResult: MajorType | null;
}

const MainResultModal: React.FC<ResultModal> = ({
  name,
  pass,
  isMobile,
  majorResult,
}) => {
  const [isFirstResultPeriod, setIsFirstResultPeriod] =
    useState<boolean>(isFirstResult);
  const { setShowMainResultModal } = useStore();
  const { push } = useRouter();

  const invisible = () => {
    setShowMainResultModal(false);
    localStorage.setItem(
      'mainResultModalInvisible',
      new Date().getDate().toString(),
    );
  };

  return (
    <S.MainResultModal>
      <Global
        styles={css`
          body {
            overflow: hidden;
          }
        `}
      />
      <S.MainResultModalBox>
        <S.MainResultModalContent>
          {isFirstResultPeriod ? (
            <S.Text>
              {name}님의 1차 서류 심사 결과{' '}
              {pass ? (
                <>
                  <S.PassText>합격</S.PassText>
                  하셨습니다.
                  <S.DescriptionText>
                    &lt;2차 직무적성소양평가 안내&gt;
                    <br />
                    <li>
                      일시:{' '}
                      <span
                        css={css`
                          color: #3796ff;
                        `}
                      >
                        2023.10.27.(금) 13시
                      </span>
                    </li>
                    <li>
                      장소:{' '}
                      <span
                        css={css`
                          color: #fa4953;
                        `}
                      >
                        본교 금봉관 2층 강당
                      </span>
                    </li>
                    <li>
                      준비물:{' '}
                      <span
                        css={css`
                          color: #fa4953;
                        `}
                      >
                        컴퓨터용 싸인펜, 필기구, 신분확인증
                        <br />
                        (학생증, 청소년증, 여권, 생활기록부(원본대조필) 중 하나
                      </span>
                    </li>
                  </S.DescriptionText>
                </>
              ) : (
                <>
                  <S.FailText>불합격</S.FailText>
                  하셨습니다.
                </>
              )}
            </S.Text>
          ) : (
            <>
              <S.Text>
                {name}님 광주소프트웨어마이스터고등학교
                <br />
                {pass ? (
                  <>
                    <span
                      css={css`
                        color: #ff4e4e;
                      `}
                    >
                      {formatMajor(majorResult)}
                    </span>
                    에 <S.PassText>최종 합격</S.PassText>
                  </>
                ) : (
                  <S.FailText>최종 불합격</S.FailText>
                )}
                하셨습니다.
              </S.Text>
              {pass && (
                <S.FinalPassPostScript>
                  <span
                    css={css`
                      font-weight: 700;
                    `}
                  >
                    &lt;합격자 제출서류&gt; <br />
                  </span>
                  <li>
                    입학등록동의서 1부: 11.6.(월) 까지 <br />
                  </li>
                  <li>
                    건강진단서 1부: 11.13.(월)까지 <br />
                  </li>
                  <li>우편과 방문 제출: 1층 교무실</li>
                </S.FinalPassPostScript>
              )}
            </>
          )}

          <S.PostScript>
            메인 페이지 하단에 결과 발표에서 {isMobile && <br />}
            다시 확인하실 수 있습니다.
          </S.PostScript>
        </S.MainResultModalContent>
        <S.InvisibleButtonWrap>
          <S.InvisibleButton onClick={invisible}>
            오늘 하루 보지 않기
          </S.InvisibleButton>
        </S.InvisibleButtonWrap>
        {isFirstResultPeriod ? (
          pass ? (
            <S.ButtonWrap>
              <S.Button
                css={css`
                  background: #dee449;
                  svg {
                    margin-top: 3px;
                    @media ${device.mobile} {
                      width: 10px;
                      height: 14px;
                    }
                  }
                `}
                onClick={() => push('/1차_전형_합격자_안내사항.hwp')}
              >
                <I.DownloadIcon />
                <S.ButtonText>안내사항</S.ButtonText>
              </S.Button>
              <S.Button onClick={() => setShowMainResultModal(false)}>
                확인
              </S.Button>
            </S.ButtonWrap>
          ) : (
            <S.Button onClick={() => setShowMainResultModal(false)}>
              확인
            </S.Button>
          )
        ) : pass ? (
          <S.ButtonWrap>
            <S.Button
              css={css`
                background: #dee449;
                svg {
                  margin-top: 3px;
                  @media ${device.mobile} {
                    width: 10px;
                    height: 14px;
                  }
                }
              `}
              onClick={() => push('/최종합격자_제출_서류.hwpx')}
            >
              <I.DownloadIcon />
              <S.ButtonText>제출서류</S.ButtonText>
            </S.Button>
            <S.Button onClick={() => setShowMainResultModal(false)}>
              확인
            </S.Button>
          </S.ButtonWrap>
        ) : (
          <S.Button onClick={() => setShowMainResultModal(false)}>
            확인
          </S.Button>
        )}
      </S.MainResultModalBox>
    </S.MainResultModal>
  );
};

export default MainResultModal;
