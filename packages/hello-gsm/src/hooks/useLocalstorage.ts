import { useEffect, useState } from 'react';

const useLocalstorage = (key: string): Array<number> | undefined => {
  const [getItem, setItem] = useState<Array<number>>();
  useEffect(() => {
    const result = window.localStorage.getItem(key);
    if (result !== null) setItem(JSON.parse(result));
  }, []);
  console.log(getItem);
  return getItem;
};

export default useLocalstorage;
