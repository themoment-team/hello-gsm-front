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
  area: '광주광역시 서구',
  photoUrl:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNSGTUntb7tiyrB0zEeemK8lJd3gGOSHILw&usqp=CAU',
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
          table {
            page-break-after: auto;
          }
          table tr {
            page-break-inside: avoid;
            page-break-after: auto;
          }
          table td {
            page-break-inside: avoid;
            page-break-after: auto;
          }
          table thead {
            display: table-header-group;
          }
          table tfoot {
            display: table-footer-group;
          }
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
        <S.Table>
          <tbody>
            <tr>
              <S.Sub style={{ width: '3%' }} rowSpan={7}>
                인적사항
              </S.Sub>
            </tr>
            <tr>
              <S.Sub style={{ width: '3%' }} rowSpan={3}>
                지원자
              </S.Sub>
              <S.Sub>성 명</S.Sub>
              <td colSpan={4}>{profile.name}</td>
              <S.Sub style={{ width: '3%' }}>성별</S.Sub>
              <td colSpan={2}>남 여</td>
              <S.Sub>생년월일</S.Sub>
              <td>{profile.birth}</td>
              <td rowSpan={7}>
                <img src={profile.photoUrl} alt="" />
              </td>
            </tr>
            <tr>
              <S.Sub>주 소</S.Sub>
              <td colSpan={9}>{profile.address}</td>
            </tr>
            <tr>
              <S.Sub>연락처</S.Sub>
              <S.Sub colSpan={3}>집전화</S.Sub>
              <td colSpan={3}>{profile.homeNumber}</td>
              <S.Sub>핸드폰</S.Sub>
              <td colSpan={3}>{profile.phoneNumber}</td>
            </tr>
            <S.Tr>
              <S.Sub style={{ width: '3%' }} rowSpan={2}>
                보호자
              </S.Sub>
              <S.Sub>성 명</S.Sub>
              <td colSpan={5}>{profile.guardian.name}</td>
              <S.Sub colSpan={1}>지원자와의 관계</S.Sub>
              <td colSpan={3}>{profile.guardian.relation}</td>
            </S.Tr>
            <tr>
              <S.Sub>핸드폰</S.Sub>
              <td colSpan={9}>{profile.guardian.phoneNumber}</td>
            </tr>
            <S.Tr>
              <S.Sub colSpan={3} style={{ height: '15%' }}>
                원서작성자(담임) <br /> 성명
              </S.Sub>
              <td colSpan={5} style={{ textAlign: 'end' }}>
                (인)
              </td>
              <S.Sub>핸드폰</S.Sub>
              <td colSpan={4}>{profile.teacher.phoneNumber}</td>
            </S.Tr>
          </tbody>
        </S.Table>
        <S.Table>
          <tbody>
            <tr>
              <S.Sub style={{ width: '3%' }} rowSpan={11}>
                지원자 현황
              </S.Sub>
            </tr>
            <tr>
              <S.Sub colSpan={1} rowSpan={2}>
                출신중학교
              </S.Sub>
              <td colSpan={2}>{profile.middleSchool}</td>
              <td colSpan={3}>2023년 졸업예정</td>
            </tr>
            <tr>
              <S.Sub>지역명</S.Sub>
              <td colSpan={4}>{profile.area}</td>
            </tr>
            <tr>
              <S.Sub rowSpan={1} colSpan={3}>
                전 형 구 분
              </S.Sub>
              <S.Sub colSpan={3}>사회통합전형의 대상 구분</S.Sub>
            </tr>
            <tr>
              <td rowSpan={1} colSpan={3}>
                일반전형 사회통합전형 특별전형
              </td>
              <td colSpan={3}>기회균등전형 사회다양성전형</td>
            </tr>
            <tr>
              <td rowSpan={1}>교과성적</td>
            </tr>
            <tr>
              <td>1-1</td>
              <td>1-2</td>
              <td>1-3</td>
            </tr>
            <tr>
              <td>1-1</td>
              <td>1-2</td>
              <td>1-3</td>
            </tr>
            <tr>
              <td rowSpan={2}>비교과성적</td>
            </tr>
            <tr>
              <td colSpan={2}>출석</td>
              <td colSpan={2}>봉사활동</td>
              <td colSpan={2}>예체능</td>
            </tr>
            <tr>
              <td colSpan={2} rowSpan={3}>
                봉사활동asdfasdfasdfasd
              </td>
              <td colSpan={2}>봉사활동</td>
              <td colSpan={2}>봉사활동</td>
            </tr>
          </tbody>
        </S.Table>
        <S.Section1>
          <S.SectionTitle style={{ width: '10%' }}>지원구분</S.SectionTitle>
          <S.Table>
            <tbody>
              <tr>
                <td colSpan={2}>1지망 학과</td>
                <td colSpan={2}>2지망 학과</td>
                <td colSpan={2}>3지망 학과</td>
              </tr>
              <tr>
                <td colSpan={2}>소프트웨어개발과</td>
                <td colSpan={2}>스마트IOT과</td>
                <td colSpan={2}>인공지능과</td>
              </tr>
              <tr>
                <td colSpan={3}>
                  1.(인공지능과/ 스마트IOT과/ 소프트웨어개발과) 중 지망 학과를
                  순서대로 기록 <br />
                  2. 지원학과는 희망 순에 따라 3개 학과를 모두 기록해야 한다.
                </td>
              </tr>
            </tbody>
          </S.Table>
        </S.Section1>
      </S.Container>
    </S.ApplicationPage>
  );
};

export default ApplicationPage;
