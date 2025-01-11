import Navbar from 'components/navbar';
import Media from 'components/ui/media';
import Typo from 'components/ui/typo';
import React from 'react';
import { useLocation } from 'react-router-dom';
const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className='header__wrap'>
      <section className='main__container'>
        <Navbar />
      </section>
    </header>
  );
};
export default Header;
