import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TodoItem({ todo, toggleTodo, apagarTodo }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Checkbox
          status={todo.completed ? 'checked' : 'unchecked'}
          onPress={() => toggleTodo(todo.id)}
        />
        <Text style={styles.text}>{todo.text}</Text>
        <TouchableOpacity onPress={() => apagarTodo(todo.id)}>
          <Icon name="delete-forever" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
});
