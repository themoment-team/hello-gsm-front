import * as S from './style';
import { FAQType } from 'components/FAQPage';
import useStore from 'Stores/StoreContainer';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

type FAQBoxType = FAQType & {
  keyword: string;
};

const FAQBox: React.FC<FAQBoxType> = ({ title, content, keyword }) => {
  const { isSearching, setShowModal, setModalTitle, setModalContent } =
    useStore();

  const [FAQtitle, setFAQtitle] = useState(title);

  const showAnswer = () => {
    setShowModal();
    setModalTitle(title);
    setModalContent(content);
  };

  useEffect(
    () =>
      isSearching
        ? setFAQtitle(
            title
              .split(keyword)
              .join(
                `<span style="color: #000000; font-weight: 900; font-size: 22px;"}>${keyword}</span>`,
              ),
          )
        : setFAQtitle(title),
    [isSearching, keyword, title],
  );

  return (
    <S.FAQBox onClick={showAnswer}>
      <S.Title
        dangerouslySetInnerHTML={{ __html: FAQtitle }}
        css={css`
          color: ${isSearching && '#827F8C'};
        `}
      />
    </S.FAQBox>
  );
};

export default FAQBox;
