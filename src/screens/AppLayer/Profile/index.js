import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import UserInfoSection from 'screens/AppLayer/Profile/Components/UserInfoSection';
import { normalize } from 'assets/RootStyles/normalize';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from 'assets/RootStyles';
import HistorySection from 'screens/AppLayer/Profile/Components/HistorySection';
import dispatch from 'utils/dispatch/dispatch';
import { getEventHistory } from 'state/events/operations/getEventHistory';
import { getAllGroups } from 'state/groups/operations/getAllGroups';
import { useSelector } from 'react-redux';

const Profile = ({ navigation }) => {
  const { currentUser } = useSelector(({ user }) => user);

  const insets = useSafeAreaInsets();
  const handleFocus = useCallback(() => {
    dispatch(getEventHistory());
    dispatch(getAllGroups());
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = navigation?.addListener('focus', handleFocus);

    return unsubscribe;
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top + normalize(16),
        backgroundColor: Colors.white,
      }}>
      <UserInfoSection />
      <HistorySection />
    </View>
  );
};

export default Profile;
