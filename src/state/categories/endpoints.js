import endpoint from 'utils/endpoint';

export const fetchCategoriesAllEndpoint = endpoint('get', 'categories/all');
export const fetchSubCategoriesAllEndpoint = endpoint(
  'get',
  'subCategories/all',
);
