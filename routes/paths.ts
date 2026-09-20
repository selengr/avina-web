// ----------------------------------------------------------------------

const ROOTS_PAGE = '/'

// ----------------------------------------------------------------------


export const PATH_PAGE = {
  root: ROOTS_PAGE,
  about: '/about',
  search: '/search',
  contact: '/contact',
  services: '/services',
  portfolio: {
    root: '/portfolio',
    design: (design: string) => `/portfolio/${design}`,
  },
};

