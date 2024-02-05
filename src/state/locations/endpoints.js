import endpoint from 'utils/endpoint';

export const getCoordinatesAddressEndpoint = endpoint(
  'get',
  'https://geocode-maps.yandex.ru/1.x/',
);
