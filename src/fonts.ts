// src/fonts.ts
import localFont from 'next/font/local';

export const daydream = localFont({
  src: [
    {
      path: '../public/fonts/daydream.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/daydream.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap', // ensures text is visible while font loads
});
