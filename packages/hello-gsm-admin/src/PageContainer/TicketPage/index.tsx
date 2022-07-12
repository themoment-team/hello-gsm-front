import type { NextPage } from 'next';
import * as S from './style';

interface TicketType {
  registerNumber: number;
  name: string;
  birth: string;
  school: string;
  screening: string;
  idPhotoUrl: string;
}
const data: TicketType[] = [
  {
    registerNumber: 100001,
    name: '유시온',
    birth: '2005년 11월 9일',
    school: '풍암중학교',
    screening: '일반전형',
    idPhotoUrl:
      'https://hello-gsm-backend.s3.ap-northeast-2.amazonaws.com/176d2840-fb83-11ec-8bd2-4758bb13042e',
  },
  {
    registerNumber: 100002,
    name: '김형록',
    birth: '2000년 11월 9일',
    school: '어느중학교',
    screening: '특별전형',
    idPhotoUrl:
      'data:image/jpeg;base64,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',
  },
];

const TicketPage: NextPage = () => {
  return (
    <S.TicketPage>
      {data.map((user, i) => (
        <S.Ticket key={i}>
          <S.Table>
            <tbody>
              <tr>
                <td style={{ width: '50%' }} colSpan={2}>
                  수험자 안내사항
                </td>
                <td style={{ width: '50%' }} colSpan={3}>
                  수 험 표
                </td>
              </tr>
              <tr>
                <td style={{ width: '15%' }}>2차 전형 (직무적성소양평가)</td>
                <S.Left>2022.10.28.(금) 14:30 ~ 16:30</S.Left>
                <td rowSpan={6} style={{ width: '30%' }}>
                  <img src={user.idPhotoUrl} />
                </td>
                <S.Subject>접수번호</S.Subject>
                <td>{user.registerNumber}</td>
              </tr>
              <tr>
                <td rowSpan={2}>합격자 발표</td>
                <S.Left>본교 홈페이지</S.Left>
                <S.Subject>성명</S.Subject>
                <td>{user.name}</td>
              </tr>
              <tr>
                <S.Left>2022.11. 2.(수) 10:00</S.Left>
                <S.Subject rowSpan={2}>생년월일</S.Subject>
                <td rowSpan={2}>{user.birth}</td>
              </tr>
              <tr>
                <td rowSpan={2}>합격자 등록 및 서류 제출</td>
                <S.Left>우편 또는 방문</S.Left>
              </tr>
              <tr>
                <S.Left>
                  2022.11. 2.(수)~2022.11. 7.(월) <br />
                  09:00~17:00 (토·일요일 제외, <br />
                  마감시간 이전 도착분에 한하여 유효함.)
                </S.Left>
                <S.Subject>출신학교</S.Subject>
                <td>{user.school}</td>
              </tr>
              <tr>
                <td>합격자 서류</td>
                <S.Left>
                  건강진단서 1부 <br /> 입학등록동의서 1부
                </S.Left>
                <S.Subject>전형구분</S.Subject>
                <td>{user.screening}</td>
              </tr>
              <tr>
                <td>신입생 비전캠프</td>
                <td>2023. 1. 9.(월)~2023. 1.11.(수) 예정</td>
                <td rowSpan={2} colSpan={2}>
                  위 사람은 2023학년도 <br /> 본교 신입생 입학전형 지원자임을
                  확인함.
                  <p>2022년 &nbsp;&nbsp;월&nbsp;&nbsp; 일</p>
                  <S.Right>
                    광주소프트웨어마이스터고등학교장 <br /> [직인생략]
                  </S.Right>
                </td>
                <S.Subject>접수자</S.Subject>
              </tr>
              <tr>
                <S.Left colSpan={2}>
                  * 공지 사항: 홈페이지(gsm.gen.hs.kr)-입학 안내 <br />*
                  문의:062-949-6800
                </S.Left>
                <td>(인)</td>
              </tr>
            </tbody>
          </S.Table>
        </S.Ticket>
      ))}
    </S.TicketPage>
  );
};

export default TicketPage;
