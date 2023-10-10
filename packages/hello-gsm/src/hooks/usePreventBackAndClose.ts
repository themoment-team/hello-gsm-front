import { useEffect } from 'react';

const preventBack = () => {
  history.pushState(null, '', location.href);
  alert('작성 중 페이지 이동 시 내용은 저장되지 않습니다.');
};

const preventClose = (e: BeforeUnloadEvent) => {
  e.preventDefault();
  e.returnValue = '';
};

export const usePreventBackAndClose = () => {
  useEffect(() => {
    history.pushState(null, '', location.href);
    window.addEventListener('beforeunload', preventClose);
    window.addEventListener('popstate', preventBack);

    return () => {
      window.removeEventListener('beforeunload', preventClose);
      window.removeEventListener('popstate', preventBack);
    };
  }, []);
};
