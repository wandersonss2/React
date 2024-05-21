const Todo = require('../models/Todo');

class TodoRepository {
  async create(todoData) {
    const { text, completed } = todoData;

    const newTodo = new Todo({
      text: text,
      completed: completed || false,
    });

    await newTodo.save();
    return newTodo;
  }

  async findAll() {
    return Todo.find();
  }

  async findById(id) {
    return Todo.findById(id);
  }

  async updateById(id, todoData) {
    return Todo.findByIdAndUpdate(id, todoData, { new: true });
  }

  async deleteById(id) {
    return Todo.findByIdAndDelete(id);
  }
}

module.exports = new TodoRepository();
