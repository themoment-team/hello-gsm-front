import Image from 'next/image';

import * as S from './style';

interface Props {
  project: {
    imageUrl: string;
    title: string;
    description: string;
    link: string;
  };
}

const ProjectCard: React.FC<Props> = ({
  project: { imageUrl, title, description, link },
}) => (
  <S.CardWrapper onClick={() => window.open(link, '_blank')}>
    <S.ImageWrapper>
      <S.ImageWrapper className="test">
        <Image src={imageUrl} fill alt="project image" />
      </S.ImageWrapper>
    </S.ImageWrapper>
    <S.TextWrapper>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardDescription>{description}</S.CardDescription>
    </S.TextWrapper>
  </S.CardWrapper>
);

export default ProjectCard;
