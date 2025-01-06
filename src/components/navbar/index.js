import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from 'router/routesConfig';

const Navbar = () => {
  const routesArr = Object.values(routes);

  const navBar = () => {
    const nav = routesArr
      .filter((showRoute) => showRoute.hideMenu !== true)
      .map((route, index) => {
        const { id, path, name, transKey } = route;
        return (
          <li key={id} id={id}>
            <NavLink to={path}>{name}</NavLink>
          </li>
        );
      });
    return nav;
  };

  return (
    <nav className='menu'>
      <ul>{navBar()}</ul>
    </nav>
  );
};

export default Navbar;
