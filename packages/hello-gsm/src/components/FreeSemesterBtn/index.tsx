import useStore from 'Stores/StoreContainer';
import * as S from './style';

interface FreeSemesterType {
  freeSemesterProps: string;
}
const FreeSemesterBtn: React.FC<FreeSemesterType> = ({ freeSemesterProps }) => {
  const { freeSemester, setFreeSemester } = useStore();
  return (
    <>
      {freeSemester === freeSemesterProps ? (
        <S.FreeSemesterBtn onClick={() => setFreeSemester('')} type="button">
          ON
        </S.FreeSemesterBtn>
      ) : (
        <S.OffBtn
          onClick={() => setFreeSemester(freeSemesterProps)}
          type="button"
        >
          OFF
        </S.OffBtn>
      )}
    </>
  );
};

export default FreeSemesterBtn;
