import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const linkProps = cva('', {
  variants: {
    disabled: {
      true: 'disabled'
    },
    onlyIcon: { true: 'btn btn__icon' },
    variant: {
      primaryLight: 'btn btn__primary-light',
      primaryDark: 'btn btn__primary-dark',
      secondary: 'btn btn__secondary',
      primaryLightLink: 'btn btn__primary-linkLight',
      primaryDarkLink: 'btn btn__primary-linkDark'
    },
    fullWidth: {
      true: 'btn--fullWidth'
    }
  }
});

function CustomLink({
  children,
  variant,
  disabled,
  fullWidth,
  classes,
  onlyIcon,
  redirectionURL,
  restProps
}) {
  const navigate = useNavigate();
  return (
    <>
      <Link
        to={redirectionURL}
        className={clsx(linkProps({ variant, disabled, fullWidth, onlyIcon }), classes)}
        {...restProps}
      >
        {children}
      </Link>
    </>
  );
}

export default CustomLink;
