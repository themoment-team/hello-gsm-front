import * as S from './style';
import * as I from 'Assets/svg';
import useStore from 'Stores/StoreContainer';
import { css } from '@emotion/react';
import application from 'Api/application';
import { useRouter } from 'next/router';
import Link from 'next/link';
const MypageModal: React.FC = () => {
  const { setShowMypageModal, mypageModalContent, setShowMypageSuccessModal } =
    useStore();

  const { push } = useRouter();

  // 최종 제출
  const finalSubmission = async () => {
    try {
      await application.putFinalSubmission();
      setShowMypageSuccessModal();
    } catch (error: any) {
      console.error(error);
    }
  };

  // 원서 삭제
  const deleteApplication = async () => {
    try {
      await application.deleteApplication();
      localStorage.clear();
      window.location.reload();
    } catch (error: any) {
      console.error(error);
    }
  };

  // 제출서류 다운로드
  const downloadApplication = () => {
    push('입학제출서류.hwp');
  };

  const AllowButton = () => {
    setShowMypageModal();
    switch (mypageModalContent) {
      case 'delete':
        deleteApplication();
        break;
      case 'final':
        finalSubmission();
        break;
      case 'download':
        downloadApplication();
        break;
    }
  };

  return (
    <S.MypageModal>
      <S.MypageModalBox>
        <S.ExplanationBox>
          <S.ExplanationTitle
            css={css`
              ${mypageModalContent === 'download' && 'height: 180px;'}
            `}
          >
            {mypageModalContent === 'delete' && (
              <S.ExplanationTitleContent
                css={css`
                  width: 310px;
                `}
              >
                원서 삭제를 누르시면 작성하신 원서가
                <S.RedHighlighting> 삭제</S.RedHighlighting>됩니다.
              </S.ExplanationTitleContent>
            )}
            {mypageModalContent === 'final' && (
              <S.ExplanationTitleContent
                css={css`
                  width: 460px;
                `}
              >
                최종제출을 누르시면 다시 수정이
                <S.RedHighlighting> 불가</S.RedHighlighting>합니다. 원서를
                정확히 쓰셨나요?
              </S.ExplanationTitleContent>
            )}
            {mypageModalContent === 'download' && (
              <S.ExplanationTitleContent
                css={css`
                  width: 450px;
                `}
              >
                입학원서,성적 입력확인서,개인정보 수집.활용 동의서 학무모
                동의서를 출력하여 원서와 함께 행정실에 제출해야 됩니다.
              </S.ExplanationTitleContent>
            )}
          </S.ExplanationTitle>
          <I.Questioner />
        </S.ExplanationBox>
        <S.ButtonBox
          css={css`
            gap: 10px;
          `}
        >
          <Link href="/application">
            <S.CancelButton>원서 미리보기</S.CancelButton>
          </Link>
          <S.CancelButton onClick={setShowMypageModal}>취소</S.CancelButton>
          <S.AllowButton
            css={css`
              ${mypageModalContent === 'delete' && 'background: #FB1834'};
            `}
            onClick={AllowButton}
          >
            {mypageModalContent === 'delete' && '원서 삭제'}
            {mypageModalContent === 'final' && '최종제출'}
            {mypageModalContent === 'download' && '제출 서류 다운'}
          </S.AllowButton>
        </S.ButtonBox>
      </S.MypageModalBox>
    </S.MypageModal>
  );
};

export default MypageModal;
