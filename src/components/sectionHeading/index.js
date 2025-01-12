import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import Typo from 'components/ui/typo';
import React from 'react';

const headingProps = cva('section__heading', {
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

const SectionHeading = ({ textAlign = 'center', textTheme, classes, heading }) => {
  return (
    <>
      <Typo component={'h2'} className={clsx(headingProps({ textAlign, textTheme }), classes)}>
        {heading}
      </Typo>
    </>
  );
};

export default SectionHeading;
