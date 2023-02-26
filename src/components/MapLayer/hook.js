import React, {useRef} from 'react';

function useContainer() {
  const mapRef = useRef(null);
  return {mapRef};
}

export default useContainer;
