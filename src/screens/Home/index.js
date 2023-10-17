import React, {useRef, useState} from 'react';
import {Dimensions, View} from 'react-native';
import {styles} from './styles';
import Login from 'screens/AuthLayer/Login';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Lottie from 'lottie-react-native';

const LOGIN = 'login';
const SIGN_UP = 'signUp';

const {width: screenWidth} = Dimensions.get('window');

const Carousel = ({autoScrollInterval = 5000}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [page, setPage] = useState(null);
  const scrollViewRef = useRef();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.body]}>
      <View style={{...styles.imageBlock, height: '65%'}}>
        <Lottie
          source={require('../../assets/lottie/travel.json')}
          autoPlay
          loop
        />
      </View>

      <Login SIGN_UP={SIGN_UP} LOGIN={LOGIN} page={page} setPage={setPage} />
    </View>
  );
};

export default Carousel;
