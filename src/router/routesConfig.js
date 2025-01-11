import AboutUs from 'pages/aboutUs';
import Hosthands from 'pages/hostHands';

export const routes = {
  home: {
    id: '1',
    name: 'Home',
    path: '/',
    transKey: 'navigationTabHome',
    authRequired: false,
    hideMenu: false,
    cookieRequired: false
  },
  bartender: {
    id: '2',
    name: 'Bartender',
    path: '/bartender',
    transKey: 'navigationTabBartender',
    authRequired: false,
    hideMenu: false,
    cookieRequired: false
  },
  hosthands: {
    id: '3',
    name: 'Host Hands',
    path: '/host-hands',
    transKey: 'navigationTabHosthands',
    authRequired: false,
    hideMenu: false,
    cookieRequired: false
  },
  aboutUs: {
    id: '4',
    name: 'About Us',
    path: '/about-us',
    transKey: 'navigationTabAboutUs',
    authRequired: false,
    hideMenu: false,
    cookieRequired: false
  },
  faq: {
    id: '5',
    name: 'FAQ',
    path: '/faq',
    transKey: 'navigationTabFaq',
    authRequired: false,
    hideMenu: false,
    cookieRequired: false
  },

  privacyPolicy: {
    id: '6',
    name: 'Privacy Policy',
    path: '/privacy-policy',
    transKey: 'navigationTabPrivacyPolicy',
    authRequired: false,
    hideMenu: false,
    cookieRequired: false
  },
  tnc: {
    id: '7',
    name: 'Terms & Conditions',
    path: '/tnc',
    transKey: 'navigationTabTnc',
    authRequired: false,
    hideMenu: false,
    cookieRequired: false
  }
};

Object.freeze(routes);
