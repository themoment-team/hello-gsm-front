import React from 'react';
import type { NextPage } from 'next';
import Header from 'components/Common/Header';
import * as S from './style';
import * as I from '../../Assets/svg';
import Think from '../../../public/Think.png';
import Image from 'next/image';
import {
  BackEnd,
  Design,
  DevOps,
  FrontEnd,
  Operating,
} from '../../../public/data/about';

const AboutPage: NextPage = () => {
  return (
    <>
      <Header />
      <S.AboutPage>
        <S.Section>
          <I.TMLogo />
          <S.Title>더모먼트팀</S.Title>
          <S.Desc>광주소프트웨어마이스터고등학교 입학 지원 시스템</S.Desc>
          <S.SubTitle>비전</S.SubTitle>
          <S.Desc>더모먼트팀은 아래의 비전을 갖고 활동해요!</S.Desc>
          <S.BigBall style={{ left: '-24vh' }} />
          <S.GreenBall style={{ left: '20vh' }} />
          <S.SmallBall />
          <S.SkyBlueBall />
        </S.Section>

        <S.Section2>
          <S.WheelPicker>
            <S.PickerText>
              사용자의 순간을 한층 더 혁신하는 데 최적의 장소.
            </S.PickerText>
            <S.PickerText>
              사용자의 니즈를 고민하고 모든 일에 높은 비즈니스 임팩트를
              창출해요.
            </S.PickerText>
            <S.PickerText>
              저희는 사용자의 순간을 깊이 통찰하고, 순간의 가치를 비춰내요!
            </S.PickerText>
          </S.WheelPicker>
          <Image src={Think} alt="" />
          <S.GreenBall
            style={{
              width: '12vh',
              height: '12vh',
              right: '-1vh',
              top: '94vh',
            }}
          />
        </S.Section2>

        <S.Section>
          <S.SubTitle>팀원 소개</S.SubTitle>
          <S.Row>
            <div>
              <S.TeamTitle>
                <span className="DevOps">DevOps</span> Chapter
              </S.TeamTitle>
              <S.TeamSubTitle>
                클라우드 아키텍쳐를 <br /> 구성하고 운영하는데 사용되는 기술들을
                연구합니다.
              </S.TeamSubTitle>
              <S.ProfileSection>
                {DevOps.map((profile, i) => (
                  <a
                    href={profile.githubURL}
                    target="_blank"
                    key={i}
                    rel="noreferrer"
                  >
                    <S.Profile>
                      <Image
                        src={profile.imageURL}
                        alt=""
                        width={75}
                        height={75}
                      />
                      <p>{profile.name}</p>
                    </S.Profile>
                  </a>
                ))}
              </S.ProfileSection>
            </div>
            <div>
              <S.TeamTitle>
                <span className="Operating">Operating</span> Chapter
              </S.TeamTitle>
              <S.TeamSubTitle>
                팀을 관리하고 개개인의 <br /> 역량을 끌어내는 팀이에요.
              </S.TeamSubTitle>
              <S.ProfileSection>
                {Operating.map((profile, i) => (
                  <a
                    href={profile.githubURL}
                    target="_blank"
                    key={i}
                    rel="noreferrer"
                  >
                    <S.Profile>
                      <Image
                        src={profile.imageURL}
                        alt=""
                        width={75}
                        height={75}
                      />
                      <p>{profile.name}</p>
                    </S.Profile>
                  </a>
                ))}
              </S.ProfileSection>
            </div>
            <div>
              <S.TeamTitle>
                <span className="Design">Design</span> Chapter
              </S.TeamTitle>
              <S.TeamSubTitle>
                디자인 파트를 <br /> 담당하고 있는 팀이에요
              </S.TeamSubTitle>
              <S.ProfileSection>
                {Design.map((profile, i) => (
                  <a
                    href={profile.githubURL}
                    target="_blank"
                    key={i}
                    rel="noreferrer"
                  >
                    <S.Profile>
                      <Image
                        src={profile.imageURL}
                        alt=""
                        width={75}
                        height={75}
                      />
                      <p>{profile.name}</p>
                    </S.Profile>
                  </a>
                ))}
              </S.ProfileSection>
            </div>
          </S.Row>

          <S.Row>
            <div>
              <S.TeamTitle>
                <span className="FrontEnd">FrontEnd</span> Chapter
              </S.TeamTitle>
              <S.TeamSubTitle>
                화면을 구상하고, 제작하며 <br /> 사용자에게 더 나은 UI/UX를
                <br />
                제공하기 위해 끊임없이 연구합니다.
              </S.TeamSubTitle>
              <S.ProfileSection>
                {FrontEnd.map((profile, i) => (
                  <a
                    href={profile.githubURL}
                    target="_blank"
                    key={i}
                    rel="noreferrer"
                  >
                    <S.Profile>
                      <Image
                        src={profile.imageURL}
                        alt=""
                        width={75}
                        height={75}
                      />
                      <p>{profile.name}</p>
                    </S.Profile>
                  </a>
                ))}
              </S.ProfileSection>
            </div>
            <div>
              <S.TeamTitle>
                <span className="BackEnd">BackEnd</span> Chapter
              </S.TeamTitle>
              <S.TeamSubTitle>
                서버 애플리케이션을 개발하고, <br /> 깊은 CS 지식을 통해
                안정적인 서비스를 만들어 나아갑니다.
              </S.TeamSubTitle>
              <S.ProfileSection>
                {BackEnd.map((profile, i) => (
                  <a
                    href={profile.githubURL}
                    target="_blank"
                    key={i}
                    rel="noreferrer"
                  >
                    <S.Profile>
                      <Image
                        src={profile.imageURL}
                        alt=""
                        width={75}
                        height={75}
                      />
                      <p>{profile.name}</p>
                    </S.Profile>
                  </a>
                ))}
              </S.ProfileSection>
            </div>
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
