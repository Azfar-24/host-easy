import Anchor from 'components/ui/anchor';
import CustomLink from 'components/ui/customLink';
import Media from 'components/ui/media';
import Typo from 'components/ui/typo';
import React from 'react';

const siteMapArr = [
  {
    title: 'Bartender Services',
    url: '/'
  },
  {
    title: 'Host Hands Services',
    url: '/'
  },
  {
    title: 'Events',
    url: '/'
  },
  {
    title: 'About Us',
    url: '/about-us'
  },
  {
    title: 'Apply as a Helper',
    url: '/'
  },
  {
    title: 'Contact Us',
    url: '/'
  }
];

const socialArr = [
  {
    iconName: 'sii-facebook',
    link: 'https://www.facebook.com/hosteasyllc'
  },
  {
    iconName: 'sii-instagram',
    link: 'https://www.instagram.com/hosteasyllc'
  },
  {
    iconName: 'sii-twitter',
    link: 'https://twitter.com/hosteasyllc'
  }
];

const Footer = () => {
  return (
    <>
      <footer className='footer__wrap'>
        <section className='main__container--fluid'>
          <div className='main__container'>
            <div className='footer__grid'>
              <div className='footer__grid-lhs'>
                <div className='footer__logo'>
                  <Media imgSrc={require('assets/images/brand-logo.png')} imgAlt='Host Easy' />
                </div>
              </div>
              <div className='footer__grid-rhs'>
                <div className='footer__links'>
                  {siteMapArr.map((item, index) => (
                    <CustomLink key={index} redirectionURL={item.url}>
                      {item.title}
                    </CustomLink>
                  ))}
                </div>
                <div className='social__wrap'>
                  <Typo component={'h4'} className='social__title'>
                    Follow Us
                  </Typo>
                  <div className='social__link'>
                    {socialArr.map((item, index) => (
                      <Anchor
                        key={index}
                        hyperLink={item.link}
                        classes={`social__icon ${item.iconName}`}
                        iconCls={item.iconCls}
                        variant={'onlyIcon'}
                      ></Anchor>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='copyright__wrap'>
          <section className='main__container--fluid'>
            <div className='main__container'>
              <div className='copyright__grid'>
                <div className='copyright__grid-lhs'>
                  <div className='copyright__text'>© {new Date().getFullYear()} Host Easy LLC</div>
                </div>
                <div className='copyright__grid-rhs'>
                  <div className='copyright__links'>
                    <CustomLink redirectionURL={'/'}>FAQs</CustomLink>
                    <CustomLink redirectionURL={'/privacy-policy'}>Privacy Policy</CustomLink>
                    <CustomLink redirectionURL={'/tnc'}>Terms and Conditions</CustomLink>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
