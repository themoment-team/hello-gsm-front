import { useRef, useCallback, useEffect } from 'react';

function useInfiniteScroll() {
  const loadMoreRef = useRef(null);

  const handleObserver = useCallback(entries => {
    const [target] = entries;
    if (target.isIntersecting) {
      console.log('hello');
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
  }, [handleObserver]);

  return { loadMoreRef };
}

export default useInfiniteScroll;
