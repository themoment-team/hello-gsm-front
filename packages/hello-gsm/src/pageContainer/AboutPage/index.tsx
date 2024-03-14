import type { NextPage } from 'next';

import { useEffect, useState } from 'react';

import { Profile, ProjectCard } from 'components';

import { ProjectType } from 'types/project';

import useHandleWindowSize from 'hooks/useHandleWindowSize';

import * as I from 'assets/svg';

import {
  BackEnd,
  Design,
  DevOps,
  FrontEnd,
  Operating,
} from '@/public/data/about';

import * as S from './style';

const projects: ProjectType[] = [
  {
    imageUrl: '/Images/hellogsmCover.jpeg',
    title: 'Hello, GSM',
    description:
      'Hello, GSM은 신입생의 입학 지원을 도와주는 GSM 입학 지원 서비스입니다.',
    link: 'https://www.hellogsm.kr/',
  },
  {
    imageUrl: '/Images/gsmnetworkingCover.jpeg',
    title: 'GSM Networking',
    description:
      'GSM Networking은 학교를 졸업 및 취업한 사람들을 멘토로, 학교 내 취업 준비생을 멘티로 하여 멘토 멘티를 연결해주고 취업 조언을 받을 수 있도록 도와주는 서비스입니다.',
    link: 'https://www.gsm-networking.com/',
  },
  {
    imageUrl: '/Images/officialgsmCover.jpeg',
    title: 'official GSM',
    description:
      'official GSM은 광주소프트웨어마이스터고의 공식 홈페이지로 학교 소개 및 소식을 알리는 서비스입니다.',
    link: 'https://official.hellogsm.kr/',
  },
];

// 애니메이션 실행 순서
const animationOrder = [0, 2, 1] as const;

// 200ms마다 발동하도록 설정
const throttleInterval = 200 as const;

enum Device {
  PC = 'PC',
  TALBET = 'TABLET',
  MOBILE = 'MOBILE',
}

enum WindowSizes {
  TALBET = 1420,
  MOBILE = 640,
}

const job = {
  backend: BackEnd,
  design: Design,
  devops: DevOps,
  frontend: FrontEnd,
  operating: Operating,
};

type JobType = 'backend' | 'design' | 'devops' | 'frontend' | 'operating';

const AboutPage: NextPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [elementScrollPosition, setElementScrollPosition] = useState(1000);

  const [isAnimate, setIsAnimate] = useState<number>(0);

  const windowSize = useHandleWindowSize();

  let isThrottled = false;

  const handleScroll = () => {
    if (!isThrottled) {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, throttleInterval);
    }
  };

  const handleElementScroll = () => {
    const element = document.querySelector('.projects');
    if (element) {
      const rect = element.getBoundingClientRect();
      setElementScrollPosition(rect.top + window.scrollY);
    }
  };

  const [device, setDevice] = useState<Device>(Device.PC);

  useEffect(() => {
    let device = Device.PC;

    if (windowSize < WindowSizes.MOBILE) device = Device.MOBILE;
    else if (windowSize < WindowSizes.TALBET) device = Device.TALBET;

    setDevice(device);
  }, [windowSize]);

  useEffect(() => {
    // 스크롤 이벤트 관리
    window.addEventListener('scroll', () => {
      handleElementScroll();
      handleScroll();
    });

    const element = document.querySelector('.projects');
    if (element) {
      handleElementScroll();
      element.addEventListener('scroll', handleElementScroll);
    }

    return () => {
      // 언마운트 시 제거
      window.removeEventListener('scroll', handleScroll);
      if (element) {
        element.removeEventListener('scroll', handleElementScroll);
      }
    };
  }, []);

  const startAnimation = () => {
    //순차적으로 애니메이션 진행
    for (let i = 0; i < projects.length; i++)
      setTimeout(() => setIsAnimate(prev => prev + 1), i * 1000);
  };

  useEffect(() => {
    if (scrollPosition > elementScrollPosition - 1000) startAnimation();
  }, [scrollPosition, elementScrollPosition]);

  const returnList = (listType: JobType) => {
    const jobList = job[listType];

    const unit = device === Device.MOBILE ? 3 : 5;

    const profileList = [];
    for (let i = 0; i < jobList.length; i++)
      if (i % unit === 0) profileList.push(jobList.slice(i, i + unit));

    return (
      <>
        {profileList.map((list, i) => (
          <S.ProfileSection key={i}>
            {list.map(profile => (
              <Profile profile={profile} key={i + profile.name} />
            ))}
          </S.ProfileSection>
        ))}
      </>
    );
  };

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
          <S.SubTitle className="projects">프로젝트 소개</S.SubTitle>
          <S.Desc>더모먼트는 이런 프로젝트를 진행하고 있어요!</S.Desc>
          {!(device === Device.PC) ? (
            <S.MobileSizeProjects>
              {projects.map(project => (
                <ProjectCard key={project.imageUrl} project={project} />
              ))}
            </S.MobileSizeProjects>
          ) : (
            <S.Projects>
              {projects.map((project, index) => (
                <S.ProjectCardWrapper
                  key={project.imageUrl}
                  isAnimate={
                    isAnimate > animationOrder.indexOf(index as 0 | 1 | 2)
                  }
                >
                  <ProjectCard project={project} />
                </S.ProjectCardWrapper>
              ))}
            </S.Projects>
          )}
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
              {returnList('devops')}
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
              {returnList('operating')}
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
              {returnList('design')}
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
              {returnList('frontend')}
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
              {returnList('backend')}
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
