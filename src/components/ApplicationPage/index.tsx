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
    relation: '지원자의 (모)',
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
        <S.Table>
          <thead>
            <tr>
              <S.Sub style={{ width: '3%', height: '300px' }} rowSpan={7}>
                인적사항
              </S.Sub>
            </tr>
            <tr>
              <S.Sub style={{ width: '3%', height: '160px' }} rowSpan={3}>
                지원자
              </S.Sub>
              <S.Sub>성 명</S.Sub>
              <td>{profile.name}</td>
              <S.Sub style={{ width: '3%' }}>성별</S.Sub>
              <td>남 여</td>
              <S.Sub>생년월일</S.Sub>
              <td>{profile.birth}</td>
              <td rowSpan={6}>
                <img src={profile.photoUrl} alt="" />
              </td>
            </tr>
            <tr>
              <S.Sub>주 소</S.Sub>
              <td colSpan={5}>{profile.address}</td>
            </tr>
            <tr>
              <S.Sub>연락처</S.Sub>
              <S.Sub>집전화</S.Sub>
              <td colSpan={2}>{profile.homeNumber}</td>
              <S.Sub>핸드폰</S.Sub>
              <td colSpan={1}>{profile.phoneNumber}</td>
            </tr>
            <tr>
              <S.Sub style={{ width: '3%' }} rowSpan={2}>
                보호자
              </S.Sub>
              <S.Sub style={{ height: '10px' }}>성 명</S.Sub>
              <td colSpan={2}>{profile.guardian.name}</td>
              <S.Sub>지원자와의 관계</S.Sub>
              <td colSpan={2}>{profile.guardian.relation}</td>
            </tr>
            <tr>
              <S.Sub>핸드폰</S.Sub>
              <td colSpan={5}>{profile.guardian.phoneNumber}</td>
            </tr>
            <tr>
              <S.Sub colSpan={3} style={{ height: '15%' }}>
                원서작성자(담임) <br /> 성명
              </S.Sub>

              <td colSpan={2} style={{ textAlign: 'end' }}>
                (인)
              </td>
              <S.Sub>핸드폰</S.Sub>
              <td>{profile.teacher.phoneNumber}</td>
            </tr>
          </thead>
        </S.Table>

        <S.Table>
          <thead>
            <tr>
              <S.Sub style={{ width: '3%', height: '300px' }} rowSpan={9}>
                지원자 현황
              </S.Sub>
            </tr>
            <tr>
              <S.Sub colSpan={2} rowSpan={2}>
                출신중학교
              </S.Sub>
              <td colSpan={2}>{profile.middleSchool}</td>
              <td colSpan={6}>2023년 졸업예정</td>
            </tr>
            <tr>
              <S.Sub>지역명</S.Sub>
              <td colSpan={7}>{profile.area}</td>
            </tr>
            <tr>
              <S.Sub colSpan={5}>전 형 구 분</S.Sub>
              <S.Sub colSpan={4}>사회통합전형의 대상 구분</S.Sub>
            </tr>
            <tr>
              <td colSpan={5}>일반전형 사회통합전형 특별전형</td>
              <td colSpan={4}>기회균등전형 사회다양성전형</td>
            </tr>
            <tr>
              <S.Sub rowSpan={2} style={{ width: '7%' }}>
                교과 성적
              </S.Sub>
              <S.Sub rowSpan={1} colSpan={1}>
                1-1
              </S.Sub>
              <S.Sub>1-2</S.Sub>
              <S.Sub>2-1</S.Sub>
              <S.Sub>2-2</S.Sub>
              <S.Sub>3-1</S.Sub>
              <S.Sub>예체능</S.Sub>
              <S.Sub>소계</S.Sub>
              <S.Sub rowSpan={2}>합계 (환산총점)</S.Sub>
            </tr>
            <tr>
              <td rowSpan={1} colSpan={1}>
                1234
              </td>
              <td>1234</td>
              <td>1234</td>
              <td>1234</td>
              <td>1234</td>
              <td>1234</td>
              <td>1234</td>
            </tr>
            <tr>
              <S.Sub rowSpan={2}>비교과성적</S.Sub>
              <S.Sub colSpan={3} rowSpan={1}>
                출석
              </S.Sub>
              <S.Sub colSpan={3}>봉사활동</S.Sub>
              <S.Sub colSpan={1}>소계</S.Sub>
              <td rowSpan={2}>.</td>
            </tr>
            <tr>
              <td colSpan={3} rowSpan={1}>
                .
              </td>
              <td colSpan={3}>.</td>
              <td colSpan={1}>.</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <S.Sub rowSpan={4} colSpan={2} style={{ height: '80px' }}>
                지원구분
              </S.Sub>
            </tr>
            <tr>
              <td colSpan={3}>1지망 학과</td>
              <td colSpan={3}>2지망 학과</td>
              <td colSpan={3}>3지망 학과</td>
            </tr>
            <tr>
              <td colSpan={3}>소프트웨어개발과</td>
              <td colSpan={3}>스마트IOT과</td>
              <td colSpan={3}>인공지능과</td>
            </tr>
            <tr>
              <td colSpan={9} style={{ textAlign: 'start' }}>
                1.(인공지능과/ 스마트IOT과/ 소프트웨어개발과) 중 지망 학과를
                순서대로 기록 <br />
                2. 지원학과는 희망 순에 따라 3개 학과를 모두 기록해야 한다.
              </td>
            </tr>
          </tbody>
        </S.Table>
      </S.Container>
    </S.ApplicationPage>
  );
};

export default ApplicationPage;
