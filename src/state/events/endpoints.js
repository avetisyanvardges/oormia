import endpoint from 'utils/endpoint';

export const fetchCategoriesEndpoint = endpoint('get', 'categories/all');
export const addEventEndpoint = endpoint('post', 'event');
export const fetchEventsEndpoint = endpoint('get', 'event/');
export const fetchEventByIdEndpoint = id => endpoint('get', `event/${id}`);
export const approveJoiningEventEndpoint = ({ email, eventId }) =>
  endpoint('get', `event/approve/${email}/${eventId}`);
export const findEventByLocationEndpoint = endpoint(
  'get',
  'event/by-coordinate',
);

export const joinToEventEndpoint = endpoint('get', 'event/join');
export const findUserPreferredEventsEndpoint = endpoint(
  'get',
  'event/preferred',
);
export const generateRandomEventEndpoint = endpoint('post', 'event/random');
export const setRatingEventEndpoint = endpoint('post', 'rating');
