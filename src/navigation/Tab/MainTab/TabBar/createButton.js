import React, {useState} from 'react';
import {Pressable, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {deg} from 'react-native-linear-gradient-degree';
import {normalize} from 'assets/RootStyles/normalize';
import {Colors} from 'assets/RootStyles';
import Icon from 'components/Svgs';
import {ICON_NAMES} from 'components/Svgs/icon_names';
import {navigate} from 'services/NavigationService';
import {routNames} from 'constants/routNames';

function CreateButton(props) {
  const {theme, buttonColor, styles} = props;
  const [pressed, setPressed] = useState(false);
  return (
    <View>
      <View
        style={{
          width: normalize(150),
          height: normalize(120),
          backgroundColor: Colors.blue['500'],
          borderRadius: normalize(20),
          position: 'absolute',
          top: -normalize(124),
          left: -normalize(50),
          shadowColor: Colors.black,
          shadowOffset: {width: 2, height: 2},
          elevation: 8,
          opacity: pressed ? 1 : 0,
          padding: normalize(15),
        }}>
        <TouchableOpacity
          onPress={() => {
            // navigate(routeNames.CreateEvent, {screen: 'choose_category'});
          }}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name={ICON_NAMES.TAB_BAR.MENTOR}
            color={Colors.white}
            width={normalize(24)}
            height={normalize(24)}
          />
          {/*<CustomText*/}
          {/*  children={'Create Event'}*/}
          {/*  globalStyle={{marginLeft: normalize(10)}}*/}
          {/*/>*/}
        </TouchableOpacity>
        <View
          style={{
            height: 0.5,
            backgroundColor: Colors.solid_gray,
            marginTop: normalize(15),
          }}
        />
        <TouchableOpacity
          onPress={() => navigate(routNames.CreateEvent, {screen: 'request'})}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: normalize(15),
          }}>
          <Icon name={ICON_NAMES.TAB_BAR.REQUEST} color={Colors.white} />
          {/*<CustomText*/}
          {/*  children={'Send Request'}*/}
          {/*  globalStyle={{marginLeft: normalize(10)}}*/}
          {/*/>*/}
        </TouchableOpacity>
      </View>
      <Pressable style={{zIndex: 999}} onPress={() => setPressed(!pressed)}>
        <View
          style={[
            styles.middleIcon,
            {
              backgroundColor: Colors.blue['500'],
              shadowColor: Colors.black,
              shadowOffset: {width: 2, height: 2},
              elevation: 8,
            },
          ]}>
          <View style={{transform: [{rotate: '315deg'}]}}>
            <Icon
              name={ICON_NAMES.TAB_BAR.CREATE_ICON}
              width={normalize(25)}
              height={normalize(25)}
              color={theme?.PRIMARY_BACKGROUND_COLOR}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default CreateButton;
