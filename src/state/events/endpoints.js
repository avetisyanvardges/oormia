import endpoint from 'utils/endpoint';

export const fetchCategoriesEndpoint = endpoint('get', 'categories/all');
export const addEventEndpoint = endpoint('post', 'event');
export const updateEventEndpoint = id => endpoint('put', `event/${id}`);
export const deleteEventEndpoint = id => endpoint('delete', `event/${id}`);
export const fetchEventsEndpoint = endpoint('get', 'event/');
export const fetchEventByIdEndpoint = id => endpoint('get', `event/${id}`);
export const fetchRequestedEventsEndpoint = endpoint(
  'get',
  'event/requested-events',
);

export const generateQrEndpoint = endpoint('get', 'event/payForEvent');
export const fetchNotModeratedEventsEndpoint = endpoint(
  'get',
  'event/not-moderated',
);
export const approveJoiningEventEndpoint = ({ email, eventId }) =>
  endpoint('get', `event/approve/${email}/${eventId}`);
export const findEventByLocationEndpoint = endpoint(
  'get',
  'event/by-coordinate',
);

export const joinToEventEndpoint = endpoint('get', 'event/join');
export const fetchEventHistoryEndpoint = endpoint('get', 'event/history');
export const fetchUpcomingEventHistoryEndpoint = endpoint(
  'get',
  'event/history/upcoming',
);
export const fetchPromotionEventsEndpoint = endpoint('get', 'event/preferred');
export const fetchWeekTopEventsEndpoint = endpoint('get', 'event/week-top');
export const generateRandomEventEndpoint = endpoint('post', 'event/random');
export const setRatingEventEndpoint = endpoint('post', 'rating');
export const sendMeetingRequestEndpoint = id =>
  endpoint('post', `/event/meeting/${id}`);

export const confirmEventEndpoint = id => endpoint('get', `event/accept/${id}`);
