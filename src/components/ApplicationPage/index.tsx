import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import { css } from '@emotion/react';
import { ProfileType } from 'type/profile';

const profile: ProfileType = {
  id: 2022,
  name: '유시온',
  gender: '여자',
  address: '광주광역시 서구 풍암동 우미광장아파트',
  homeNumber: '062 681 7815',
  phoneNumber: '010 9201 5487',
  birth: '2022년 11월 09일',
  middleSchool: '풍암중학교',
  area: '광주광역시 서구',
  photoUrl:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNSGTUntb7tiyrB0zEeemK8lJd3gGOSHILw&usqp=CAU',
  type: '일반전형',
  graduated: '2023년 졸업예정',
  socialType: '',
  class: {
    firstClass: '소프트웨어개발과',
    secondClass: '스마트IOT과',
    thirdClass: '인공지능과',
  },
  guardian: {
    name: '울엄마',
    relation: '지원자의 (모)',
    phoneNumber: '010 1234 5678',
  },
  teacher: {
    phoneNumber: '010 9876 5432',
  },
  subject: {
    one_one: 11,
    one_two: 12,
    two_one: 21,
    two_two: 22,
    three_one: 31,
    artsAndSports: 32,
    subTotal: 130,
  },
  nonSubject: {
    attendance: 365,
    volunteer: 20,
    subTotal: 385,
  },
  total: 515,
};

const ApplicationPage: NextPage = () => {
  useEffect(() => {
    // window.print();
  }, []);
  return (
    <>
      <S.ApplicationPage
        css={css`
          @media print {
            -webkit-print-color-adjust: exact;
            .warterMark {
              display: none;
            }
          }
        `}
      >
        <S.Document>
          <div className="warterMark">견본</div>
          <S.Template>[서식 1]</S.Template>
          <S.Title>광주소프트웨어마이스터고등학교 입학원서</S.Title>
          <S.Wrap>
            <S.SubTitle>2023학년도 신입생 입학전형</S.SubTitle>
            <S.Box>
              <S.ApplyNum>접수번호</S.ApplyNum>
              <S.Content>{profile.id}</S.Content>
            </S.Box>
          </S.Wrap>
          <S.Container>
            <S.Table>
              <thead>
                <tr>
                  <S.Subject style={{ width: '3%' }} rowSpan={7}>
                    인적사항
                  </S.Subject>
                </tr>
                <tr>
                  <S.Subject
                    style={{ width: '3%', height: '14vh' }}
                    rowSpan={3}
                  >
                    지원자
                  </S.Subject>
                  <S.Subject>성 명</S.Subject>
                  <td>{profile.name}</td>
                  <S.Subject style={{ width: '3%' }}>성별</S.Subject>
                  <td>{profile.gender}</td>
                  <S.Subject>생년월일</S.Subject>
                  <td>{profile.birth}</td>
                  <td rowSpan={6}>
                    <img src={profile.photoUrl} alt="" />
                  </td>
                </tr>
                <tr>
                  <S.Subject>주 소</S.Subject>
                  <td colSpan={5}>{profile.address}</td>
                </tr>
                <tr>
                  <S.Subject>연락처</S.Subject>
                  <S.Subject>집전화</S.Subject>
                  <td colSpan={2}>{profile.homeNumber}</td>
                  <S.Subject>핸드폰</S.Subject>
                  <td>{profile.phoneNumber}</td>
                </tr>
                <tr>
                  <S.Subject style={{ width: '3%' }} rowSpan={2}>
                    보호자
                  </S.Subject>
                  <S.Subject>성 명</S.Subject>
                  <td colSpan={2}>{profile.guardian.name}</td>
                  <S.Subject>지원자와의 관계</S.Subject>
                  <td colSpan={2}>{profile.guardian.relation}</td>
                </tr>
                <tr>
                  <S.Subject>핸드폰</S.Subject>
                  <td colSpan={5}>{profile.guardian.phoneNumber}</td>
                </tr>
                <tr>
                  <S.Subject colSpan={3}>
                    원서작성자(담임) <br /> 성명
                  </S.Subject>
                  <td colSpan={2} style={{ textAlign: 'end' }}>
                    (인)
                  </td>
                  <S.Subject>핸드폰</S.Subject>
                  <td>{profile.teacher.phoneNumber}</td>
                </tr>
              </thead>
            </S.Table>
            <S.Table>
              <tbody>
                <tr>
                  <S.Subject
                    style={{ width: '3%', height: '26vh' }}
                    rowSpan={9}
                  >
                    지원자 현황
                  </S.Subject>
                </tr>
                <tr>
                  <S.Subject colSpan={2} rowSpan={2}>
                    출신중학교
                  </S.Subject>
                  <td colSpan={2}>{profile.middleSchool}</td>
                  <td colSpan={6}>{profile.graduated}</td>
                </tr>
                <tr>
                  <S.Subject>지역명</S.Subject>
                  <td colSpan={7}>{profile.area}</td>
                </tr>
                <tr>
                  <S.Subject colSpan={5}>전 형 구 분</S.Subject>
                  <S.Subject colSpan={4}>사회통합전형의 대상 구분</S.Subject>
                </tr>
                <tr>
                  <td colSpan={5}>{profile.type}</td>
                  <td colSpan={4}>{profile.socialType}</td>
                </tr>
                <tr>
                  <S.Subject rowSpan={2} style={{ width: '10%' }}>
                    교과 <br /> 성적
                  </S.Subject>
                  <S.Subject>1-1</S.Subject>
                  <S.Subject>1-2</S.Subject>
                  <S.Subject>2-1</S.Subject>
                  <S.Subject>2-2</S.Subject>
                  <S.Subject>3-1</S.Subject>
                  <S.Subject>예체능</S.Subject>
                  <S.Subject>소계</S.Subject>
                  <S.Subject rowSpan={2}>합계 (환산총점)</S.Subject>
                </tr>
                <tr>
                  <td>{profile.subject.one_one}</td>
                  <td>{profile.subject.one_two}</td>
                  <td>{profile.subject.two_one}</td>
                  <td>{profile.subject.two_two}</td>
                  <td>{profile.subject.three_one}</td>
                  <td>{profile.subject.artsAndSports}</td>
                  <td>{profile.subject.subTotal}</td>
                </tr>
                <tr>
                  <S.Subject rowSpan={2}>
                    비교과 <br /> 성적
                  </S.Subject>
                  <S.Subject colSpan={3}>출석</S.Subject>
                  <S.Subject colSpan={3}>봉사활동</S.Subject>
                  <S.Subject>소계</S.Subject>
                  <td rowSpan={2}>{profile.total}</td>
                </tr>
                <tr>
                  <td colSpan={3}>{profile.nonSubject.attendance}</td>
                  <td colSpan={3}>{profile.nonSubject.volunteer}</td>
                  <td>{profile.nonSubject.subTotal}</td>
                </tr>
                <tr>
                  <S.Subject rowSpan={4} colSpan={2} style={{ height: '7vh' }}>
                    지원구분
                  </S.Subject>
                </tr>
                <tr>
                  <td colSpan={3}>1지망 학과</td>
                  <td colSpan={3}>2지망 학과</td>
                  <td colSpan={3}>3지망 학과</td>
                </tr>
                <tr>
                  <td colSpan={3}>{profile.class.firstClass}</td>
                  <td colSpan={3}>{profile.class.secondClass}</td>
                  <td colSpan={3}>{profile.class.thirdClass}</td>
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
            <S.Details>
              <S.Pledge>
                위 학생은 2023학년도 귀교 제1학년에 입학하고자 소정의 서류를
                갖추어 지원하며, &nbsp;
                <strong>
                  다른 산업수요맞춤형(마이스터)고등학교에 이중지원하지 않을 것을
                  서약
                </strong>
                합니다.
              </S.Pledge>
              <S.Date>
                <p>년</p> <p>월</p> <p>일</p>
              </S.Date>
              <S.Signature>
                <p>지원자 :</p> <p>(인)</p>
              </S.Signature>
              <S.Signature>
                <p>보호자 :</p> <p>(인)</p>
              </S.Signature>
              <S.Principal>광주소프트웨어마이스터고등학교장 귀하</S.Principal>
              <S.True>위 기재 사항이 사실과 같음을 확인합니다.</S.True>
              <S.Seal>중학교장[직인]</S.Seal>
            </S.Details>
          </S.Container>
        </S.Document>
      </S.ApplicationPage>
    </>
  );
};

export default ApplicationPage;
