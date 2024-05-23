import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import axios from 'axios';
import Form from './Form';
import TodoItem from './TodoItem';

const API_URL = 'http://10.0.2.2:3000/todo';

export default function TodoH() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/todos`)
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);

  const todoHandler = (todo) => {
    axios.post(`${API_URL}/create`, todo)
      .then(response => setTodos([...todos, response.data]))
      .catch(error => console.error(error));
  };

  const toggleTodo = (id) => {
    const todo = todos.find(todo => todo._id === id);
    if (todo) {
      axios.put(`${API_URL}/todos/toggle/${id}`)
        .then(response => {
          const newTodos = todos.map(todo =>
            todo._id === id ? response.data : todo
          );
          setTodos(newTodos);
        })
        .catch(error => console.error(error));
    }
  };

  const apagarTodo = (id) => {
    axios.delete(`${API_URL}/delete/${id}`)
      .then(() => {
        const filtered = todos.filter((todo) => todo._id !== id);
        setTodos(filtered);
      })
      .catch(error => console.error(error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Form todoHandler={todoHandler} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TodoItem todo={item} toggleTodo={() => toggleTodo(item._id)} apagarTodo={() => apagarTodo(item._id)} />
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
