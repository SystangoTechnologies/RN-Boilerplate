import React, { useState, useCallback } from 'react';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import analytics from '@react-native-firebase/analytics';
import DateTimePicker from '@react-native-community/datetimepicker';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Validators from '../../Utils/Validators';
import showToast from '../../Utils/showToast';
import styles from './styles';
import I18n from '../../i18n/index';

export default function SignupScreenComponent({ props }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPicker, togglePicker] = useState(false);
  const [dob, setDOB] = useState('');

  const MaxDate = new Date();
  const pastYears = MaxDate.getFullYear() - 21;
  MaxDate.setFullYear(pastYears);

  const onSubmit = useCallback(() => {
    if (Validators.isEmpty(name)) {
      showToast('Name is empty');
    } else if (Validators.isEmpty(email)) {
      showToast('Email is empty');
    } else if (!Validators.validEmail(email)) {
      showToast('Email is invalid');
    } else if (Validators.isEmpty(password)) {
      showToast('Password is empty');
    } else if (!Validators.isValidPassword(password)) {
      showToast('Password is invalid');
    } else {
      const user = { user: { name, email, password } };
      analytics().logEvent('login_method', {
        type: 'email',
        email,
        platform: Validators.platform()
      });
      props.userSignup(user);
    }
  }, [email, password, props]);

  const formatDate = useCallback(
    (date) => {
      togglePicker(false);
      if (date === '') {
        return '';
      } else {
        const d = new Date(date);
        const month = `${d.getMonth() + 1}`;
        const day = `${d.getDate()}`;
        const year = d.getFullYear();
        const _date = [month, day, year].join('-');
        setDOB(_date);
        return _date;
      }
    },
    [email, password, props]
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.signInContainers}>
        <Text style={styles.title}>{I18n.t('signup_title')}</Text>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <View style={{ flex: 1 }}>
            <TextInput
              underlineColorAndroid="transparent"
              returnKeyType="next"
              placeholder={I18n.t('signup_name')}
              placeholderTextColor="gray"
              value={name}
              autoCapitalize="none"
              onChangeText={(text) => setName(text)}
              keyboardType="default"
              style={styles.emailInput}
            />
          </View>
          {name !== '' && (
            <View style={styles.crossIconContainer}>
              <TouchableOpacity
                onPress={() => {
                  setName('');
                }}
                style={[styles.crossIcon]}
              >
                <Text style={{ fontSize: 26 }}>x</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <View style={{ flex: 1 }}>
            <TextInput
              underlineColorAndroid="transparent"
              returnKeyType="next"
              placeholder="Email"
              placeholderTextColor="gray"
              value={email}
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
              style={styles.emailInput}
            />
          </View>
          {email !== '' && (
            <View style={styles.crossIconContainer}>
              <TouchableOpacity
                onPress={() => {
                  setEmail('');
                }}
                style={[styles.crossIcon]}
              >
                <Text style={{ fontSize: 26 }}>x</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <TextInput
              underlineColorAndroid="transparent"
              returnKeyType="next"
              placeholder={I18n.t('password')}
              placeholderTextColor="gray"
              value={password}
              autoCapitalize="none"
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              style={styles.emailInput}
            />
          </View>
          {password !== '' && (
            <View style={styles.crossIconContainer}>
              <TouchableOpacity
                onPress={() => {
                  setPassword('');
                }}
                style={[styles.crossIcon]}
              >
                <Text style={{ fontSize: 26 }}>x</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        {showPicker ? (
          <DateTimePicker
            value={MaxDate}
            maximumDate={new Date(2300, 10, 20)}
            mode="date"
            is24Hour
            display="default"
            onChange={(event, date) => formatDate(date)}
          />
        ) : null}
        <TouchableOpacity
          style={styles.dobContainer}
          onPress={() => togglePicker(true)}
        >
          <Text style={{ color: dob === '' ? 'gray' : 'black' }}>
            {dob === '' ? I18n.t('Select_Date') : dob}
          </Text>
        </TouchableOpacity>
        <View style={{ height: 100, marginTop: 10 }}>
          <GooglePlacesAutocomplete
            placeholder={I18n.t('signup_address')}
            minLength={2} // minimum length of text to search
            autoFocus={false}
            returnKeyType="search" // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            keyboardAppearance="light" // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
            listViewDisplayed="auto" // true/false/undefined
            fetchDetails
            renderDescription={(row) => row.description} // custom description render
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            getDefaultValue={() => ''}
            query={{
              key: 'YOUR API KEY',
              language: 'en', // language of the results
              types: '(cities)' // default: 'geocode'
            }}
            styles={{
              textInputContainer: {
                backgroundColor: 'rgba(0,0,0,0)',
                borderWidth: 1,
                borderColor: '#d0d0d0',
                padding: 0
              },
              textInput: {
                padding: 0,
                color: 'gray'
              },
              description: {
                fontWeight: 'bold'
              },
              predefinedPlacesDescription: {
                color: '#1faadb'
              }
            }}
            // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
            // currentLocationLabel="Current location"
            nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            GoogleReverseGeocodingQuery={{}}
            GooglePlacesSearchQuery={{
              rankby: 'distance',
              type: 'cafe'
            }}
            GooglePlacesDetailsQuery={{
              fields: 'formatted_address'
            }}
            filterReverseGeocodingByTypes={[
              'locality',
              'administrative_area_level_3'
            ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
            // predefinedPlaces={[homePlace, workPlace]}
            debounce={200}
          />
        </View>
        <TouchableOpacity
          style={styles.subsContainer}
          onPress={() => onSubmit()}
        >
          <Text style={styles.subsText}>{I18n.t('submit')}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
