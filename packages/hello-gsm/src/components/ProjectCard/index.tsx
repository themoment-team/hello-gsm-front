import Image from 'next/image';

import * as S from './style';

interface Props {
  project: {
    imageUrl: string;
    title: string;
    description: string;
  };
}

const ProjectCard: React.FC<Props> = ({
  project: { imageUrl, title, description },
}) => {
  return (
    <S.CardWrapper>
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
};

export default ProjectCard;
