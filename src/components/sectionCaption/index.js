import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import Typo from 'components/ui/typo';
import React from 'react';

const captionProps = cva('section__caption', {
  variants: {
    textAlign: {
      right: 'text-right',
      left: 'text-left',
      center: 'text-center'
    },
    textTheme: {
      dark: 'text-dark',
      light: 'text-light'
    }
  }
});

const SectionCaption = ({ data, textTheme, textAlign = 'center', classes }) => {
  return (
    <>
      <div className={clsx(captionProps({ textAlign, textTheme }), classes)}>
        {data.map((item, index) => (
          <Typo key={index} component={'p'}>
            {item}
          </Typo>
        ))}
      </div>
    </>
  );
};

export default SectionCaption;
