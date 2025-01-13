import React from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { formatToRouteString } from 'utils/commonFunctions';
var eventsData = require('../../assets/data/events_list.json');
const { eventList } = eventsData;

const Events = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  if (eventId) return <Outlet />;

  return (
    <div>
      {eventList.data.map((event) => {
        return (
          <div key={event.id} onClick={() => navigate(formatToRouteString(event.title))}>
            {event.title}
          </div>
        );
      })}
    </div>
  );
};

export default Events;
