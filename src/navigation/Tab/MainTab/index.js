import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routNames} from 'constants/routNames';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {normalize} from 'assets/RootStyles/normalize';
import {Colors, Fonts, FontStyle} from 'assets/RootStyles';
import React from 'react';
import {navigate} from 'services/NavigationService';
import Icon from 'components/Svgs';
import HomeScreen from 'screens/AppLayer/Home';
import {ICON_NAMES} from 'components/Svgs/icon_names';

function MainTab() {
  const Tab = createBottomTabNavigator();
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={tab => {
        return (
          <View
            style={{
              paddingBottom: insets.bottom,
              paddingHorizontal: normalize(16),
              backgroundColor: Colors.white,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            {tab.state.routes.map((data, index) => {
              const active = tab.state.index === index;
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigate(data.name);
                  }}
                  activeOpacity={0.8}
                  key={data.key}
                  style={{
                    alignItems: 'center',
                    paddingHorizontal: normalize(5.5),
                  }}>
                  <Icon
                    name={
                      active
                        ? `activeTab${data.name}Icon`
                        : `tab${data.name}Icon`
                    }
                    size={normalize(28)}
                    color={Colors.oxford_blue['100']}
                    disabled={true}
                  />
                  {/*<Text*/}
                  {/*  style={{*/}
                  {/*    ...FontStyle.text_h6.regular,*/}
                  {/*    fontFamily: Fonts.arm.regular,*/}
                  {/*    color: active*/}
                  {/*      ? Colors.green['500']*/}
                  {/*      : Colors.oxford_blue['100'],*/}
                  {/*  }}>*/}
                  {/*  {data.name}*/}
                  {/*</Text>*/}
                </TouchableOpacity>
              );
            })}
          </View>
        );
      }}>
      <Tab.Screen name={routNames.COMPASS} component={HomeScreen} />
      {/*<Tab.Screen name={routNames.ADDRESSES} component={AddressesScreen} />*/}
      {/*<Tab.Screen name={routNames.ORDERS.INITIAL} component={OrdersTab} />*/}
      {/*<Tab.Screen name={routNames.TOOLS} component={ShopListScreen} />*/}
      {/*<Tab.Screen name={routNames.PROFILE} component={MapScreen} />*/}
    </Tab.Navigator>
  );
}

export default MainTab;
