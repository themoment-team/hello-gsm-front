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
          <ul>
            <S.DescriptionTextSmall>
              본교 최종 합격자는 당해 학년도에는{' '}
              <S.HighlightSmall>
                다른 고등학교 입학전형에 지원할 수 없습니다.
              </S.HighlightSmall>
            </S.DescriptionTextSmall>
            <br />
            <S.DescriptionTextSmall>
              본교는 소프트웨어 영마이스터를 양성하기 위해 교육부와
              과학기술정보통신부에서 지정, 운영하는 산업수요맞춤형고등학교 로
              취업을 목표로 하며{' '}
              <S.HighlightSmall>
                대학 진학을 희망하는 학생은 본교에 지원할 수 없습니다.
              </S.HighlightSmall>
            </S.DescriptionTextSmall>
            <br />
            <S.DescriptionTextSmall>
              기숙사 생활관은 평일 교육과정을 위하여 운영하는 것을 원칙으로
              합니다.
              <br />
              <S.HighlightSmall>
                주말과 공휴일 등 학교 휴무일에 기숙사를 운영하지 않습니다.
              </S.HighlightSmall>
            </S.DescriptionTextSmall>
          </ul>
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
            절차를 읽고 원서와 성적을 작성한 후{' '}
            <S.Highlight>마이페이지</S.Highlight>에서{' '}
            <S.Highlight>최종 제출</S.Highlight>버튼을 눌러야
            <br />
            입학 신청이 <S.Highlight>완료</S.Highlight>됩니다.
          </S.DescriptionText>
        </S.Description>
      );
    case 2:
      return (
        <S.Description>
          <S.DescriptionText
            css={css`
              width: 774px;

              li {
                list-style-type: decimal;
              }
            `}
          >
            <li>
              작성하신 입학 원서와 추가 서류는 마이페이지에서{' '}
              <S.Highlight>출력</S.Highlight>합니다.
            </li>

            <li>
              서류를 출력하고 필요한 수기 부분을 모두{' '}
              <S.Highlight>작성</S.Highlight>합니다.
            </li>
            <li>
              <S.Highlight>10월 16일</S.Highlight>부터{' '}
              <S.Highlight>10월 19일</S.Highlight>까지 해당 서류를 학교 원서
              접수처에 <S.Highlight>제출</S.Highlight>합니다.
            </li>
          </S.DescriptionText>
        </S.Description>
      );
    case 3:
      return (
        <S.Description>
          <S.DescriptionText>
            내신과 봉사시간, 출결현황을 점수로 환산하여
            <br />
            <S.Highlight>정원의 1.3배</S.Highlight>의 인원을 선출합니다.
          </S.DescriptionText>
        </S.Description>
      );
    case 4:
      return (
        <S.Description>
          <S.DescriptionText>
            소프트웨어마이스터고등학교 학업수행에 필요한{' '}
            <S.Highlight>기본 자질과 능력을</S.Highlight>
            <br />
            중심으로 <S.Highlight>직무적성 소양평가</S.Highlight>를 진행합니다.
          </S.DescriptionText>
        </S.Description>
      );
    case 5:
      return (
        <S.Description>
          <S.DescriptionText>
            1차 서류 심사(50%)와 2차 직무적성 소양평가(50%)를
            <br />
            통해 <S.Highlight>최종 합격자를 선발</S.Highlight>합니다.
          </S.DescriptionText>
        </S.Description>
      );
    default:
      return <></>;
  }
};

export default InformationDescription;
