import { useState, useEffect } from 'react';
/**
 *
 * @param key - localstorage 키 값
 * @returns key 값으로 받아 온 value가 있다면 Int로 형변환하여 리턴함
 */
const useGEDLocalStorage = (key: string) => {
  const [getItem, setItem] = useState<string | null | undefined>();
  useEffect(() => {
    setItem(window.localStorage.getItem(key));
  }, []);
  return getItem ? parseInt(getItem) : null;
};

export default useGEDLocalStorage;
