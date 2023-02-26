import {useRef} from 'react';

function useContainer() {
  const mapRef = useRef();

  return {mapRef};
}

export default useContainer;
