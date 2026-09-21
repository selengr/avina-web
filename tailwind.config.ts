import type { Config } from "tailwindcss";

import { tailwindBgOpacity } from './src/constans/design-tokens/bg-opacity';
import { tailwindBreakpoints } from './src/constans/design-tokens/breakpoints';
import {
  tailwindColors,
  tailwindGradients,
} from './src/constans/design-tokens/colors';
import { tailwindShadows } from './src/constans/design-tokens/shadows';
import { tailwindTypography } from './src/constans/design-tokens/typography';


const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");



export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: tailwindTypography,
    colors: tailwindColors,
    screens: tailwindBreakpoints,
    boxShadow: tailwindShadows,
    extend: {
      fontFamily: {
        estedad: ['var(--font-estedad)'],
        kalameh: ['var(--font-kalameh) !important'],
        'museo-moderno': ['var(--font-museo-moderno)'],
      },
      backgroundOpacity: tailwindBgOpacity,
      backgroundImage: {
        ...tailwindGradients,
        'header-cover': "url('/images/header-cover.svg')",
        'banner-m-bg1': "url('/images/banner-m-bg1.svg')",
        'banner-d-bg1': "url('/images/banner-d-bg1.svg')",
        'banner-m-bg2': "url('/images/banner-m-bg2.svg')",
        'banner-d-bg2': "url('/images/banner-d-bg2.svg')",
        'banner-d-bg3': "url('/images/banner-d-bg3.svg')",
        'banner-m-bg3': "url('/images/banner-m-bg3.svg')",
        'bot1-m': "url('/robot/bot1-m.svg')",
        'bot1-d': "url('/robot/bot1-d.svg')",
        'bot2-m': "url('/robot/bot2-m.svg')",
        'bot2-d': "url('/robot/bot2-d.svg')",
        'bot3-m': "url('/robot/bot3-m.svg')",
        'bot3-d': "url('/robot/bot3-d.svg')",
        'bot4': "url('/robot/bot4.svg')",
        'bot4-m': "url('/robot/bot4-m.svg')",
        'bot5-d': "url('/robot/bot5-d.svg')",
        'bot4-d': "url('/robot/bot4-d.svg')",
        'bot5-m': "url('/robot/bot5-m.svg')",
        'auth-bg': "url('/images/img.svg')",
        'vector-bg': "url('/images/Vector.svg')",
      },

      keyframes: {
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'scale-out': {
          '0%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(0)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-out': {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'scale(0.95) translateY(-10px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        scroll: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(-50%)',
          },
        },
      },
      animation: {
        'scale-in': 'scale-in 0.3s ease-in-out forwards',
        'scale-out': 'scale-out 0.3s ease-in-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'fade-out': 'fade-out 0.4s ease-out forwards',
        'slide-in': 'slideIn 0.3s ease-out forwards',
        scroll:
        "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
    
      },
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;






function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
