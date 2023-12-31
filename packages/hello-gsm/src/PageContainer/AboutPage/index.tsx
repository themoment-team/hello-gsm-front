import type { NextPage } from 'next';
import * as S from './style';
import * as I from 'assets/svg';
import Image from 'next/image';
import {
  BackEnd,
  Design,
  DevOps,
  FrontEnd,
  Operating,
} from '@/public/data/about';
import { useEffect, useState } from 'react';

const AboutPage: NextPage = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    window.onresize = () => {
      setIsMobile(window.innerWidth < 640 ? true : false);
    };
  }, []);
  return (
    <>
      <S.AboutPage>
        <S.Section>
          <I.TMLogo />
          <S.Title>더모먼트</S.Title>
          <S.Desc>광주소프트웨어마이스터고등학교 입학 지원 시스템</S.Desc>
          <S.BigBall style={{ left: '-24vh' }} />
          <S.GreenBall style={{ left: '20vh' }} />
          <S.SmallBall />
          <S.SkyBlueBall />
        </S.Section>

        <S.Section>
          <S.SubTitle>비전</S.SubTitle>
          <S.Desc>더모먼트팀은 아래의 비전을 갖고 활동해요!</S.Desc>
          <S.WheelPicker>
            <S.PickerText>
              사용자의 순간을 한층 더 혁신 <br /> 하는 데 최적의 장소.
            </S.PickerText>
            <S.PickerText>
              사용자의 니즈를 고민하고 모든 일에 <br /> 높은 비즈니스 임팩트를
              창출해요.
            </S.PickerText>
            <S.PickerText>
              저희는 사용자의 순간을 깊이 통찰하고, <br /> 순간의 가치를
              비춰내요!
            </S.PickerText>
          </S.WheelPicker>
          <S.GreenBall
            style={{
              width: '12vh',
              height: '12vh',
              right: '-1vh',
              top: '94vh',
            }}
          />
        </S.Section>

        <S.Section>
          <S.SubTitle>팀원 소개</S.SubTitle>
          <S.Row>
            <S.TeamSection>
              <S.TeamTitle>
                <span className="DevOps">DevOps</span> Chapter
              </S.TeamTitle>
              <S.TeamSubTitle>
                클라우드 아키텍쳐를 구성하고 운영하는데 <br />
                사용되는 기술들을 연구합니다.
              </S.TeamSubTitle>
              <hr />
              <S.ProfileSection>
                {DevOps.map((profile, i) => (
                  <a
                    href={profile.githubURL}
                    target="_blank"
                    key={i}
                    rel="noreferrer"
                  >
                    <Image
                      src={profile.imageURL}
                      alt=""
                      width={75}
                      height={75}
                    />
                    <p>{profile.name}</p>
                  </a>
                ))}
              </S.ProfileSection>
            </S.TeamSection>
            <S.TeamSection>
              <S.TeamTitle>
                <span className="Operating">Operating</span> Chapter
              </S.TeamTitle>
              <S.TeamSubTitle>
                팀을 관리하고 개개인의 역량을 <br />
                끌어낼 수 있는 최선의 방법을 연구합니다.
              </S.TeamSubTitle>
              <hr />
              <S.ProfileSection>
                {Operating.map((profile, i) => (
                  <a
                    href={profile.githubURL}
                    target="_blank"
                    key={i}
                    rel="noreferrer"
                  >
                    <Image
                      src={profile.imageURL}
                      alt=""
                      width={75}
                      height={75}
                    />
                    <p>{profile.name}</p>
                  </a>
                ))}
              </S.ProfileSection>
            </S.TeamSection>
            <S.TeamSection>
              <S.TeamTitle>
                <span className="Design">Design</span> Chapter
              </S.TeamTitle>
              <S.TeamSubTitle>
                사용자의 관점에서 <br />
                디자인하는 팀입니다.
              </S.TeamSubTitle>
              <hr />
              <S.ProfileSection>
                {Design.map((profile, i) => (
                  <a
                    href={profile.githubURL}
                    target="_blank"
                    key={i}
                    rel="noreferrer"
                  >
                    <Image
                      src={profile.imageURL}
                      alt=""
                      width={75}
                      height={75}
                    />
                    <p>{profile.name}</p>
                  </a>
                ))}
              </S.ProfileSection>
            </S.TeamSection>
          </S.Row>
          <S.Row>
            <S.TeamSection>
              <S.TeamTitle>
                <span className="FrontEnd">FrontEnd</span> Chapter
              </S.TeamTitle>
              <S.TeamSubTitle>
                화면을 구상하고, 제작하며 사용자에게 <br />
                더 나은 UI/UX를 제공하기 위해 <br />
                끊임없이 연구합니다.
              </S.TeamSubTitle>
              <hr />
              {!isMobile ? (
                // 모바일사이즈가 아니면 일렬 사진
                <S.ProfileSection>
                  {FrontEnd.map((profile, i) => (
                    <a
                      href={profile.githubURL}
                      target="_blank"
                      key={i}
                      rel="noreferrer"
                    >
                      <Image
                        src={profile.imageURL}
                        alt=""
                        width={75}
                        height={75}
                      />
                      <p>{profile.name}</p>
                    </a>
                  ))}
                </S.ProfileSection>
              ) : (
                // 모바일 사이즈이면 2줄로 나눔
                <>
                  <S.ProfileSection>
                    {FrontEnd.map((profile, i) => (
                      <div key={i}>
                        {/* 인덱스가 0, 1, 2인 요소만 표시 */}
                        {i <= 2 ? (
                          <a
                            href={profile.githubURL}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image
                              src={profile.imageURL}
                              alt=""
                              width={75}
                              height={75}
                            />
                            <p>{profile.name}</p>
                          </a>
                        ) : null}
                      </div>
                    ))}
                  </S.ProfileSection>
                  <S.ProfileSection>
                    {/* 인덱스가 3, 4인 요소만 표시 */}
                    {FrontEnd.map((profile, i) => (
                      <div key={i}>
                        {i >= 3 ? (
                          <a
                            href={profile.githubURL}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image
                              src={profile.imageURL}
                              alt=""
                              width={75}
                              height={75}
                            />
                            <p>{profile.name}</p>
                          </a>
                        ) : null}
                      </div>
                    ))}
                  </S.ProfileSection>
                </>
              )}
            </S.TeamSection>
            <S.TeamSection>
              <S.TeamTitle>
                <span className="BackEnd">BackEnd</span> Chapter
              </S.TeamTitle>
              <S.TeamSubTitle>
                더모먼트팀의 다양한 백엔드 애플리케이션을 개발하고 <br />
                CS 적인 사고를 통해 데이터를 안정적이고 <br />
                유연하게 서빙 하는 것을 목표로 합니다.
              </S.TeamSubTitle>
              <hr />
              <S.ProfileSection>
                {BackEnd.map((profile, i) => (
                  <a
                    href={profile.githubURL}
                    target="_blank"
                    key={i}
                    rel="noreferrer"
                  >
                    <Image
                      src={profile.imageURL}
                      alt=""
                      width={75}
                      height={75}
                    />
                    <p>{profile.name}</p>
                  </a>
                ))}
              </S.ProfileSection>
            </S.TeamSection>
          </S.Row>
          <S.BigBall style={{ right: '-35vh', top: '280vh' }} />
          <S.SkyBlueBall style={{ left: '-7vh', top: '187vh' }} />
          <S.SmallBall style={{ left: '19vh', top: '209vh' }} />
        </S.Section>
      </S.AboutPage>
    </>
  );
};

export default AboutPage;
