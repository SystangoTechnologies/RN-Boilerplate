import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  CheckBox
} from 'react-native';

const Task = (props) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={styles.taskWrapper}>
      <TouchableOpacity onPress={() => props.setChecked()}>
        <CheckBox />
      </TouchableOpacity>
      {props.checked}
      <Text style={styles.task}>{props.text}</Text>
      <TouchableOpacity
        onPress={props.delete}
        style={{ position: 'absolute', right: 5, top: 10 }}
      >
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 20
          }}
        >
          DELETE
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Task;

const styles = StyleSheet.create({
  taskWrapper: {
    marginTop: '5%',
    flexDirection: 'row',
    borderColor: '#FFFFFF',
    borderBottomWidth: 1.5,
    width: '100%',
    alignItems: 'stretch',
    minHeight: 40
  },
  task: {
    paddingBottom: 20,
    paddingLeft: 10,
    marginTop: 6,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  },
  verticalLine: {
    borderBottomColor: 'white',
    borderBottomWidth: 4,
    marginLeft: 10,
    width: '100%',
    position: 'absolute',
    marginTop: 15
  }
});
