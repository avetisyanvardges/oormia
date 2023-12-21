import endpoint from 'utils/endpoint';

export const findNotificationsByFrom = from =>
  endpoint('post', `/api/v1/notification/from/${from}`);
