import localFont from 'next/font/local';

export const estedad = localFont({
  src: [
    {
      path: '../../public/fonts/estedad/Estedad-FD-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/estedad/Estedad-FD-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/estedad/Estedad-FD-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/estedad/Estedad-FD-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/estedad/Estedad-FD-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-estedad',
});

export const kalameh = localFont({
  src: [
    {
      path: '../../public/fonts/kalameh/Kalameh(FaNum)-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/kalameh/Kalameh(FaNum)-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/kalameh/Kalameh(FaNum)-ExtraBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/kalameh/Kalameh(FaNum)-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/kalameh/Kalameh(FaNum)-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/kalameh/Kalameh(FaNum)-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/kalameh/Kalameh(FaNum)-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/kalameh/Kalameh(FaNum)-Thin.ttf',
      weight: '200',
      style: 'normal',
    },
  ],
  variable: '--font-kalameh',
});

export const museoModerno = localFont({
  src: [
    {
      path: '../../public/fonts/museo-moderno/MuseoModerno-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/museo-moderno/MuseoModerno-ExtraLightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/museo-moderno/MuseoModerno-Thin.ttf',
      weight: '250',
      style: 'normal',
    },
    {
      path: '../../public/fonts/museo-moderno/MuseoModerno-ThinItalic.ttf',
      weight: '250',
      style: 'italic',
    },
  ],
  variable: '--font-museo-moderno',
});
