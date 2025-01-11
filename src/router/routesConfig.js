export const routes = {
  home: {
    id: '1',
    name: 'Home',
    path: '/',
    transKey: 'navigationTabHome',
    authRequired: false,
    hideMenu: false,
    clickable: true
  },
  services: {
    id: '2',
    name: 'Services',
    path: '/services',
    transKey: 'navigationTabServices',
    authRequired: false,
    hideMenu: false,
    clickable: false
  },
  events: {
    id: '3',
    name: 'Events',
    path: '/events',
    transKey: 'navigationTabEvents',
    authRequired: false,
    hideMenu: false,
    clickable: false
  },
  aboutUs: {
    id: '4',
    name: 'About Us',
    path: '/about-us',
    transKey: 'navigationTabAboutUs',
    authRequired: false,
    hideMenu: false,
    clickable: true
  },
  faq: {
    id: '5',
    name: 'FAQ',
    path: '/faq',
    transKey: 'navigationTabFaq',
    authRequired: false,
    hideMenu: false,
    clickable: true
  },

  privacyPolicy: {
    id: '6',
    name: 'Privacy Policy',
    path: '/privacy-policy',
    transKey: 'navigationTabPrivacyPolicy',
    authRequired: false,
    hideMenu: false,
    clickable: true
  },
  tnc: {
    id: '7',
    name: 'Terms & Conditions',
    path: '/tnc',
    transKey: 'navigationTabTnc',
    authRequired: false,
    hideMenu: false,
    clickable: true
  }
};

Object.freeze(routes);
