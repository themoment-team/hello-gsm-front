import useStore from 'Stores/StoreContainer';
import * as S from './style';

interface FreeSemesterType {
  freeSemesterProps: string;
}
const FreeSemesterBtn: React.FC<FreeSemesterType> = ({ freeSemesterProps }) => {
  const { freeSemester, setFreeSemester, system } = useStore();

  return (
    <>
      {/* 시스템이 자유학기제이면 버튼이 보임 */}
      {system === '자유학기제' && (
        <>
          {/* 선택된 자유학기제와 props로 넘어온 학기가 같다면 ON이 보여지고 아니면 OFF가 보여짐 */}
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
