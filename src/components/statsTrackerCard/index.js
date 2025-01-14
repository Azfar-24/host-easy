import React, { useEffect, useState, useRef } from 'react';
import Typo from 'components/ui/typo';

const StatsTrackerCard = ({ title, caption, value, slug }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const duration = 1000;
    const increment = Math.ceil(value / (duration / 50));
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        current = value;
        clearInterval(interval);
      }
      setDisplayValue(current);
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible, value]);

  return (
    <div className='stats__card' ref={cardRef}>
      <h2 className='stats__card-value'>
        {displayValue}
        {slug ? slug : ''}
      </h2>
      <Typo component={'h2'} className='stats__card-heading'>
        {title}
      </Typo>
      <Typo component={'p'} className='stats__card-caption'>
        {caption}
      </Typo>
    </div>
  );
};

export default StatsTrackerCard;
