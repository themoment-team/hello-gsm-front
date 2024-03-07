import { useEffect, useState } from 'react';

const useHandleWindowSize = () => {
  const [width, setWidth] = useState<number>();

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const eventArguments = ['resize', handleResize] as const;

  useEffect(() => {
    handleResize();

    window.addEventListener(...eventArguments);

    return () => {
      window.removeEventListener(...eventArguments);
    };
  }, []);

  return width;
};

export default useHandleWindowSize;
