import { useEffect } from 'react';

import { user } from 'apis';
import useStore from 'stores/StoreContainer';

const useGetLogged = () => {
  const { setLogged } = useStore();
  const getLogged = async () => {
    try {
      await user.getMyInfo();
      setLogged(true);
    } catch (error) {
      setLogged(false);
    }
  };

  useEffect(() => {
    getLogged();
  }, []);
};

export default useGetLogged;
