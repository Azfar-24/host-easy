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
    }
  }
});

const SectionHeading = ({ textAlign = 'center', classes, heading }) => {
  return (
    <>
      <Typo component={'h2'} className={clsx(headingProps({ textAlign }), classes)}>
        {heading}
      </Typo>
    </>
  );
};

export default SectionHeading;
