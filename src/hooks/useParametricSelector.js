import useTypedSelector from './useTypedSelector';

const useParametricSelector = endpoint => ({
  isLoading: useTypedSelector(({data}) => data?.[endpoint]?.loading || false),
  response: useTypedSelector(({data}) => data?.[endpoint]?.response || null),
  error: useTypedSelector(({data}) => data?.[endpoint]?.error || null),
});

export default useParametricSelector;
