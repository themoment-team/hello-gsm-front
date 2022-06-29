import { useEffect, useState } from 'react';

/**
 *
 * @param key localstorage 키 값
 * @returns - key 값으로 받아 온 value를 parse하여 값을 리턴함
 */
const useLocalstorage = (key: string): Array<number> | undefined => {
  const [getItem, setItem] = useState<Array<number>>();
  useEffect(() => {
    const result = window.localStorage.getItem(key);
    if (result === 'undefined')
      return; // 추가과목이 없을 때 parse하지 못하도록 예외처리
    else if (result !== null) setItem(JSON.parse(result));
  }, []);
  return getItem;
};

export default useLocalstorage;
