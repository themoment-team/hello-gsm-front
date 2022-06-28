import { useEffect } from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import { css } from '@emotion/react';
import { ProfileType } from 'type/profile';
const profile: ProfileType = {
  user: {
    name: '유시온',
    birth: '2005년 11월 09일',
    gender: '여자',
    cellphoneNumber: '010-9201-5487',
  },
  application: {
    registrationNumber: 2022,
    isDocumentReception: true,
    isFinalSubmission: true,
    isFirstResult: true,
    isFinalResult: true,
    idPhotoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNSGTUntb7tiyrB0zEeemK8lJd3gGOSHILw&usqp=CAU',
    guardianName: '우럼마',
    guardianCellphoneNumber: '010-1111-5487',
    teacherName: '황명희',
    teacherCellphoneNumber: '010-2323-5487',
    schoolLocation: '광주광역시 서구 풍암동',
    schoolName: '풍암중학교',
    screening: '일반전형',
  },
  applicationDetails: {
    address: '광주광역시 서구 풍암동 우미광장아파트',
    telephoneNumber: '062-681-7815',
    guardianRelation: '지원자의 (모)',
    graduation_year: '2023년',
    graduation_month: '2월',
    educationStatus: '졸업예정',
    schoolTelephoneNumber: '010-2224-2323',
    score2_1: 20,
    score2_2: 20,
    score3_1: 20,
    generalCurriculumScoreSubtotal: 100,
    artSportsScore: 20,
    curriculumScoreSubtotal: 120,
    attendanceScore: 20,
    volunteerScore: 20,
    nonCurriculumScoreSubtotal: 40,
    scoreTotal: 160,
    firstWantedMajor: '소프트웨어개발과',
    secondWantedMajor: '스마트IoT과',
    thirdWantedMajor: '인공지능과',
  },
};

const ApplicationPage: NextPage = () => {
  const { user, application, applicationDetails } = profile;
  useEffect(() => {
    window.print();
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
            @page {
              margin: 0;
            }
            body {
              margin: 1.6cm;
            }
          }
        `}
      >
        <S.Document>
          <div className="warterMark">견본</div>
          <p>[서식 1]</p>
          <S.Title>광주소프트웨어마이스터고등학교 입학원서</S.Title>
          <S.Wrap>
            <S.SubTitle style={{ fontSize: '1.5vh', fontWeight: 700 }}>
              2023학년도 신입생 입학전형
            </S.SubTitle>
            <S.Box>
              <S.ApplyNum>접수번호</S.ApplyNum>
              <S.Content>{application.registrationNumber}</S.Content>
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
                  <S.Subject style={{ width: '3%' }} rowSpan={3}>
                    지원자
                  </S.Subject>
                  <S.Subject>성 명</S.Subject>
                  <td>{user.name}</td>
                  <S.Subject style={{ width: '3%' }}>성별</S.Subject>
                  <td>{user.gender}</td>
                  <S.Subject>생년월일</S.Subject>
                  <td>{user.birth}</td>
                  <td
                    rowSpan={6}
                    style={{
                      width: '19vh',
                      height: '20vh',
                    }}
                  >
                    <img src={application.idPhotoUrl} alt="" />
                  </td>
                </tr>
                <tr>
                  <S.Subject>주 소</S.Subject>
                  <td colSpan={5}>{applicationDetails.address}</td>
                </tr>
                <tr>
                  <S.Subject>연락처</S.Subject>
                  <S.Subject>집전화</S.Subject>
                  <td colSpan={2}>{applicationDetails.telephoneNumber}</td>
                  <S.Subject>핸드폰</S.Subject>
                  <td>{user.cellphoneNumber}</td>
                </tr>
                <tr>
                  <S.Subject style={{ width: '3%' }} rowSpan={2}>
                    보호자
                  </S.Subject>
                  <S.Subject>성 명</S.Subject>
                  <td colSpan={2}>{application.guardianName}</td>
                  <S.Subject>지원자와의 관계</S.Subject>
                  <td colSpan={2}>{applicationDetails.guardianRelation}</td>
                </tr>
                <tr>
                  <S.Subject>핸드폰</S.Subject>
                  <td colSpan={5}>{application.guardianCellphoneNumber}</td>
                </tr>
                <tr>
                  <S.Subject colSpan={3}>
                    원서작성자(담임) <br /> 성명
                  </S.Subject>
                  <td colSpan={2} style={{ textAlign: 'end' }}>
                    {application.teacherName}(인)
                  </td>
                  <S.Subject>핸드폰</S.Subject>
                  <td>{applicationDetails.telephoneNumber}</td>
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
                  <td colSpan={2}>{application.schoolLocation}</td>
                  <td colSpan={6}>{applicationDetails.educationStatus}</td>
                </tr>
                <tr>
                  <S.Subject>지역명</S.Subject>
                  <td colSpan={7}>{applicationDetails.address}</td>
                </tr>
                <tr>
                  <S.Subject colSpan={9}>전 형 구 분</S.Subject>
                </tr>
                <tr>
                  <td colSpan={9}>{application.screening}</td>
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
                  <td className="slash"></td>
                  <td className="slash"></td>
                  <td>{applicationDetails.score2_1}</td>
                  <td>{applicationDetails.score2_2}</td>
                  <td>{applicationDetails.score3_1}</td>
                  <td>{applicationDetails.artSportsScore}</td>
                  <td>{applicationDetails.curriculumScoreSubtotal}</td>
                </tr>
                <tr>
                  <S.Subject rowSpan={2}>
                    비교과 <br /> 성적
                  </S.Subject>
                  <S.Subject colSpan={3}>출석</S.Subject>
                  <S.Subject colSpan={3}>봉사활동</S.Subject>
                  <S.Subject>소계</S.Subject>
                  <td rowSpan={2}>{applicationDetails.scoreTotal}</td>
                </tr>
                <tr>
                  <td colSpan={3}>{applicationDetails.attendanceScore}</td>
                  <td colSpan={3}>{applicationDetails.volunteerScore}</td>
                  <td>{applicationDetails.nonCurriculumScoreSubtotal}</td>
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
                  <td colSpan={3}>{applicationDetails.firstWantedMajor}</td>
                  <td colSpan={3}>{applicationDetails.secondWantedMajor}</td>
                  <td colSpan={3}>{applicationDetails.thirdWantedMajor}</td>
                </tr>
                <tr>
                  <td colSpan={9} style={{ textAlign: 'start' }}>
                    1.(인공지능과/ 스마트IoT과/ 소프트웨어개발과) 중 지망 학과를
                    순서대로 기록. <br />
                    2. 지원학과는 희망 순에 따라 3개 학과를 모두 기록해야 함.
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
                <p>지원자 :</p> <p style={{ textAlign: 'end' }}>(인)</p>
              </S.Signature>
              <S.Signature>
                <p>보호자 :</p> <p style={{ textAlign: 'end' }}>(인)</p>
              </S.Signature>
              <S.Principal>광주소프트웨어마이스터고등학교장 귀하</S.Principal>
              <S.True>위 기재 사항이 사실과 같음을 확인합니다.</S.True>
              <S.Seal>중학교장[직인]</S.Seal>
            </S.Details>
          </S.Container>
          <S.Materials>
            2차 전형 응시 준비물 : 신분증[학생증], 필기구 등
          </S.Materials>
        </S.Document>
      </S.ApplicationPage>
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
          <p>[서식 3]</p>
          <S.Title style={{ fontSize: '2vh' }}>
            2023학년도 광주소프트웨어마이스터고등학교 입학 전형성적 입력 확인서
          </S.Title>
          <S.Wrap>
            <S.SubTitle>일반교과</S.SubTitle>
            <S.Box>
              <S.ApplyNum>접수번호</S.ApplyNum>
              <S.Content>{application.registrationNumber}</S.Content>
            </S.Box>
          </S.Wrap>
          <S.Table>
            <tbody>
              <tr>
                <td className="backSlash" rowSpan={2}>
                  <div style={{ textAlign: 'right' }}>학년</div>
                  <div style={{ textAlign: 'left' }}>과목</div>
                </td>
                <S.Subject>1학년 1학기</S.Subject>
                <S.Subject>1학년 2학기</S.Subject>
                <S.Subject>2학년 1학기</S.Subject>
                <S.Subject>2학년 2학기</S.Subject>
                <S.Subject>3학년 1학기</S.Subject>
              </tr>
              <tr>
                <S.Subject>성취도/평어</S.Subject>
                <S.Subject>성취도/평어</S.Subject>
                <S.Subject>성취도/평어</S.Subject>
                <S.Subject>성취도/평어</S.Subject>
                <S.Subject>성취도/평어</S.Subject>
              </tr>
              <tr>
                <td>국어</td>
                <td rowSpan={10} className="slash"></td>
                <td rowSpan={10} className="slash"></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>도덕</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>사회</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>역사</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>수학</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>과학</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>기술가정</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>영어</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>ㅁㄴㅇ</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>ㅁㄴㅇ</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>환산점</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </S.Table>
          <S.SubTitle>체육예술교과</S.SubTitle>
          <S.Table style={{ marginBottom: '1vh' }}>
            <tbody>
              <tr>
                <td className="backSlash" rowSpan={2}>
                  <div style={{ textAlign: 'right' }}>학년</div>
                  <div style={{ textAlign: 'left' }}>과목</div>
                </td>
                <S.Subject>1학년 1학기</S.Subject>
                <S.Subject>1학년 2학기</S.Subject>
                <S.Subject>2학년 1학기</S.Subject>
                <S.Subject>2학년 2학기</S.Subject>
                <S.Subject>3학년 1학기</S.Subject>
              </tr>
              <tr>
                <S.Subject>성취도/평어</S.Subject>
                <S.Subject>성취도/평어</S.Subject>
                <S.Subject>성취도/평어</S.Subject>
                <S.Subject>성취도/평어</S.Subject>
                <S.Subject>성취도/평어</S.Subject>
              </tr>
              <tr>
                <td>체육</td>
                <td rowSpan={3} className="slash"></td>
                <td rowSpan={3} className="slash"></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>미술</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>음악</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>환산점</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </S.Table>
          <S.SubTitle>비교과</S.SubTitle>
          <S.Table style={{ marginBottom: '1vh' }}>
            <tbody>
              <tr>
                <S.Subject rowSpan={2}>학년</S.Subject>
                <S.Subject colSpan={6}>출결상황</S.Subject>
                <S.Subject colSpan={2}>봉사활동</S.Subject>
              </tr>
              <tr>
                <S.Subject>결석</S.Subject>
                <S.Subject>지각</S.Subject>
                <S.Subject>조퇴</S.Subject>
                <S.Subject>결과</S.Subject>
                <S.Subject>환산일수</S.Subject>
                <S.Subject>환산점</S.Subject>
                <S.Subject>시간</S.Subject>
                <S.Subject>환산점</S.Subject>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td rowSpan={3}>1</td>
                {/* 환산일수 */}
                <td rowSpan={3}>1</td>
                {/* 출결상황환산점 */}
                <td>1</td>
                <td rowSpan={3}>11</td>
                {/* 봉사활동 환산점 */}
              </tr>
              <tr>
                <td>2</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>3</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </S.Table>
          <S.Table style={{ marginBottom: '1vh', width: '80%' }}>
            <tbody>
              <tr>
                <S.Subject colSpan={4}>입력자 확인</S.Subject>
              </tr>
              <tr>
                <S.Subject>담임교사</S.Subject>
                <td style={{ textAlign: 'end', width: '25%' }}>(인)</td>
                <S.Subject>지원자</S.Subject>
                <td style={{ textAlign: 'end', width: '25%' }}>(인)</td>
              </tr>
            </tbody>
          </S.Table>
          <S.Table style={{ width: '50%' }}>
            <tbody>
              <tr>
                <S.Subject rowSpan={2}>접수자 확인</S.Subject>
                <S.Subject>1차</S.Subject>
                <td style={{ textAlign: 'end', width: '40%' }}>(인)</td>
              </tr>
              <tr>
                <S.Subject>2차</S.Subject>
                <td style={{ textAlign: 'end' }}>(인)</td>
              </tr>
            </tbody>
          </S.Table>
          <S.ScoreDetails>
            <S.True>위와 같이 입력하고 확인하였음을 증명합니다.</S.True>
            <S.Date>
              <p>년</p> <p>월</p> <p>일</p>
            </S.Date>
            <S.SignatureSection>
              <p>광주소프트웨어마이스터고등학교장 귀하</p>
              <p>중학교장[직인]</p>
            </S.SignatureSection>
          </S.ScoreDetails>
        </S.Document>
      </S.ApplicationPage>
    </>
  );
};

export default ApplicationPage;
