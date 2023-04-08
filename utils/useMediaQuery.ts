import { useLayoutEffect, useState } from 'react';

export default function useMediaQuery(query: string) {
  // query looks like: @media (min-width: XYZpx)
  const QUERY_FIRST_CHARACTER = 7;

  const formattedQuery = query.slice(QUERY_FIRST_CHARACTER);
  const [matches, setMatches] = useState(false);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(formattedQuery);

      if (media.matches) {
        setMatches(media.matches);
      }
    }
  }, []);

  useLayoutEffect(() => {
    const media = window.matchMedia(formattedQuery);

    function onScreenSizeChange() {
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
    }

    media.addEventListener('change', onScreenSizeChange);

    return () => media.removeEventListener('change', onScreenSizeChange);
  }, [formattedQuery, matches]);
  return matches;
}
