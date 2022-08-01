import { useEffect, useState } from 'react';

/**
 *
 * @param key localstorage 키 값
 * @returns - key 값으로 받아 온 value를 parse하여 값을 리턴함
 */
const useSubjectsLocalstorage = (key: string): Array<string> | undefined => {
  const [getItem, setItem] = useState<Array<string>>();
  useEffect(() => {
    const result = window.localStorage.getItem(key);
    if (result === 'undefined')
      return; // 추가과목이 없을 때 parse하지 못하도록 예외처리
    else if (result !== null) setItem(JSON.parse(result));
  }, []);
  return getItem;
};

export default useSubjectsLocalstorage;
