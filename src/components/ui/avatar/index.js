import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';
import Media from '../media';

const avatarConfig = cva('', {
  variants: {
    aspectRatio: {
      ratio_1_1: 'si-ratio__1_1',
      ratio_16_9: 'si-ratio__16_9',
      ratio_9_16: 'si-ratio__9_16',
      ratio_3_2: 'si-ratio__3_2',
      ratio_2_3: 'si-ratio__2_3',
      ratio_3_4: 'si-ratio__3_4',
      ratio_4_3: 'si-ratio__4_3',
      ratio_4_6: 'si-ratio__4_6',
      ratio_6_4: 'si-ratio__6_4',
      ratio_21_9: 'si-ratio__21_9'
    },
    size: {
      sm: 'si-sm',
      md: 'si-md',
      lg: 'si-lg'
    }
  }
});

const Avatar = ({ size, aspectRatio, classes, avatarProps, ...restProps }) => {
  return (
    <div className={clsx(avatarConfig({ variant, size, aspectRatio }), classes)} {...restProps}>
      <Media {...avatarProps} />
    </div>
  );
};

export default Avatar;
