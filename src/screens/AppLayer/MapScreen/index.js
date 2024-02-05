import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Alert,
  ImageBackground,
  Linking,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle, fullScreen, Shadow } from 'assets/RootStyles';
import { deviceInfo } from 'assets/deviceInfo';
import { Marker } from 'react-native-maps';
import { MAP_DEFAULT_THEME } from 'assets/Theme/MapTheme';
import Geolocation from 'react-native-geolocation-service';
import useCallbackState from 'utils/useCallbackState';
import { navigate } from 'services/NavigationService';
import Permissions from 'react-native-permissions';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import dispatch from 'utils/dispatch/dispatch';
import { getAllEvents } from 'state/events/operations/getAllEvents';
import { fetchAllUsers } from 'state/user/operations/fetchAllUsers';
import { useSelector } from 'react-redux';
import { SharedElement } from 'react-navigation-shared-element';
import { routNames } from 'constants/routNames';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MapView from 'react-native-map-clustering';
import MImage from 'components/MImage';
import { isEmpty } from 'lodash';
import Lottie from 'lottie-react-native';
import { CustomText } from 'components/Text';
import moment from 'moment/moment';

const SPACING = normalize(16);
const ITEM_SIZE = deviceInfo.ios
  ? fullScreen.width * 0.85
  : fullScreen.width * 0.89;
const ITEM_HEIGHT = normalize(116);
const SPACER_ITEM_SIZE = (fullScreen.width - ITEM_SIZE) / 2;

const MapScreen = ({ navigation }) => {
  const mapRef = useRef();
  const listRef = useRef();
  const insets = useSafeAreaInsets();
  const { events } = useSelector(({ events }) => events);
  const [selectedEvent, setSelectedEvent] = useState('');
  const [snapIndex, setSnapIndex] = useState(1);
  const translateY = useSharedValue(
    fullScreen.height -
      ITEM_HEIGHT -
      insets.bottom -
      (deviceInfo.ios ? normalize(80) : normalize(60)) -
      normalize(25),
  );
  const scrollX = useRef(new Animated.Value(0)).current;
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const [currentLocation, setCurrentLocation] = useState({
    latitude: 40.7929026,
    longitude: 43.84649710000001,
    latitudeDelta: 0.015,
    longitudeDelta: 0.015,
  });

  const [region, setRegion] = useCallbackState({
    latitude: 40.7929026,
    longitude: 43.84649710000001,
    latitudeDelta: 0.015,
    longitudeDelta: 0.015,
  });

  const [marker, setMarker] = useCallbackState({
    latitude: 40.7929026,
    longitude: 43.84649710000001,
    latitudeDelta: 0.015,
    longitudeDelta: 0.015,
  });

  const onViewableItemsChanged = ({ viewableItems }) => {
    setMarker({
      val: {
        latitude: viewableItems?.[viewableItems.length - 2]?.item?.lat,
        longitude: viewableItems?.[viewableItems.length - 2]?.item?.lon,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
      },
      callback: () => {
        mapRef.current.animateToRegion({
          latitude: viewableItems?.[viewableItems.length - 2]?.item?.lat,
          longitude: viewableItems?.[viewableItems.length - 2]?.item?.lon,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        });
      },
    });
  };

  useLayoutEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }]);

  function goBack() {
    Geolocation.getCurrentPosition(pos => {
      const { coords } = pos;
      setCurrentLocation({
        ...coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
      // dispatch(userTypes.SET_USER_LOCATION, coords);
      mapRef.current?.animateToRegion({
        ...coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    });
  }

  const checkPermission = async () => {
    const permission = deviceInfo.ios
      ? Permissions.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : Permissions.PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
    const status = await Permissions.check(permission);
    return status;
  };

  const requestPermission = async () => {
    const permission = deviceInfo.ios
      ? Permissions.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : Permissions.PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
    const status = await Permissions.request(permission);
    return status;
  };

  async function requestGeolocationPermission() {
    try {
      const status = await checkPermission();
      if (status === 'granted') {
        goBack();
      } else if (status === 'blocked') {
        // Prompt user to go to Settings app
        Alert.alert(
          'Location Permission Required',
          'Please go to the Settings app and grant permission for this app to access your location.',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Open Settings',
              onPress: () => Linking.openSettings(),
            },
          ],
        );
      } else {
        const newStatus = await requestPermission();
        if (newStatus === 'granted') {
          goBack();
        } else {
        }
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    requestGeolocationPermission();
  }, []);

  const onRegionChangeComplete = region => {
    region.latitudeDelta = region.latitudeDelta ? region.latitudeDelta : 0.005;
    region.longitudeDelta = region.longitudeDelta
      ? region.longitudeDelta
      : 0.005;
    setRegion({ val: region });
    if (selectedEvent.id && !snapIndex) {
      setSnapIndex(1);
    }
  };

  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => {
      dispatch(getAllEvents({ page: 0, size: 100 }));
    });

    return () => {
      subscribe();
    };
  }, []);

  useEffect(() => {
    if (snapIndex) {
      translateY.value = withSpring(
        fullScreen.height -
          ITEM_HEIGHT -
          insets.bottom -
          (deviceInfo.ios ? normalize(80) : normalize(60)) -
          normalize(25),
      );
    } else {
      translateY.value = withSpring(fullScreen.height);
    }
  }, [snapIndex]);

  const renderEvents = useMemo(() => {
    return events?.map((item, index) => {
      const focused =
        marker.val.latitude === item.lat && marker.val.longitude === item.lon;
      return (
        <Marker
          key={`${item.id}`}
          identifier={`${item.id}`}
          coordinate={{
            latitude: item.lat,
            longitude: item.lon,
            latitudeDelta: 0.015,
            longitudeDelta: 0.015,
          }}
          onPress={() => {
            setSelectedEvent(item);
            setSnapIndex(1);
            const idx = events.findIndex(it => it.id === item.id);
            console.log(index, idx);
            setTimeout(() => {
              listRef?.current?.scrollToIndex({
                animated: true,
                index: idx,
                viewPosition: 0.6,
              });
            }, 500);
          }}>
          <View style={{ alignItems: 'center' }}>
            <View
              style={{
                width: normalize(60),
                height: normalize(60),
                borderRadius: normalize(30),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Colors.purple['200'],
              }}>
              <SharedElement id={`item.${item?.id}.photo`}>
                <MImage
                  source={{
                    uri:
                      item?.pictures?.[0]?.fileDownloadUri ||
                      item?.preferences?.[0]?.picture?.fileDownloadUri,
                  }}
                  style={{
                    width: normalize(50),
                    height: normalize(50),
                    borderRadius: normalize(25),
                  }}
                  type={'image'}
                />
              </SharedElement>
            </View>
          </View>
        </Marker>
      );
    });
  });

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          position: 'absolute',
          top: insets.top + normalize(16),
          right: normalize(16),
          zIndex: 999,
        }}>
        <TouchableOpacity
          onPress={() => navigate(routNames.FILTERS)}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: normalize(8),
            backgroundColor: Colors.white,
            borderRadius: normalize(50),
            paddingHorizontal: normalize(8),
            ...Shadow,
          }}>
          <Icon name={ICON_NAMES.FILTER} size={normalize(26)} />
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[
          {
            position: 'absolute',
            bottom: normalize(270),
            right: normalize(16),
            zIndex: 999,
          },
        ]}>
        {!isEmpty(events) ? (
          <TouchableOpacity
            onPress={() => navigate('EventsScreen')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: normalize(8),
              backgroundColor: Colors.white,
              borderRadius: normalize(50),
              paddingHorizontal: normalize(8),
              ...Shadow,
            }}>
            <Icon
              name={ICON_NAMES.LIST}
              size={normalize(26)}
              color={Colors.purple['500']}
            />
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => goBack()}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            padding: normalize(8),
            backgroundColor: Colors.white,
            borderRadius: normalize(50),
            paddingHorizontal: normalize(8),
            ...Shadow,
            marginTop: normalize(10),
          }}>
          <View style={{ transform: [{ rotate: '-45deg' }] }}>
            <Icon
              name={ICON_NAMES.MY_LOCATION}
              size={normalize(26)}
              color={Colors.purple['500']}
            />
          </View>
        </TouchableOpacity>
      </Animated.View>
      <MapView
        ref={mapRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        provider="google"
        showsUserLocation={false}
        showsMyLocationButton={false}
        loadingEnabled={true}
        initialRegion={region.val}
        onTouchStart={() => setSnapIndex(0)}
        onRegionChangeComplete={onRegionChangeComplete}
        maxZoomLevel={19}
        minZoomLevel={3}
        customMapStyle={MAP_DEFAULT_THEME}
        clusterColor={Colors.purple['500']}
        animationEnabled>
        {renderEvents}
        {currentLocation && (
          <Marker
            coordinate={{
              ...currentLocation,
            }}>
            <Lottie
              source={require('../../../assets/lottie/location.json')}
              autoPlay
              loop
              style={{
                width: normalize(60),
                height: normalize(60),
              }}
              resizeMode={'cover'}
            />
          </Marker>
        )}
      </MapView>
      <Animated.View style={[animatedStyles]}>
        <Animated.FlatList
          horizontal
          ref={listRef}
          data={[{ id: 'left-spacer' }, ...events, { id: 'right-spacer' }]}
          keyExtractor={item => item.id}
          bounces={false}
          decelerationRate={deviceInfo.ios ? 0 : 0.99}
          renderToHardwareTextureAndroid
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false },
          )}
          snapToInterval={ITEM_SIZE}
          scrollEventThrottle={16}
          snapToAlignment="start"
          contentContainerStyle={{
            paddingHorizontal: normalize(10),
            paddingVertical: normalize(10),
            alignItems: 'center',
          }}
          showsHorizontalScrollIndicator={false}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          renderItem={({ item, index }) => {
            if (!item.eventType) {
              return <View style={{ width: SPACER_ITEM_SIZE }} />;
            }

            const inputRange = [
              (index - 2) * ITEM_SIZE,
              (index - 1) * ITEM_SIZE,
              index * ITEM_SIZE,
            ];

            const translateY = scrollX.interpolate({
              inputRange,
              outputRange: [0, -10, 0],
              extrapolate: 'clamp',
            });
            return (
              <View style={{ width: ITEM_SIZE }}>
                <Animated.View
                  style={{
                    marginRight: SPACING,
                    transform: [{ translateY }],
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      navigate(routNames.EVENT_DETAIL, {
                        event: item,
                      });
                    }}
                    key={index.toString()}
                    style={{
                      backgroundColor: Colors.white,
                      borderRadius: normalize(20),
                      paddingHorizontal: normalize(10),
                      padding: normalize(16),
                      ...Shadow,
                      zIndex: 0,
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                      <ImageBackground
                        source={{
                          uri:
                            item?.pictures?.[0]?.fileDownloadUri ||
                            item?.preferences?.[0]?.picture?.fileDownloadUri,
                        }}
                        resizeMode="cover"
                        style={{
                          width: normalize(100),
                          height: normalize(100),
                          borderRadius: normalize(12),
                          resizeMode: 'cover',
                          overflow: 'hidden',
                          backgroundColor: Colors.white,
                          zIndex: 999,
                          ...Shadow,
                        }}>
                        <View
                          style={{
                            width: normalize(100),
                            height: normalize(100),
                            borderRadius: normalize(12),
                            backgroundColor: 'rgba(0,0,0, .3)',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <CustomText
                            children={moment(item.startDate).format('D')}
                            globalStyle={{
                              ...FontStyle.display_h3.medium,
                              color: Colors.white,
                            }}
                          />
                          <CustomText
                            children={moment(item.startDate).format('MMM')}
                            globalStyle={{
                              ...FontStyle.text_h3.medium,
                              color: Colors.white,
                            }}
                          />
                        </View>
                      </ImageBackground>
                      <View style={{ flex: 1, marginHorizontal: 8 }}>
                        <View style={{ flex: 1 }}>
                          <CustomText
                            children={item?.name?.slice(0, 30)}
                            globalStyle={{
                              fontWeight: 'bold',
                              marginBottom: normalize(8),
                            }}
                          />
                          <CustomText
                            children={item?.description?.slice(0, 30)}
                          />
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: normalize(8),
                          }}>
                          <View>
                            <CustomText
                              children={'Time'}
                              globalStyle={{
                                ...FontStyle.text_h6.regular,
                                color: Colors.oxford_blue['100'],
                              }}
                            />
                            <CustomText
                              children={moment(item.startDate).format('HH:mm')}
                              translate={false}
                              globalStyle={{
                                ...FontStyle.text_h5.regular,
                              }}
                            />
                          </View>
                          <View
                            style={{
                              paddingHorizontal: normalize(12),
                              paddingVertical: normalize(5),
                              borderRadius: normalize(12),
                              backgroundColor: item.price
                                ? Colors.yellow['500']
                                : Colors.green['500'],
                            }}>
                            <CustomText
                              children={item.price ? `${item.price} Դ` : 'Free'}
                              globalStyle={{
                                ...FontStyle.text_h5.regular,
                                color: Colors.white,
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </Animated.View>
              </View>
            );
          }}
        />
      </Animated.View>
    </View>
  );
};

export default MapScreen;
