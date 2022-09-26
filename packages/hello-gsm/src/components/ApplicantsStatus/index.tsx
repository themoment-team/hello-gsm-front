import React from 'react';
import { GetApplicationType } from 'type/application';
import * as S from './style';

const ApplicantsStatus: React.FC<GetApplicationType> = ({
  data: { application },
}) => {
  const application_score = application?.application_score;
  const application_details = application?.application_details;
  return (
    <S.Table>
      <tbody>
        <tr>
          <S.Subject style={{ width: '3%', height: '26vh' }} rowSpan={9}>
            지원자 현황
          </S.Subject>
        </tr>
        <tr>
          <S.Subject colSpan={2} rowSpan={2}>
            출신중학교
          </S.Subject>
          {application?.schoolName ? (
            <td colSpan={2}>{application?.schoolName}</td>
          ) : (
            <S.Slash colSpan={2} />
          )}
          <td colSpan={6}>{application_details?.educationStatus}</td>
        </tr>
        <tr>
          <S.Subject>지역명</S.Subject>
          {application?.schoolName ? (
            <td colSpan={7}>{application_details?.schoolLocation}</td>
          ) : (
            <S.Slash colSpan={7} />
          )}
        </tr>
        <tr>
          <S.Subject colSpan={9}>전 형 구 분</S.Subject>
        </tr>
        <tr>
          <td colSpan={9}>{application?.screening}</td>
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
          {application_score?.score1_1 && application_score?.score1_1 > 0 ? (
            <td>{application_score?.score1_1}</td>
          ) : (
            <S.Slash />
          )}
          {application_score?.score1_2 && application_score?.score1_2 > 0 ? (
            <td>{application_score?.score1_2}</td>
          ) : (
            <S.Slash />
          )}
          {application_score?.score2_1 && application_score?.score2_1 > 0 ? (
            <td>{application_score?.score2_1}</td>
          ) : (
            <S.Slash />
          )}
          {application_score?.score2_2 && application_score?.score2_2 > 0 ? (
            <td>{application_score?.score2_2}</td>
          ) : (
            <S.Slash />
          )}
          {application_score?.score3_1 && application_score?.score3_1 > 0 ? (
            <td>{application_score?.score3_1}</td>
          ) : (
            <S.Slash />
          )}
          {application_score?.artSportsScore &&
          application_score?.artSportsScore > 0 ? (
            <td>{application_score?.artSportsScore}</td>
          ) : (
            <S.Slash />
          )}
          <td>{application_score?.curriculumScoreSubtotal}</td>
        </tr>
        <tr>
          <S.Subject rowSpan={2}>
            비교과 <br /> 성적
          </S.Subject>
          <S.Subject colSpan={3}>출석</S.Subject>
          <S.Subject colSpan={3}>봉사활동</S.Subject>
          <S.Subject>소계</S.Subject>
          {application_score?.scoreTotal &&
          application_score?.scoreTotal > 0 ? (
            <td colSpan={2} rowSpan={2}>
              {application_score?.scoreTotal}
            </td>
          ) : (
            <td colSpan={2} rowSpan={2}>
              {application_score?.rankPercentage}
            </td>
          )}
        </tr>
        <tr>
          {application_score?.attendanceScore &&
          application_score?.attendanceScore > 0 ? (
            <td colSpan={3}>{application_score?.attendanceScore}</td>
          ) : (
            <S.Slash colSpan={3} />
          )}
          {application_score?.volunteerScore &&
          application_score?.volunteerScore > 0 ? (
            <td colSpan={3}>{application_score?.volunteerScore}</td>
          ) : (
            <S.Slash colSpan={3} />
          )}
          <td>{application_score?.nonCurriculumScoreSubtotal}</td>
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
          <td colSpan={3}>{application_details?.firstWantedMajor}</td>
          <td colSpan={3}>{application_details?.secondWantedMajor}</td>
          <td colSpan={3}>{application_details?.thirdWantedMajor}</td>
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
  );
};

export default ApplicantsStatus;
