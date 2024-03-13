import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Styles } from './style';
import { Colors } from 'assets/RootStyles';
import Header from 'components/Header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CustomText } from 'components/Text';
import { normalize } from 'assets/RootStyles/normalize';

function PrivacyScreen(props) {
  const insets = useSafeAreaInsets();
  const styles = Styles(insets);
  return (
    <ScrollView style={styles.container}>
      <View style={{ paddingBottom: insets.bottom + normalize(60) }}>
        <Header
          title={'profile.privacy_policy'}
          backIconContainer={{
            shadowOpacity: 0,
            backgroundColor: Colors.purple['200'],
          }}
        />
        <View style={styles.content}>
          <CustomText
            children={'privacy_policy.our_services'}
            globalStyle={styles.heading}
          />
          <CustomText
            children={'privacy_policy.our_services.content'}
            globalStyle={styles.text}
          />
          <CustomText
            children={'privacy_policy.intellectual_property_rights'}
            globalStyle={styles.heading}
          />
          <CustomText
            children={'privacy_policy.intellectual_property_rights.content'}
            globalStyle={styles.text}
          />
          <CustomText
            children={'privacy_policy.user_representations'}
            globalStyle={styles.heading}
          />
          <CustomText
            children={'privacy_policy.user_representations.content'}
            globalStyle={styles.text}
          />
          <CustomText
            children={'privacy_policy.user_registration'}
            globalStyle={styles.heading}
          />
          <CustomText
            children={'privacy_policy.user_registration.content'}
            globalStyle={styles.text}
          />
          <CustomText
            children={'privacy_policy.prohibited_activities'}
            globalStyle={styles.heading}
          />
          <CustomText
            children={'privacy_policy.prohibited_activities.content'}
            globalStyle={styles.text}
          />
          <CustomText
            children={'privacy_policy.third_party_links'}
            globalStyle={styles.heading}
          />
          <CustomText
            children={'privacy_policy.third_party_links.content'}
            globalStyle={styles.text}
          />
          <CustomText
            children={'privacy_policy.advertisements'}
            globalStyle={styles.heading}
          />
          <CustomText
            children={'privacy_policy.advertisements.content'}
            globalStyle={styles.text}
          />
          <CustomText
            children={'privacy_policy.mobile_application_license'}
            globalStyle={styles.heading}
          />
          <CustomText
            children={'privacy_policy.mobile_application_license.content'}
            globalStyle={styles.text}
          />
          <CustomText
            children={'privacy_policy.third_party_websites_content'}
            globalStyle={styles.heading}
          />
          <CustomText
            children={'privacy_policy.third_party_websites_content.content'}
            globalStyle={styles.text}
          />
          <CustomText
            children={'privacy_policy.advertisers'}
            globalStyle={styles.heading}
          />
          <CustomText
            children={'privacy_policy.advertisers.content'}
            globalStyle={styles.text}
          />
          <CustomText
            children={'privacy_policy.services_management'}
            globalStyle={styles.heading}
          />
          <CustomText
            children={'privacy_policy.services_management.content'}
            globalStyle={styles.text}
          />
          <CustomText
            children={'privacy_policy.privacy_policy'}
            globalStyle={styles.heading}
          />
          <CustomText
            children={'privacy_policy.privacy_policy.content'}
            globalStyle={styles.text}
          />
          <CustomText
            children={'privacy_policy.term_termination'}
            globalStyle={styles.heading}
          />
          <CustomText
            children={'privacy_policy.term_termination.content'}
            globalStyle={styles.text}
          />
          <CustomText
            children={'privacy_policy.modifications_interruptions'}
            globalStyle={styles.heading}
          />
          <CustomText
            children={'privacy_policy.modifications_interruptions.content'}
            globalStyle={styles.text}
          />
          <CustomText
            children={'privacy_policy.dispute_resolution'}
            globalStyle={styles.heading}
          />
          <CustomText
            children={'privacy_policy.dispute_resolution.content'}
            globalStyle={styles.text}
          />
          <CustomText
            children={'privacy_policy.corrections'}
            globalStyle={styles.heading}
          />
          <CustomText
            children={'privacy_policy.corrections.content'}
            globalStyle={styles.text}
          />
          <CustomText
            children={'privacy_policy.disclaimer'}
            globalStyle={styles.heading}
          />
          <CustomText
            children={'privacy_policy.disclaimer.content'}
            globalStyle={styles.text}
          />
          <CustomText
            children={'privacy_policy.limitations_liability'}
            globalStyle={styles.heading}
          />
          <CustomText
            children={'privacy_policy.limitations_liability.content'}
            globalStyle={styles.text}
          />
          <CustomText
            children={'privacy_policy.indemnification'}
            globalStyle={styles.heading}
          />
          <CustomText
            children={'privacy_policy.indemnification.content'}
            globalStyle={styles.text}
          />
          <CustomText
            children={'privacy_policy.user_data'}
            globalStyle={styles.heading}
          />
          <CustomText
            children={'privacy_policy.user_data.content'}
            globalStyle={styles.text}
          />
          <CustomText
            children={'privacy_policy.electronic_communications'}
            globalStyle={styles.heading}
          />
          <CustomText
            children={'privacy_policy.electronic_communications.content'}
            globalStyle={styles.text}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default PrivacyScreen;
