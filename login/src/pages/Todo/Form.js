import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export default function Form({ todoHandler }) {
  const [text, setText] = useState('');
  const [id, setId] = useState(0);

  const todoCriar = (text) => {
    const todObj = { text: text, id: id, completed: false };
    setId(id + 1);
    todoHandler(todObj);
    setText('');
  };

  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Tarefas do Puteiro"
          value={text}
          onChangeText={setText}
        />
        <Button title="Criar" onPress={() => todoCriar(text)} color="red" />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: '#fff',
    color: '#000',
  },
});
