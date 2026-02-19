// src/fonts.ts
import localFont from 'next/font/local';

export const daydream = localFont({
  src: [
    {
      path: '/fonts/Daydream.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/Daydream.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap', // ensures text is visible while font loads
});
