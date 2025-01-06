import React, { useEffect } from 'react';
import Button from '../button';
import Typo from '../typo';

const ToastMessage = ({
  open,
  type,
  icon,
  transMessage,
  message,
  autoHideDuration,
  handleClose
}) => {
  // Automatically close the toast message after the autoHideDuration
  useEffect(() => {
    if (open && autoHideDuration && handleClose) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoHideDuration);

      // Clean up the timer when the component is unmounted or when open/autoHideDuration changes
      return () => clearTimeout(timer);
    }
  }, [open, autoHideDuration, handleClose]);

  function getNotificationStatus(type) {
    switch (type) {
      case 1:
        return {
          clsName: 'success',
          lbl: (
            <>
              <i className='sii-tick'></i>
            </>
          )
        };

      case 2:
        return {
          clsName: 'danger',
          lbl: (
            <>
              <i className='sii-close'></i>
            </>
          )
        };

      case 3:
        return {
          clsName: 'warning'
        };

      default:
        return {
          lbl
        };
    }
  }

  return (
    <>
      {open && type ? (
        <div className={`notification in  ${getNotificationStatus(type).clsName}`}>
          {getNotificationStatus(type).lbl && (
            <div className='notification__icon'>
              {getNotificationStatus(type).lbl}
              {icon && <i className={icon}></i>}
            </div>
          )}

          <Typo transKey={transMessage} component='div' className='notification__content'>
            {message}
          </Typo>

          {handleClose && (
            <div className='notification__cta'>
              <Button
                variant={'onlyIcon'}
                onClick={() => handleClose()}
                icon={'sii-close'}
              ></Button>
            </div>
          )}
        </div>
      ) : null}
    </>
  );
};

export default ToastMessage;
