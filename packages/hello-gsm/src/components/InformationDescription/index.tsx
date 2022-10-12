import { css } from '@emotion/react';
import React from 'react';
import * as S from './style';

interface IndexType {
  index: number;
}

const InformationDescription: React.FC<IndexType> = ({ index }) => {
  switch (index) {
    case 0:
      return (
        <S.Description
          css={css`
            justify-content: space-evenly;
          `}
        >
          <S.DescriptionTextSmall>
            1. 본교 최종 합격자는{' '}
            <S.HighlightSmall>
              당해 학년도에는 다른 고등학교 입학전형에 지원할 수 없음.
            </S.HighlightSmall>
          </S.DescriptionTextSmall>
          <S.DescriptionTextSmall>
            2. 본교는 소프트웨어 영마이스터를 양성하기 위해{' '}
            <S.HighlightSmall>
              교육부와 과학기술정보통신부에서 지정, 운영하는
              산업수요맞춤형고등학교
            </S.HighlightSmall>
            로 취업을 목표로 하며{' '}
            <S.HighlightSmall>
              대학 진학을 희망하는 학생은 본교에 지원할 수 없음.
            </S.HighlightSmall>
          </S.DescriptionTextSmall>
          <S.DescriptionTextSmall>
            3. 기숙사 생활관은{' '}
            <S.HighlightSmall>평일 교육과정</S.HighlightSmall>을{' '}
            <S.HighlightSmall>위하여 운영하는</S.HighlightSmall>
            것을 원칙으로 함.
            <br />
            (주말과 공휴일 등 학교 휴무일에 기숙사를 운영하지 않음.)
          </S.DescriptionTextSmall>
        </S.Description>
      );
    case 1:
      return (
        <S.Description
          css={css`
            justify-content: space-evenly;
            padding: 20px 0;
          `}
        >
          <S.DescriptionText
            css={css`
              width: 774px;
            `}
          >
            절차를 읽고 <S.Highlight>원서와 성적</S.Highlight>을{' '}
            <S.Highlight>작성한 후 마이페이지</S.Highlight>에서{' '}
            <S.Highlight>최종 제출버튼</S.Highlight>을 눌러
            <br />
            입학 신청을 완료합니다.
          </S.DescriptionText>
          <S.DescriptionText>
            <S.Highlight>성적 작성</S.Highlight>은 원활한 출력을 위해{' '}
            <S.Highlight>꼭 출력</S.Highlight>을{' '}
            <S.Highlight>할 PC</S.Highlight>에서 작성을 해주셔야 합니다.
          </S.DescriptionText>
          <S.PostScript>
            *원서 작성 중에 웹 사이트에서 나가더라도 내 정보 페이지에서 계속해서
            수정할 수 있습니다.
          </S.PostScript>
        </S.Description>
      );
    case 2:
      return (
        <S.Description>
          <S.DescriptionText>
            <S.Highlight>작성하신 입학 원서와 그 외 서류들</S.Highlight>을
            마이페이지에서 <S.Highlight>저장 후 출력하여</S.Highlight>
            <br />
            수기 부분을 모두 작성하신 후{' '}
            <S.Highlight>10월 17일 부터 10월 20일까지 학교 행정실</S.Highlight>
            <br />에 제출해야 합니다.
          </S.DescriptionText>
        </S.Description>
      );
    case 3:
      return (
        <S.Description>
          <S.DescriptionText>
            <S.Highlight>내신과 봉사시간, 출결현황</S.Highlight>을 점수로
            환산하여
            <br />
            <S.Highlight>정원의 1.3배</S.Highlight>의 인원을 선출합니다.
          </S.DescriptionText>
        </S.Description>
      );
    case 4:
      return (
        <S.Description>
          <S.DescriptionText>
            <S.Highlight>인성과 문제해결 능력</S.Highlight>을
            <br />
            중심으로 직무적성 소양평가를 진행합니다.
          </S.DescriptionText>
        </S.Description>
      );
    case 5:
      return (
        <S.Description>
          <S.DescriptionText>
            <S.Highlight>1차 서류 심사와 2차 면접</S.Highlight>을 통해 최종
            합격자를 선출합니다.
          </S.DescriptionText>
        </S.Description>
      );
    default:
      return <></>;
  }
};

export default InformationDescription;
