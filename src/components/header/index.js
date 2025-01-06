import Navbar from 'components/navbar';
import Media from 'components/ui/media';
import Typo from 'components/ui/typo';
import React from 'react';
import { useLocation } from 'react-router-dom';
const Header = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <div className='si-header__left'>
        <Typo component={'h5'} className='si-header__productTitle'>
         Host Easy
        </Typo>
      </div>
      <Navbar />
      <div className='si-header__right'>
        <div className='si-user-profile'>
          {/* <img src={require(assets/images/default-profile.png)} alt='' /> */}
        </div>
      </div>
    </header>
  );
};
export default Header;
