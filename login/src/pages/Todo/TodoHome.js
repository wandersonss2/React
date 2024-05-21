import React, { useState } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Form from './Form';
import TodoItem from './TodoItem';

export default function TodoH() {
  const [todos, setTodos] = useState([]);

  const todoHandler = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const apagarTodo = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Form todoHandler={todoHandler} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TodoItem todo={item} toggleTodo={toggleTodo} apagarTodo={apagarTodo} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000',
  },
  item: {
    marginTop: 16,
  },
});
