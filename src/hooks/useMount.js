import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

const useMount = callback => {
  const dispatch = useDispatch();

  useEffect(() => {
    callback && callback();
  }, []);
};

export default useMount;
