import Image from 'next/image';

interface ProfileType {
  profile: {
    name: string;
    imageURL: string;
    githubURL: string;
  };
}

const Profile: React.FC<ProfileType> = ({ profile }) => (
  <a href={profile.githubURL} target="_blank" rel="noreferrer">
    <Image src={profile.imageURL} alt="" width={75} height={75} />
    <p>{profile.name}</p>
  </a>
);

export default Profile;
