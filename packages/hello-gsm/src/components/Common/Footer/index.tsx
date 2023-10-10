import * as I from 'Assets/svg';

import * as S from './style';

const Footer = () => (
  <S.Footer>
    <S.FooterContent>
      <I.FooterGSMLogo />
      <S.FooterTextWrapper>
        <S.SiteInfo>
          <S.Copyright>
            ©2023 Copyright 광주소프트웨어마이스터고등학교 ALL RIGHTS RESERVED.
          </S.Copyright>
          <S.LinkWrapper>
            <a
              href="https://official.hellogsm.kr/policy/privacy"
              target="_blank"
              rel="noreferrer"
            >
              개인정보처리방침
            </a>
            <a
              href="https://official.hellogsm.kr/policy/cctv"
              target="_blank"
              rel="noreferrer"
            >
              영상정보처리기기운영·관리방침
            </a>
            <a
              href="https://official.hellogsm.kr/policy/copyright"
              target="_blank"
              rel="noreferrer"
            >
              저작권신고 및 보호규정
            </a>
            <a
              href="https://official.hellogsm.kr/about/location"
              target="_blank"
              rel="noreferrer"
            >
              찾아오시는 길
            </a>
          </S.LinkWrapper>
        </S.SiteInfo>
        <S.SchoolInfo>
          우) 62423 광주광역시 광산구 상무대로 312
          <br />
          교무실 062)949-6800(08:30~16:30) 행정실 062)949-6806(08:30~16:30)
          <br />
          팩스 062)941-7545 당직실 062)949-6899(평일야간, 휴일)
        </S.SchoolInfo>
      </S.FooterTextWrapper>
    </S.FooterContent>
  </S.Footer>
);

export default Footer;
