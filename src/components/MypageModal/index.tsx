import * as S from './style';
import * as I from '../../Assets/svg';
import useStore from 'Stores/StoreContainer';
import { css } from '@emotion/react';

const MypageModal: React.FC = () => {
  const { setShowMypageModal, mypageModalContent } = useStore();

  return (
    <S.MypageModal>
      <S.MypageModalBox>
        <S.ExplanationBox>
          <S.ExplanationTitle
            css={css`
              ${mypageModalContent === 'download' && 'height: 180px;'}
            `}
          >
            {mypageModalContent === 'cancel' && (
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
        <S.ButtonBox>
          <S.CancelButton onClick={setShowMypageModal}>취소</S.CancelButton>
          <S.AllowButton
            css={css`
              ${mypageModalContent === 'cancel' && 'background: #FB1834'};
            `}
          >
            {mypageModalContent === 'cancel' && '원서 삭제'}
            {mypageModalContent === 'final' && '최종제출'}
            {mypageModalContent === 'download' && '제출 서류 다운'}
          </S.AllowButton>
        </S.ButtonBox>
      </S.MypageModalBox>
    </S.MypageModal>
  );
};

export default MypageModal;
