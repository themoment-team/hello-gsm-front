import React from 'react';
import { ApplicationDataType } from 'type/application';
import { isGED } from 'type/ged';
import { formatGraduation, formatMajor, formatScreening } from 'Utils/Format';
import * as S from './style';

const ApplicantsStatus: React.FC<ApplicationDataType> = ({
  data: { admissionGrade, admissionInfo },
}) => {
  const isGEDScore = isGED(admissionGrade);

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
          {admissionInfo.schoolName ? (
            <td colSpan={2}>{admissionInfo.schoolName}</td>
          ) : (
            <S.Slash colSpan={2} />
          )}
          <td colSpan={6}>{formatGraduation(admissionInfo.graduation)}</td>
        </tr>
        <tr>
          <S.Subject>지역명</S.Subject>
          {admissionInfo.schoolLocation ? (
            <td colSpan={7}>{admissionInfo.schoolLocation}</td>
          ) : (
            <S.Slash colSpan={7} />
          )}
        </tr>
        <tr>
          <S.Subject colSpan={9}>전 형 구 분</S.Subject>
        </tr>
        <tr>
          <td colSpan={9}>{formatScreening(admissionInfo.screening)}</td>
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
          {isGEDScore || admissionGrade.grade1Semester1Score === 0 ? (
            <S.Slash />
          ) : (
            <td>{admissionGrade.grade1Semester1Score}</td>
          )}
          {isGEDScore || admissionGrade.grade1Semester2Score === 0 ? (
            <S.Slash />
          ) : (
            <td>{admissionGrade.grade1Semester2Score}</td>
          )}
          {isGEDScore || admissionGrade.grade2Semester1Score === 0 ? (
            <S.Slash />
          ) : (
            <td>{isGEDScore || admissionGrade.grade2Semester1Score}</td>
          )}
          {isGEDScore || admissionGrade.grade2Semester2Score === 0 ? (
            <S.Slash />
          ) : (
            <td>{admissionGrade.grade2Semester2Score}</td>
          )}
          {isGEDScore || admissionGrade.grade3Semester1Score === 0 ? (
            <S.Slash />
          ) : (
            <td>{admissionGrade.grade3Semester1Score}</td>
          )}
          {isGEDScore || admissionGrade.artisticScore === 0 ? (
            <S.Slash />
          ) : (
            <td>{admissionGrade.artisticScore}</td>
          )}
          <td>
            {isGED(admissionGrade)
              ? admissionGrade.gedTotalScore
              : admissionGrade.curricularSubtotalScore}
          </td>
        </tr>
        <tr>
          <S.Subject rowSpan={2}>
            비교과 <br /> 성적
          </S.Subject>
          <S.Subject colSpan={3}>출석</S.Subject>
          <S.Subject colSpan={3}>봉사활동</S.Subject>
          <S.Subject>소계</S.Subject>
          <td colSpan={2} rowSpan={2}>
            {admissionGrade.totalScore}
          </td>
        </tr>
        <tr>
          {isGEDScore || admissionGrade.attendanceScore === 0 ? (
            <S.Slash colSpan={3} />
          ) : (
            <td colSpan={3}>{admissionGrade.attendanceScore}</td>
          )}
          {isGEDScore || admissionGrade.volunteerScore === 0 ? (
            <S.Slash colSpan={3} />
          ) : (
            <td colSpan={3}>{admissionGrade.volunteerScore}</td>
          )}
          <td>
            {' '}
            {isGED(admissionGrade)
              ? admissionGrade.gedMaxScore
              : admissionGrade.extracurricularSubtotalScore}
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
            {formatMajor(admissionInfo.desiredMajor.firstDesiredMajor)}
          </td>
          <td colSpan={3}>
            {formatMajor(admissionInfo.desiredMajor.secondDesiredMajor)}
          </td>
          <td colSpan={3}>
            {formatMajor(admissionInfo.desiredMajor.thirdDesiredMajor)}
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
  );
};

export default ApplicantsStatus;
