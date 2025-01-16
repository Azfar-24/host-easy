import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';
import { serialize } from 'utils/commonFunctions';
import { TRACKING_ELEMENT_ID } from 'utils/constants';

const button = cva('', {
  variants: {
    disabled: {
      true: 'disabled'
    },
    leadingIcon: {
      true: 'icon--leading'
    },
    onlyIcon: { true: 'btn btn__icon' },
    selected: {
      true: 'selected'
    },
    variant: {
      primaryLight: 'btn btn__primary-light',
      primaryDark: 'btn btn__primary-dark',
      secondary: 'btn btn__secondary',
      primaryLightLink: 'btn btn__primary-linkLight',
      primaryDarkLink: 'btn btn__primary-linkDark'
    },
    fullWidth: {
      true: 'btn--fullWidth'
    },
    size: {
      sm: 'btn--sm',
      md: 'btn--md',
      lg: 'btn--lg'
    }
  }
});

const Button = ({
  variant,
  size,
  selected,
  fullWidth,
  disabled,
  children,
  leadingIcon,
  icon,
  onlyIcon,
  classes,
  trackingKey,
  transKey,
  ...restProps
}) => {
  return (
    <button
      id={TRACKING_ELEMENT_ID}
      track-event={trackingKey ? serialize(trackingKey) : ''}
      disabled={disabled}
      className={clsx(
        button({ variant, size, selected, disabled, leadingIcon, fullWidth, onlyIcon }),
        classes
      )}
      {...restProps}
    >
      <div className='btn__innerChild'>
        {children &&
          (transKey ? window?.['translations']?.[transKey] ?? <span>{children}</span> : children)}
        {icon && <i className={icon}></i>}
      </div>
    </button>
  );
};

export default Button;
