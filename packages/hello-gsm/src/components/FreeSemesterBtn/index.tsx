import useStore from 'Stores/StoreContainer';
import * as S from './style';

interface FreeSemesterType {
  freeSemesterProps: string;
}
const FreeSemesterBtn: React.FC<FreeSemesterType> = ({ freeSemesterProps }) => {
  const { freeSemester, setFreeSemester, system } = useStore();
  return (
    <>
      {system === '자유학기제' && (
        <>
          {freeSemester === freeSemesterProps ? (
            <S.FreeSemesterBtn
              onClick={() => setFreeSemester('')}
              type="button"
            >
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
      )}
    </>
  );
};

export default FreeSemesterBtn;
