import { Global, css } from '@emotion/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import * as I from 'Assets/svg';
import useStore from 'Stores/StoreContainer';
import * as S from './style';
import device from 'shared/config';

interface ResultModal {
  name: string;
  pass: boolean;
  isMobile: boolean;
}

const MainResultModal: React.FC<ResultModal> = ({ name, pass, isMobile }) => {
  const [isFirstResultPeriod, setIsFirstResultPeriod] = useState<boolean>(true);
  const [isPass, setIsPass] = useState<boolean>(pass);
  const { setShowMainResultModal } = useStore();
  const { push } = useRouter();

  useEffect(() => {
    setIsFirstResultPeriod(new Date() < new Date('2022/11/2 10:00:00'));
  }, []);

  useEffect(() => {
    setIsPass(pass);
  }, [pass]);

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
              {name}님의 2023학년도 {isMobile && <br />}
              광주소프트웨어마이스터고등학교
              <br />
              1차 서류 심사 결과{' '}
              {isPass ? (
                <S.PassText>합격</S.PassText>
              ) : (
                <S.FailText>불합격</S.FailText>
              )}
              하셨습니다.
              <br />
              {isPass &&
                (isMobile ? (
                  <>
                    2차 직무적성 소양평가는
                    <br />
                    10월 28일 13시에 진행됩니다.
                  </>
                ) : (
                  '2차 직무적성 소양평가는 10월 28일 13시에 진행됩니다.'
                ))}
            </S.Text>
          ) : (
            <S.Text>
              {name}님의 2023학년도 {isMobile && <br />}
              광주소프트웨어마이스터고등학교
              <br />
              {isPass ? (
                <S.PassText>최종 합격</S.PassText>
              ) : (
                <S.FailText>최종 불합격</S.FailText>
              )}
              하셨습니다.
            </S.Text>
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
          isPass ? (
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
