import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button';
const BackButton = ({ onClick, onlyIcon }) => {
  // const { callBackFunction = () => {}, hasCustomBackAction, onBack = () => {} } = props;
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className='si-backBtn'>
      <Button
        variant={`${onlyIcon ? 'onlyIcon' : 'primaryLink'}`}
        onClick={onClick}
        transKey={'cta_backToHome'}
        icon={'dci-prev'}
        leadingIcon={true}
      >
        Back to Home
      </Button>
    </div>
  );
};

export { BackButton };
