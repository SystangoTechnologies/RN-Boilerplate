import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import * as reactNativeRatings from 'react-native-ratings';
import I18n from '../../i18n/index';
import styles from './styles';

class FeedbackComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackText: ''
    };
  }

  ratingCompleted(rating) {
    console.log(`Rating is: ${rating}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.headerContainer]}>
          <Text style={styles.text}>{I18n.t('favScreen')}</Text>
          <Text style={styles.textRate}>{I18n.t('rateMessage')}</Text>
          <View style={styles.inputContainer}>
            <TextInput
              numberOfLines={2}
              rowSpan={2}
              blurOnSubmit
              onChangeText={(text) => this.setState({ feedbackText: text })}
              onEndEditing={() => {}}
              onSubmitEditing={() => {}}
              style={styles.textInputContainer}
              bordered
              placeholder={I18n.t('feedbackPlaceholderMessage')}
              placeholderTextColor="#2B2D42"
              autoCorrect={false}
            />
          </View>
          <View style={styles.ratingContainer}>
            <reactNativeRatings.Rating
              type="custom"
              ratingColor="#ed9121"
              ratingTextColor="#000000"
              ratingCount={5}
              startingValue={1}
              imageSize={60}
              showRating
              onFinishRating={this.ratingCompleted}
            />
          </View>
          <TouchableOpacity style={styles.subsContainer} onPress={() => {}}>
            <Text style={styles.subsText}>{I18n.t('submit')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps() {
  return {};
}

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackComponent);
