import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import styles from './styles';
import Task from './Task';

const AboutUsTabComponent = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (value.length > 0) {
      setTodos([...todos, { text: value, key: Date.now(), checked: false }]);
      setValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.key !== id) {
          return true;
        } else {
          return false;
        }
      })
    );
  };

  const handleChecked = (id) => {
    setTodos(
      todos.map((todo) => {
        const _todo = {};
        if (todo.key === id) {
          _todo.checked = !_todo.checked;
        }
        return todo;
      })
    );
  };
  return (
    <View style={{ width: '100%', height: '100%', flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ marginTop: '10%', fontSize: 16, color: 'black' }}>
          Today
        </Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            multiline
            onChangeText={(text) => setValue(text)}
            placeholder="Do it now!"
            placeholderTextColor="black"
            value={value}
          />
          <TouchableOpacity onPress={() => handleAddTodo()}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 20
              }}
            >
              PLUS
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {todos.map((task) => (
            <Task
              text={task.text}
              key={task.key}
              checked={task.checked}
              setChecked={() => handleChecked(task.key)}
              delete={() => handleDeleteTodo(task.key)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
export default AboutUsTabComponent;
