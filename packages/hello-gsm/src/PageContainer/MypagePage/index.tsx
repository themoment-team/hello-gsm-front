import type { NextPage } from 'next';
import Link from 'next/link';
import * as S from './style';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import useStore from 'Stores/StoreContainer';
import { StatusType } from 'type/user';
import Image from 'next/image';
import { Header, MypageModal, MypageSuccessModal } from 'components';

const MyPage: NextPage<StatusType> = ({ data }) => {
  const [name, setName] = useState<string>('');
  const [imgURL, setImgURL] = useState<string>('');
  const [saved, setSaved] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isPC, setIsPC] = useState<boolean>(true);

  const {
    showMypageModal,
    setShowMypageModal,
    setMypageModalContent,
    setLogged,
    showMypageSuccessModal,
  } = useStore();

  const showModal = (content: string) => {
    setShowMypageModal();
    setMypageModalContent(content);
  };

  useEffect(() => {
    setLogged(true);
    setSaved(data.application === null ? false : true);
    setSubmitted(data.application?.isFinalSubmission === true ? true : false);
    setImgURL(data.userImg);
    setName(data.name);
    setIsPC(
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi|mobi/i.test(
        navigator.userAgent,
      ),
    );
  }, []);

  return (
    <S.MyPage>
      {showMypageModal && <MypageModal />}
      {showMypageSuccessModal && <MypageSuccessModal />}
      <Header />
      <S.Content>
        <S.UserBox>
          <Image
            src={imgURL}
            alt="image"
            width="140"
            height="140"
            css={{ borderRadius: '100%' }}
          />
          <S.Name>{name}</S.Name>
        </S.UserBox>
        {isPC ? (
          saved ? (
            submitted ? (
              <S.ButtonBox
                css={css`
                  width: 335px;
                `}
              >
                <S.Button
                  css={css`
                    background: #59c5ff;
                    box-shadow: 0px 13px 30px -10px #59c5ff;
                  `}
                >
                  원서 다운
                </S.Button>
                <S.Button
                  onClick={() => showModal('download')}
                  css={css`
                    background: #35dcbe;
                    box-shadow: 0px 13px 30px -10px #35dcbe;
                  `}
                >
                  제출 서류 다운
                </S.Button>
              </S.ButtonBox>
            ) : (
              <S.ButtonBox
                css={css`
                  width: 510px;
                `}
              >
                <S.Button
                  onClick={() => showModal('delete')}
                  css={css`
                    background: #d82142;
                    box-shadow: 0px 13px 30px -10px #d82142;
                  `}
                >
                  원서 삭제
                </S.Button>
                <Link href="/apply" passHref>
                  <S.Button
                    css={css`
                      background: #dbe44e;
                      box-shadow: 0px 13px 30px -10px #dbe44e;
                    `}
                  >
                    원서 수정
                  </S.Button>
                </Link>
                <S.Button
                  onClick={() => showModal('final')}
                  css={css`
                    background: #59c5ff;
                    box-shadow: 0px 13px 30px -10px #59c5ff;
                  `}
                >
                  최종제출
                </S.Button>
              </S.ButtonBox>
            )
          ) : (
            <S.ButtonBox
              css={css`
                width: 160px;
              `}
            >
              <Link href="/information" passHref>
                <S.Button
                  css={css`
                    background: #dbe44e;
                    box-shadow: 0px 13px 30px -10px #dbe44e;
                  `}
                >
                  원서 작성
                </S.Button>
              </Link>
            </S.ButtonBox>
          )
        ) : (
          <S.IsNotPCWrap>
            <S.Point />
            <S.IsNotPC>
              원서 삭제 및 수정, 최종 제출은 PC로만 할 수 있습니다
            </S.IsNotPC>
          </S.IsNotPCWrap>
        )}
      </S.Content>
      <S.GreenBall />
      <S.BigBlueBall />
      <S.MiddleBlueBall />
      <S.SmallBlueBall />
    </S.MyPage>
  );
};

export default MyPage;
