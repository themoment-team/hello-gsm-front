import type { NextPage } from 'next';
import { useEffect } from 'react';
import { TicketDataType } from 'Types/ticket';
import * as S from './style';
import * as I from 'Assets/svg';
import application from 'Api/application';

const TicketPage: NextPage<TicketDataType> = ({ data }) => {
  console.log(data);

  useEffect(() => {
    const GetData = async () => {
      const res = await application.ticket();
      console.log(res);
    };
    GetData();
  }, []);

  const TryPrint = () => {
    window.print();
  };

  useEffect(() => {
    // 페이지 첫 렌더링 시 인쇄화면 보여지게
    TryPrint();
  }, []);

  return (
    <S.TicketPage>
      {data?.map((user, i) => (
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
                <td rowSpan={6} style={{ width: '30%', height: '100%' }}>
                  <img src={user.application_image.idPhotoUrl} />
                </td>
                <S.Subject>접수번호</S.Subject>
                <td>{user.application.registrationNumber}</td>
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
                {user.application.schoolName ? (
                  <td>{user.application.schoolName}</td>
                ) : (
                  <S.Slash />
                )}
              </tr>
              <tr>
                <td>합격자 서류</td>
                <S.Left>
                  건강진단서 1부 <br /> 입학등록동의서 1부
                </S.Left>
                <S.Subject>전형구분</S.Subject>
                <td>{user.application.screening}</td>
              </tr>
              <tr>
                <td>신입생 비전캠프</td>
                <S.Left>2023. 1. 9.(월)~2023. 1.11.(수) 예정</S.Left>
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
          <S.Dash />
        </S.Ticket>
      ))}
      {/* 인쇄버튼 */}
      <S.PrintBtn onClick={TryPrint}>
        <I.PrintIcon />
        <S.PrintDesc>인쇄하기</S.PrintDesc>
      </S.PrintBtn>
    </S.TicketPage>
  );
};

export default TicketPage;
