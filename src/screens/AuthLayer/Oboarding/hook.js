import {useState} from 'react';
import images from 'assets/images';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function useContainer() {
  const [path, setPath] = useState(images.onboarding.onboarding_1);
  const [resizeType, setResizeType] = useState('cover');
  const insets = useSafeAreaInsets();
  return {path, resizeType, insets};
}

export default useContainer;
