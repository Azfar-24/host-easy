import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';
import { useNavigate } from 'react-router';

const anchorCVA = cva('', {
  variants: {
    disabled: {
      true: 'disabled'
    },
    leadingIcon: {
      true: 'icon--leading'
    },
    selected: {
      true: 'selected'
    },
    variant: {
      primaryLight: 'btn btn__primary-light',
      primaryDark: 'btn btn__primary-dark',
      secondary: 'btn btn__secondary',
      primaryLightLink: 'btn btn__primary-linkLight',
      primaryDarkLink: 'btn btn__primary-linkDark',
      onlyIcon: 'btn btn__icon'
    },
    fullWidth: {
      true: 'btn--fullWidth'
    },
    size: {
      sm: 'btn--sm',
      md: 'btn--md',
      lg: 'btn--lg'
    }
  },

  defaultVariants: {
    variant: 'primary'
  }
});
function Anchor({
  forMobileNoSpan,
  iconCls,
  linkText,
  hyperLink,
  linkTarget = '_blank',
  children,
  variant,
  size,
  selected,
  disabled,
  classes,
  leadingIcon,
  redirectionURL,
  ...restProps
}) {
  const iconTag = iconCls ? <i className={iconCls}></i> : '';
  const spanTag = linkText ? <span>{linkText}</span> : '';

  const navigate = useNavigate();
  return (
    <>
      <a
        onClick={() => redirectionURL}
        href={hyperLink}
        target={linkTarget}
        rel='noopener noreferrer'
        className={clsx(anchorCVA({ variant, size, selected, disabled, leadingIcon }), classes)}
        disabled={disabled}
        {...restProps}
      >
        {!forMobileNoSpan && spanTag}
        {iconTag}
        {children}
      </a>
    </>
  );
}

export default Anchor;
