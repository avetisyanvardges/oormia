import endpoint from 'utils/endpoint';

export const fetchAllBankAccountsEndpoint = endpoint(
  'get',
  'bank-accounts/user',
);
export const createBankAccountEndpoint = endpoint('post', 'bank-accounts');
export const fetchBankAccountByIdEndpoint = id =>
  endpoint('get', `bank-accounts/${id}`);

export const updateBankAccountEndpoint = id =>
  endpoint('put', `bank-accounts/${id}`);

export const deleteBankAccountEndpoint = id =>
  endpoint('delete', `bank-accounts/${id}`);
