import BookNowBtn from 'components/bookNowBtn';
import Navbar from 'components/navbar';
import CustomLink from 'components/ui/customLink';
import Media from 'components/ui/media';
import Typo from 'components/ui/typo';
import React from 'react';
import { useLocation } from 'react-router-dom';
const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className='header__wrap'>
      <div className='main__container--fluid'>
        <div className='main__container'>
          <div className='header__grid'>
            <CustomLink redirectionURL={'/'} classes={'header__logo'}>
              <Media imgSrc={require('assets/images/brand-logo.png')} imgAlt='Host Easy' />
            </CustomLink>

            <Navbar />
            <div className='header__cta'>
              <BookNowBtn isLight />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
