import type { NextPage } from 'next';
import * as S from './style';
import { GetApplicationType } from 'type/application';
import useLocalstorage from 'hooks/useLocalstorage';
import useToString from 'Utils/Calculate/ToString';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import ApplicationStatus from 'components/ApplicantsStatus';
import * as I from 'Assets/svg';
import useStore from 'Stores/StoreContainer';

const ApplicationPage: NextPage<GetApplicationType> = ({
  data: {
    application,
    application_image,
    birth,
    name,
    gender,
    cellphoneNumber,
  },
  data,
}) => {
  const { freeSemester, system } = useStore();
  console.log(freeSemester, system);
  // 로컬스토리지 값을 가져와서 등급으로 표시
  const score1_1 = useToString(useLocalstorage('score1_1')) ?? []; // null 값이면 빈 배열
  const score1_2 = useToString(useLocalstorage('score1_2')) ?? [];
  const score2_1 = useToString(useLocalstorage('score2_1')) ?? [];
  const score2_2 = useToString(useLocalstorage('score2_2')) ?? [];
  const score3_1 = useToString(useLocalstorage('score3_1')) ?? [];
  const artSportsScore = useToString(useLocalstorage('artSportsScore')) ?? [];
  const absentScore = useLocalstorage('absentScore') ?? [];
  const attendanceScore = useLocalstorage('attendanceScore') ?? [];
  const volunteerScore = useLocalstorage('volunteerScore') ?? [];
  const subjects = useLocalstorage('subjects');
  const newSubjects = useLocalstorage('newSubjects');
  const nonSubjects = useLocalstorage('nonSubjects');
  // 환산일수
  const conversionDays =
    application?.application_score?.attendanceScore &&
    (30 - application?.application_score?.attendanceScore) / 3;

  const userBirth = new Date(birth);
  // 생년월일을 YYYY-MM-DD형식에 맞게 포맷
  const Formatbirth = dayjs()
    .set('year', userBirth.getFullYear())
    .set('month', userBirth.getMonth())
    .set('date', userBirth.getDate())
    .format('YYYY-MM-DD');

  const TryPrint = () => {
    window.print();
  };

  useEffect(() => {
    // 페이지 첫 렌더링 시 인쇄화면 보여지게
    // TryPrint();
  }, []);

  return (
    <>
      {/* 입학원서 */}
      <S.ApplicationPage>
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
              <S.Content>{application?.registrationNumber}</S.Content>
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
                  <td>{name}</td>
                  <S.Subject style={{ width: '3%' }}>성별</S.Subject>
                  <td>{gender}</td>
                  <S.Subject>생년월일</S.Subject>
                  <td>{Formatbirth}</td>
                  <td
                    rowSpan={6}
                    style={{
                      width: '18vh',
                      height: '25vh',
                      backgroundImage: `url(
                        ${application_image?.idPhotoUrl}
                      )`,
                      backgroundSize: '18vh 25vh',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></td>
                </tr>
                <tr>
                  <S.Subject>주 소</S.Subject>
                  <td colSpan={5}>
                    {application?.application_details?.address}
                  </td>
                </tr>
                <tr>
                  <S.Subject>연락처</S.Subject>
                  <S.Subject>집전화</S.Subject>

                  {application?.application_details?.telephoneNumber ? (
                    <td colSpan={2}>
                      {application?.application_details?.telephoneNumber}
                    </td>
                  ) : (
                    <S.Slash colSpan={2} />
                  )}
                  <S.Subject>핸드폰</S.Subject>
                  <td>{cellphoneNumber}</td>
                </tr>
                <tr>
                  <S.Subject style={{ width: '3%' }} rowSpan={2}>
                    보호자
                  </S.Subject>
                  <S.Subject>성 명</S.Subject>
                  <td colSpan={2}>
                    {application?.application_details?.guardianName}
                  </td>
                  <S.Subject>지원자와의 관계</S.Subject>
                  <td colSpan={2}>
                    {application?.application_details?.guardianRelation}
                  </td>
                </tr>
                <tr>
                  <S.Subject>핸드폰</S.Subject>
                  <td colSpan={5}>{application?.guardianCellphoneNumber}</td>
                </tr>
                <tr>
                  <S.Subject colSpan={3}>
                    원서작성자(담임) <br /> 성명
                  </S.Subject>
                  {application?.application_details?.teacherName ? (
                    <td colSpan={2} style={{ textAlign: 'end' }}>
                      {application?.application_details?.teacherName}(인)
                    </td>
                  ) : (
                    <S.Slash colSpan={2} />
                  )}

                  <S.Subject>핸드폰</S.Subject>
                  {application?.teacherCellphoneNumber ? (
                    <td>{application?.teacherCellphoneNumber}</td>
                  ) : (
                    <S.Slash />
                  )}
                </tr>
              </thead>
            </S.Table>
            {/* 지원자현황 컴포넌트 */}
            <ApplicationStatus data={data} />
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
      {/* 검정고시가 아닌 학생만 성적 입력 확인서 보여주기 */}
      {application?.application_details?.educationStatus !== '검정고시' && (
        <S.ApplicationPage>
          <S.Document>
            <div className="warterMark">견본</div>
            <p>[서식 3]</p>
            <S.Title style={{ fontSize: '2vh' }}>
              2023학년도 광주소프트웨어마이스터고등학교 입학 전형성적 입력
              확인서
            </S.Title>
            <S.Wrap>
              <S.SubTitle>일반교과</S.SubTitle>
              <S.Box>
                <S.ApplyNum>접수번호</S.ApplyNum>
                <S.Content>{application?.registrationNumber}</S.Content>
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
                {/* 자유학년제거나 자유학기제를 시행한 학기이면 점수를 보여주지 않음 */}
                {system === '자유학년제' || freeSemester === '1-1' ? (
                  <S.DivSlash />
                ) : (
                  <>
                    {score1_1?.map((score, i) => (
                      <S.Value key={i}>{score}</S.Value>
                    ))}
                    <S.Value>
                      {application?.application_score?.score1_1}
                    </S.Value>
                  </>
                )}
              </S.Column>
              <S.Column>
                <S.Semester>
                  <S.DivSubject>1학년 2학기</S.DivSubject>
                  <S.DivSubject>성취도/평어</S.DivSubject>
                </S.Semester>
                {/* 자유학년제거나 자유학기제를 시행한 학기이면 점수를 보여주지 않음 */}
                {system === '자유학년제' || freeSemester === '1-2' ? (
                  <S.DivSlash />
                ) : (
                  <>
                    {score1_2?.map((score, i) => (
                      <S.Value key={i}>{score}</S.Value>
                    ))}
                    <S.Value>
                      {application?.application_score?.score1_2}
                    </S.Value>
                  </>
                )}
              </S.Column>
              <S.Column>
                <S.Semester>
                  <S.DivSubject>2학년 1학기</S.DivSubject>
                  <S.DivSubject>성취도/평어</S.DivSubject>
                </S.Semester>
                {freeSemester === '2-1' ? (
                  <S.DivSlash />
                ) : (
                  <>
                    {' '}
                    {score2_1?.map((score, i) => (
                      <S.Value key={i}>{score}</S.Value>
                    ))}
                    <S.Value>
                      {application?.application_score?.score2_1}
                    </S.Value>
                  </>
                )}
              </S.Column>
              <S.Column>
                <S.Semester>
                  <S.DivSubject>2학년 2학기</S.DivSubject>
                  <S.DivSubject>성취도/평어</S.DivSubject>
                </S.Semester>
                {score2_2?.map((score, i) => (
                  <S.Value key={i}>{score}</S.Value>
                ))}
                <S.Value>{application?.application_score?.score2_2}</S.Value>
              </S.Column>
              <S.Column>
                <S.Semester>
                  <S.DivSubject>3학년 1학기</S.DivSubject>
                  <S.DivSubject>성취도/평어</S.DivSubject>
                </S.Semester>
                {score3_1?.map((score, i) => (
                  <S.Value key={i}>{score}</S.Value>
                ))}
                <S.Value>{application?.application_score?.score3_1}</S.Value>
              </S.Column>
            </S.ScoreTable>

            <S.SubTitle>체육예술교과</S.SubTitle>
            <S.NonScoreTable style={{ height: '17vh' }}>
              <S.ColumnWrapper>
                <S.Column>
                  <S.GradeAndSubject>
                    <div style={{ textAlign: 'right' }}>학년</div>
                    <div style={{ textAlign: 'left' }}>과목</div>
                  </S.GradeAndSubject>
                  {nonSubjects?.map((nonSubject, i) => (
                    <S.Value key={i}>{nonSubject}</S.Value>
                  ))}
                </S.Column>
                <S.Column>
                  <S.Semester>
                    <S.Semester>
                      <S.DivSubject>1학년 1학기</S.DivSubject>
                      <S.DivSubject>성취도/평어</S.DivSubject>
                    </S.Semester>
                  </S.Semester>
                  <S.DivSlash />
                </S.Column>
                <S.Column>
                  <S.Semester>
                    <S.Semester>
                      <S.DivSubject>1학년 2학기</S.DivSubject>
                      <S.DivSubject>성취도/평어</S.DivSubject>
                    </S.Semester>
                  </S.Semester>
                  <S.DivSlash />
                </S.Column>
                <S.Column>
                  <S.Semester>
                    <S.DivSubject>2학년 1학기</S.DivSubject>
                    <S.DivSubject>성취도/평어</S.DivSubject>
                  </S.Semester>
                  <S.Value>{artSportsScore[0]}</S.Value>
                  <S.Value>{artSportsScore[1]}</S.Value>
                  <S.Value>{artSportsScore[2]}</S.Value>
                </S.Column>
                <S.Column>
                  <S.Semester>
                    <S.DivSubject>2학년 2학기</S.DivSubject>
                    <S.DivSubject>성취도/평어</S.DivSubject>
                  </S.Semester>
                  <S.Value>{artSportsScore[3]}</S.Value>
                  <S.Value>{artSportsScore[4]}</S.Value>
                  <S.Value>{artSportsScore[5]}</S.Value>
                </S.Column>
                <S.Column>
                  <S.Semester>
                    <S.DivSubject>3학년 1학기</S.DivSubject>
                    <S.DivSubject>성취도/평어</S.DivSubject>
                  </S.Semester>
                  <S.Value>{artSportsScore[6]}</S.Value>
                  <S.Value>{artSportsScore[7]}</S.Value>
                  <S.Value>{artSportsScore[8]}</S.Value>
                </S.Column>
              </S.ColumnWrapper>
              <S.ConversionPoint>
                <S.Column style={{ width: '20%' }}>환산점</S.Column>
                <S.Value>
                  {application?.application_score?.artSportsScore}
                </S.Value>
              </S.ConversionPoint>
            </S.NonScoreTable>
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
                  <td>{absentScore[0]}</td>
                  <td>{attendanceScore[0]}</td>
                  <td>{attendanceScore[3]}</td>
                  <td>{attendanceScore[6]}</td>
                  <td rowSpan={3}>
                    {/* 환산일수 구하기 */}
                    {conversionDays}
                  </td>
                  <td rowSpan={3}>
                    {application?.application_score?.attendanceScore}
                  </td>
                  <td>{volunteerScore[0]}</td>
                  <td rowSpan={3}>
                    {application?.application_score?.volunteerScore}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>{absentScore[1]}</td>
                  <td>{attendanceScore[1]}</td>
                  <td>{attendanceScore[4]}</td>
                  <td>{attendanceScore[7]}</td>
                  <td>{volunteerScore[1]}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>{absentScore[2]}</td>
                  <td>{attendanceScore[2]}</td>
                  <td>{attendanceScore[5]}</td>
                  <td>{attendanceScore[8]}</td>
                  <td>{volunteerScore[2]}</td>
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
            <div>
              <S.True>위와 같이 입력하고 확인하였음을 증명합니다.</S.True>
              <S.Date>
                <p>년</p> <p>월</p> <p>일</p>
              </S.Date>
              <S.SignatureSection>
                <p>광주소프트웨어마이스터고등학교장 귀하</p>
                <p>중학교장[직인]</p>
              </S.SignatureSection>
            </div>
          </S.Document>
        </S.ApplicationPage>
      )}
      {/* 인쇄버튼 */}
      <S.PrintBtn onClick={TryPrint}>
        <I.PrintIcon />
        <S.PrintDesc>인쇄하기</S.PrintDesc>
      </S.PrintBtn>
    </>
  );
};

export default ApplicationPage;
