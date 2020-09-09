import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import styles from './styles';

export default function LandingScreenComponent() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Text>Landing Screen</Text>
      </View>
    </ScrollView>
  );
}
