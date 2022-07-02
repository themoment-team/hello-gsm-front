import type { NextPage } from 'next';
import * as S from './style';
import { css } from '@emotion/react';
import { GetApplicationType } from 'type/application';
import useLocalstorage from 'hooks/useLocalstorage';
import useToString from 'Utils/Calculate/ToString';
import { useEffect } from 'react';

const ApplicationPage: NextPage<GetApplicationType> = ({ data }) => {
  console.log(data);
  const score2_1 = useToString(useLocalstorage('score2_1'));
  const score2_2 = useToString(useLocalstorage('score2_2'));
  const score3_1 = useToString(useLocalstorage('score3_1'));
  const artSportsScore = useToString(useLocalstorage('artSportsScore'));
  const absentScore = useLocalstorage('absentScore');
  const attendanceScore = useLocalstorage('attendanceScore');
  const volunteerScore = useLocalstorage('volunteerScore');
  const subjects = useLocalstorage('subjects');
  const newSubjects = useLocalstorage('newSubjects');
  // 환산일수
  const conversionDays =
    data?.application?.application_score?.attendanceScore &&
    (30 - data?.application?.application_score?.attendanceScore) / 3;
  const userBirth = new Date(data.birth);
  const Birth = {
    year: userBirth.getFullYear(),
    month: userBirth.getMonth() + 1,
    date: userBirth.getDate(),
  };
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
              <S.Content>{data?.application?.registrationNumber}</S.Content>
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
                  <td>{data?.name}</td>
                  <S.Subject style={{ width: '3%' }}>성별</S.Subject>
                  <td>{data?.gender}</td>
                  <S.Subject>생년월일</S.Subject>
                  <td>
                    {Birth.year}-{Birth.month}-{Birth.date}
                  </td>
                  <td
                    rowSpan={6}
                    style={{
                      width: '19vh',
                      height: '20vh',
                    }}
                  >
                    <img src={data?.application_image?.idPhotoUrl} alt="" />
                  </td>
                </tr>
                <tr>
                  <S.Subject>주 소</S.Subject>
                  <td colSpan={5}>
                    {data?.application?.application_details?.address}
                  </td>
                </tr>
                <tr>
                  <S.Subject>연락처</S.Subject>
                  <S.Subject>집전화</S.Subject>
                  <td colSpan={2}>
                    {data?.application?.application_details?.telephoneNumber}
                  </td>
                  <S.Subject>핸드폰</S.Subject>
                  <td>{data?.cellphoneNumber}</td>
                </tr>
                <tr>
                  <S.Subject style={{ width: '3%' }} rowSpan={2}>
                    보호자
                  </S.Subject>
                  <S.Subject>성 명</S.Subject>
                  <td colSpan={2}>
                    {data?.application?.application_details?.guardianName}
                  </td>
                  <S.Subject>지원자와의 관계</S.Subject>
                  <td colSpan={2}>
                    {data?.application?.application_details?.guardianRelation}
                  </td>
                </tr>
                <tr>
                  <S.Subject>핸드폰</S.Subject>
                  <td colSpan={5}>
                    {data?.application?.guardianCellphoneNumber}
                  </td>
                </tr>
                <tr>
                  <S.Subject colSpan={3}>
                    원서작성자(담임) <br /> 성명
                  </S.Subject>
                  <td colSpan={2} style={{ textAlign: 'end' }}>
                    {data?.application?.application_details?.teacherName}(인)
                  </td>
                  <S.Subject>핸드폰</S.Subject>
                  <td>
                    {data?.application?.application_details?.telephoneNumber}
                  </td>
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
                  <td colSpan={2}>
                    {data?.application?.application_details?.schoolLocation}
                  </td>
                  <td colSpan={6}>
                    {data?.application?.application_details?.educationStatus}
                  </td>
                </tr>
                <tr>
                  <S.Subject>지역명</S.Subject>
                  <td colSpan={7}>
                    {data?.application?.application_details?.schoolLocation}
                  </td>
                </tr>
                <tr>
                  <S.Subject colSpan={9}>전 형 구 분</S.Subject>
                </tr>
                <tr>
                  <td colSpan={9}>{data?.application?.screening}</td>
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
                  <td>{data?.application?.application_score?.score2_1}</td>
                  <td>{data?.application?.application_score?.score2_2}</td>
                  <td>{data?.application?.application_score?.score3_1}</td>
                  <td>
                    {data?.application?.application_score?.artSportsScore}
                  </td>
                  <td>
                    {
                      data?.application?.application_score
                        ?.curriculumScoreSubtotal
                    }
                  </td>
                </tr>
                <tr>
                  <S.Subject rowSpan={2}>
                    비교과 <br /> 성적
                  </S.Subject>
                  <S.Subject colSpan={3}>출석</S.Subject>
                  <S.Subject colSpan={3}>봉사활동</S.Subject>
                  <S.Subject>소계</S.Subject>
                  <td rowSpan={2}>
                    {data?.application?.application_score?.scoreTotal}
                  </td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    {data?.application?.application_score?.attendanceScore}
                  </td>
                  <td colSpan={3}>
                    {data?.application?.application_score?.volunteerScore}
                  </td>
                  <td>
                    {
                      data?.application?.application_score
                        ?.nonCurriculumScoreSubtotal
                    }
                  </td>
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
                  <td colSpan={3}>
                    {data?.application?.application_details?.firstWantedMajor}
                  </td>
                  <td colSpan={3}>
                    {data?.application?.application_details?.secondWantedMajor}
                  </td>
                  <td colSpan={3}>
                    {data?.application?.application_details?.thirdWantedMajor}
                  </td>
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
              <S.Content>{data?.application?.registrationNumber}</S.Content>
            </S.Box>
          </S.Wrap>

          <S.ScoreTable>
            <S.Column>
              <S.GradeAndSubject>
                <div style={{ textAlign: 'right' }}>학년</div>
                <div style={{ textAlign: 'left' }}>과목</div>
              </S.GradeAndSubject>
              {subjects?.map(subject => (
                <S.Value key={subject}>{subject}</S.Value>
              ))}
              {newSubjects?.map(subject => (
                <S.Value key={subject}>{subject}</S.Value>
              ))}
              <S.Value>환산점</S.Value>
            </S.Column>
            <S.Column>
              <S.Semester>
                <S.DivSubject>1학년 1학기</S.DivSubject>
                <S.DivSubject>성취도/평어</S.DivSubject>
              </S.Semester>
              <S.Slash></S.Slash>
            </S.Column>
            <S.Column>
              <S.Semester>
                <S.DivSubject>1학년 2학기</S.DivSubject>
                <S.DivSubject>성취도/평어</S.DivSubject>
              </S.Semester>
              <S.Slash></S.Slash>
            </S.Column>
            <S.Column>
              <S.Semester>
                <S.DivSubject>2학년 1학기</S.DivSubject>
                <S.DivSubject>성취도/평어</S.DivSubject>
              </S.Semester>
              {score2_1?.map((score, i) => (
                <S.Value key={i}>{score}</S.Value>
              ))}
              <S.Value>
                {data?.application?.application_score?.score2_1}
              </S.Value>
            </S.Column>
            <S.Column>
              <S.Semester>
                <S.DivSubject>2학년 2학기</S.DivSubject>
                <S.DivSubject>성취도/평어</S.DivSubject>
              </S.Semester>
              {score2_2?.map((score, i) => (
                <S.Value key={i}>{score}</S.Value>
              ))}
              <S.Value>
                {data?.application?.application_score?.score2_2}
              </S.Value>
            </S.Column>
            <S.Column>
              <S.Semester>
                <S.DivSubject>3학년 1학기</S.DivSubject>
                <S.DivSubject>성취도/평어</S.DivSubject>
              </S.Semester>
              {score3_1?.map((score, i) => (
                <S.Value key={i}>{score}</S.Value>
              ))}
              <S.Value>
                {data?.application?.application_score?.score3_1}
              </S.Value>
            </S.Column>
          </S.ScoreTable>

          <S.SubTitle>체육예술교과</S.SubTitle>
          <S.TestTable style={{ height: 200 }}>
            <S.ColumnWrapper>
              <S.Column>
                <S.GradeAndSubject>
                  <div style={{ textAlign: 'right' }}>학년</div>
                  <div style={{ textAlign: 'left' }}>과목</div>
                </S.GradeAndSubject>
                <S.Value>1</S.Value>
                <S.Value>2</S.Value>
                <S.Value>3</S.Value>
              </S.Column>
              <S.Column>
                <S.Semester>
                  <S.Semester>
                    <S.DivSubject>1학년 1학기</S.DivSubject>
                    <S.DivSubject>성취도/평어</S.DivSubject>
                  </S.Semester>
                </S.Semester>
                <S.Slash></S.Slash>
              </S.Column>
              <S.Column>
                <S.Semester>
                  <S.Semester>
                    <S.DivSubject>1학년 2학기</S.DivSubject>
                    <S.DivSubject>성취도/평어</S.DivSubject>
                  </S.Semester>
                </S.Semester>
                <S.Slash></S.Slash>
              </S.Column>
              <S.Column>
                <S.Semester>
                  <S.DivSubject>2학년 1학기</S.DivSubject>
                  <S.DivSubject>성취도/평어</S.DivSubject>
                </S.Semester>
                <S.Value>{artSportsScore && artSportsScore[0]}</S.Value>
                <S.Value>{artSportsScore && artSportsScore[1]}</S.Value>
                <S.Value>{artSportsScore && artSportsScore[2]}</S.Value>
              </S.Column>
              <S.Column>
                <S.Semester>
                  <S.DivSubject>2학년 2학기</S.DivSubject>
                  <S.DivSubject>성취도/평어</S.DivSubject>
                </S.Semester>
                <S.Value>{artSportsScore && artSportsScore[3]}</S.Value>
                <S.Value>{artSportsScore && artSportsScore[4]}</S.Value>
                <S.Value>{artSportsScore && artSportsScore[5]}</S.Value>
              </S.Column>
              <S.Column>
                <S.Semester>
                  <S.DivSubject>3학년 1학기</S.DivSubject>
                  <S.DivSubject>성취도/평어</S.DivSubject>
                </S.Semester>
                <S.Value>{artSportsScore && artSportsScore[6]}</S.Value>
                <S.Value>{artSportsScore && artSportsScore[7]}</S.Value>
                <S.Value>{artSportsScore && artSportsScore[8]}</S.Value>
              </S.Column>
            </S.ColumnWrapper>
            <S.Test>
              <S.Column style={{ width: '20%' }}>환산점</S.Column>
              <S.Value>
                {data?.application?.application_score?.artSportsScore}
              </S.Value>
            </S.Test>
          </S.TestTable>
          <S.SubTitle>비교과</S.SubTitle>

          <S.Table style={{ marginBottom: '1.2vh' }}>
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
                <td>{absentScore && absentScore[0]}</td>
                <td>{attendanceScore && attendanceScore[0]}</td>
                <td>{attendanceScore && attendanceScore[3]}</td>
                <td>{attendanceScore && attendanceScore[6]}</td>
                <td rowSpan={3}>
                  {/* 환산일수 구하기 */}
                  {conversionDays}
                </td>
                <td rowSpan={3}>
                  {data?.application?.application_score?.attendanceScore}
                </td>
                <td>{volunteerScore && volunteerScore[0]}</td>
                <td rowSpan={3}>
                  {data?.application?.application_score?.volunteerScore}
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>{absentScore && absentScore[1]}</td>
                <td>{attendanceScore && attendanceScore[1]}</td>
                <td>{attendanceScore && attendanceScore[4]}</td>
                <td>{attendanceScore && attendanceScore[7]}</td>
                <td>{volunteerScore && volunteerScore[1]}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>{absentScore && absentScore[2]}</td>
                <td>{attendanceScore && attendanceScore[2]}</td>
                <td>{attendanceScore && attendanceScore[5]}</td>
                <td>{attendanceScore && attendanceScore[8]}</td>
                <td>{volunteerScore && volunteerScore[2]}</td>
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
