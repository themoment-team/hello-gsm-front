import React from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import { css } from '@emotion/react';

const profile = {
  id: '2021',
  name: '유시온',
  address: '광주광역시 서구 풍암동 우미광장아파트',
  homeNumber: '062 681 7815',
  phoneNumber: '010 9201 5487',
  birth: '2022년 11월 09일',
  middleSchool: '풍암중학교',
  guardian: {
    name: '울엄마',
    relation: '모',
    phoneNumber: '010 1234 5678',
  },
  teacher: {
    phoneNumber: '010 9876 5432',
  },
};

const ApplicationPage: NextPage = () => {
  return (
    <S.ApplicationPage
      css={css`
        @media print {
          -webkit-print-color-adjust: exact;
        }
      `}
    >
      <S.Template>[서식 1]</S.Template>
      <S.Title>광주소프트웨어마이스터고등학교 입학원서</S.Title>
      <S.Wrap>
        <S.SubTitle>2023학년도 신입생 입학전형</S.SubTitle>
        <S.Box>
          <S.Subject>접수번호</S.Subject>
          <S.Content>{profile.id}</S.Content>
        </S.Box>
      </S.Wrap>
      <S.Container>
        <S.Section1>
          <S.SectionTitle>인적사항</S.SectionTitle>
          <S.Table>
            <tbody>
              <tr>
                <td style={{ width: '3%' }} rowSpan={3}>
                  지원자
                </td>
                <td>성 명</td>
                <td>{profile.name}</td>
                <td>성별</td>
                <td>남 여</td>
                <td>생년월일</td>
                <td>{profile.birth}</td>
              </tr>
              <tr>
                <td>주 소</td>
                <td colSpan={5}>{profile.address}</td>
              </tr>
              <tr>
                <td>연락처</td>
                <td>집전화</td>
                <td>{profile.homeNumber}</td>
                <td>핸드폰</td>
                <td>{profile.phoneNumber}</td>
              </tr>
              <tr>
                <td style={{ width: '3%' }} rowSpan={2}>
                  보호자
                </td>
                <td>성 명</td>
                <td>{profile.guardian.name}</td>
                <td>지원자와의 관계</td>
                <td>{profile.guardian.relation}</td>
              </tr>
              <tr>
                <td>핸드폰</td>
                <td>{profile.guardian.phoneNumber}</td>
              </tr>
              <tr>
                <td colSpan={3} rowSpan={1}>
                  원서작성자(담임) <br /> 성명
                </td>
                <td>(인)</td>
                <td>핸드폰</td>
                <td>{profile.teacher.phoneNumber}</td>
              </tr>
            </tbody>
          </S.Table>
          <S.Photo>사진</S.Photo>
        </S.Section1>
        <S.Section1>
          <S.SectionTitle>지원자 현황</S.SectionTitle>
          <S.Table>
            <tbody>
              <tr>
                <td rowSpan={2}>출신중학교</td>
                <td>{profile.middleSchool}</td>
              </tr>
              <tr>
                <td>지역명</td>
              </tr>
              <tr>
                <td>전형구분</td>
                <td></td>
              </tr>
              <tr>
                <td rowSpan={2}>교과성적</td>
                <td></td>
              </tr>
              <tr>
                <td rowSpan={2}>비교과성적</td>
                <td></td>
              </tr>
            </tbody>
          </S.Table>
        </S.Section1>
      </S.Container>
    </S.ApplicationPage>
  );
};

export default ApplicationPage;
