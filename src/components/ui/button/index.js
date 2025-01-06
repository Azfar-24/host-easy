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
    selected: {
      true: 'selected'
    },
    variant: {
      primary: 'btn btn__primary',
      secondary: 'btn btn__secondary',
      primaryOutline: 'btn btn__primary btn__primary--outline',
      secondaryOutline: 'btn btn__secondary btn__secondary--outline',
      primaryLink: 'btn btn__primary btn__primary--link',
      secondaryLink: 'btn btn__secondary btn__secondary--link',
      onlyIcon: 'btn btn__icon'
    },
    size: {
      sm: 'btn--sm',
      md: 'btn--md',
      lg: 'btn--lg'
    }
  },

  defaultVariants: {
    variant: ''
  }
});

const Button = ({
  variant,
  size,
  selected,
  disabled,
  children,
  leadingIcon,
  icon,
  classes,
  trackingKey,
  transKey,
  isContinue,
  allVotesSelected,
  ...restProps
}) => {
  isContinue && !allVotesSelected ? (disabled = true) : (disabled = disabled);
  return (
    <button
      id={TRACKING_ELEMENT_ID}
      track-event={trackingKey ? serialize(trackingKey) : ''}
      disabled={disabled}
      className={clsx(button({ variant, size, selected, disabled, leadingIcon }), classes)}
      {...restProps}
    >
      {children &&
        (transKey ? window?.['translations']?.[transKey] ?? <span>{children}</span> : children)}
      {icon && <i className={icon}></i>}
    </button>
  );
};

export default Button;
