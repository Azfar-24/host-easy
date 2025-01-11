import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function CustomLink({ children, classes, redirectionURL, restProps }) {
  const navigate = useNavigate();
  return (
    <>
      <Link to={redirectionURL} className={classes} {...restProps}>
        {children}
      </Link>
    </>
  );
}

export default CustomLink;
