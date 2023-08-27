'use client';

import { useMediaQuery } from 'react-responsive';

export default function useMedia() {
   const isMobile = useMediaQuery({
      maxWidth: 768,
   });
   const isTablet = useMediaQuery({
      minWidth: 768,
      maxWidth: 1439,
   });
   const isDesktop = useMediaQuery({
      minWidth: 1440,
   });

   return { isMobile, isTablet, isDesktop };
}
