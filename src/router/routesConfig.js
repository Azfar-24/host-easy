export const routes = {
  home: {
    id: '1',
    name: 'Home',
    path: '/',
    transKey: false,
    authRequired: false,
    hideMenu: true,
    clickable: true
  },
  services: {
    id: '2',
    name: 'Services',
    path: '/services',
    transKey: false,
    authRequired: false,
    hideMenu: false,
    clickable: true
  },
  events: {
    id: '3',
    name: 'Events',
    path: '/events',
    transKey: false,
    authRequired: false,
    hideMenu: false,
    clickable: true
  },
  aboutUs: {
    id: '4',
    name: 'About Us',
    path: '/about-us',
    transKey: false,
    authRequired: false,
    hideMenu: false,
    clickable: true
  },
  faq: {
    id: '5',
    name: 'FAQ',
    path: '/faq',
    transKey: false,
    authRequired: false,
    hideMenu: true,
    clickable: true
  },

  privacyPolicy: {
    id: '6',
    name: 'Privacy Policy',
    path: '/privacy-policy',
    transKey: false,
    authRequired: false,
    hideMenu: true,
    clickable: true
  },
  tnc: {
    id: '7',
    name: 'Terms & Conditions',
    path: '/tnc',
    transKey: false,
    authRequired: false,
    hideMenu: true,
    clickable: true
  },
  contactUs: {
    id: '8',
    name: 'Contact Us',
    path: '/contact-us',
    transKey: false,
    authRequired: false,
    hideMenu: true,
    clickable: true
  },
  applyAsHelper: {
    id: '9',
    name: 'Apply as a Helper',
    path: '/apply-as-a-helper',
    transKey: false,
    authRequired: false,
    hideMenu: false,
    clickable: true
  }
};

Object.freeze(routes);
