import React, { useEffect, useState, memo } from 'react';

import Typo from 'components/ui/typo';
import config from 'utils/config';

const CountDown = ({ utcTime, customCls, showSeconds, setDeadlineOver, matchNo, onBoardFlag }) => {
  const [countdown, setCountdown] = useState(config.calculateTimeRemaining(utcTime));
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(config.calculateTimeRemaining(utcTime));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown?.isDeadLineExpired && setDeadlineOver) {
      setDeadlineOver(true);
    }
  }, [countdown?.isDeadLineExpired]);

  // let showDay = showSeconds ? countdown.days >= 1 : true;
  // let showSec = showSeconds ? countdown.days < 1 : false;
  let showDay = true;
  let showSec = true;

  return (
    <>
      <div className={`stopWatch__wrap ${customCls || ''}`}>
        {showDay ? (
          <div className='stopWatch__box'>
            <Typo component={'span'} transKey={'countdown_day'}>
              {countdown.days < 10 ? `0${countdown.days}` : countdown.days}
            </Typo>
            {!customCls ? (
              countdown.days === 1 ? (
                <Typo component={'em'} transKey={'countdown_day'}>
                  Day
                </Typo>
              ) : (
                <Typo component={'em'} transKey={'countdown_days'}>
                  Days
                </Typo>
              )
            ) : (
              <Typo component={'em'} transKey={'countdown_d'}>
                D
              </Typo>
            )}
          </div>
        ) : null}
        <div className='stopWatch__box'>
          <Typo component={'span'} transKey={'countdown_hour'}>
            {countdown.hours < 10 ? `0${countdown.hours}` : countdown.hours}
          </Typo>
          {!customCls ? (
            countdown.days === 1 ? (
              <Typo component={'em'} transKey={'countdown_hr'}>
                Hr
              </Typo>
            ) : (
              <Typo component={'em'} transKey={'countdown_hrs'}>
                Hrs
              </Typo>
            )
          ) : (
            <Typo component={'em'} transKey={'countdown_h'}>
              H
            </Typo>
          )}
        </div>
        <div className='stopWatch__box'>
          <Typo component={'span'} transKey={'countdown_minute'}>
            {countdown.minutes < 10 ? `0${countdown.minutes}` : countdown.minutes}
          </Typo>
          {!customCls ? (
            countdown.days === 1 ? (
              <Typo component={'em'} transKey={'countdown_min'}>
                Min
              </Typo>
            ) : (
              <Typo component={'em'} transKey={'countdown_mins'}>
                Mins
              </Typo>
            )
          ) : (
            <Typo component={'em'} transKey={'countdown_m'}>
              M
            </Typo>
          )}
        </div>
        {showSec ? (
          <div className='stopWatch__box'>
            <Typo component={'span'} transKey={'countdown_seconds'}>
              {countdown.seconds < 10 ? `0${countdown.seconds}` : countdown.seconds}
            </Typo>
            {!customCls ? (
              countdown.days === 1 ? (
                <Typo component={'em'} transKey={'countdown_sec'}>
                  Sec
                </Typo>
              ) : (
                <Typo component={'em'} transKey={'countdown_secs'}>
                  Secs
                </Typo>
              )
            ) : (
              <Typo component={'em'} transKey={'countdown_s'}>
                S
              </Typo>
            )}
          </div>
        ) : null}{' '}
        {customCls ? 'Left' : null}
        {onBoardFlag ? ` for M${matchNo}` : null}
      </div>
    </>
  );
};

// snippet
// {time && <Countdown utcTime={time} />}

// const [time, setTime] = useState(null);

// useEffect(() => {
//   const findFirstMatch = (fixtureData || [])?.find((fixture) => {
//     return fixture?.MatchStatus == 1;
//   });

//   setTime(findFirstMatch?.CompetitionTimeStartUtc);
//   setEventLogo(findFirstMatch?.Venue);
// }, [fixtureData]);

export default memo(CountDown);
