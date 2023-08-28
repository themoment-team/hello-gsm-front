import user from 'Api/user';
import { useEffect } from 'react';
import useStore from 'Stores/StoreContainer';

const useGetLogged = () => {
  const { setLogged } = useStore();
  const getLogged = async () => {
    try {
      await user.getMyInfo();
      setLogged(true);
    } catch (error) {
      setLogged(true);
    }
  };

  useEffect(() => {
    getLogged();
  }, []);
};

export default useGetLogged;
