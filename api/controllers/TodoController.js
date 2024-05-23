const todoRepository = require('../repository/TodoRepository');

exports.getAllTodos = async (req, res) => {
  const todos = await todoRepository.findAll();
  res.json(todos);
};

exports.getTodoById = async (req, res) => {
  const todo = await todoRepository.findById(req.params.id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Não encontrado' });
  }
};

exports.createTodo = async (req, res) => {
  const todo = await todoRepository.create(req.body);
  res.status(201).json(todo);
};

exports.updateTodo = async (req, res) => {
  const updatedTodo = await todoRepository.updateById(req.params.id, req.body);
  res.json(updatedTodo);
};

exports.deleteTodo = async (req, res) => {
  const deleted = await todoRepository.deleteById(req.params.id);
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Não encontrado' });
  }
};

exports.toggleTodo = async (req, res) => {
  try {
    const todo = await todoRepository.findById(req.params.id);
    if (todo) {
      todo.completed = !todo.completed;
      const updatedTodo = await todoRepository.updateById(req.params.id, todo);
      res.json(updatedTodo);
    } else {
      res.status(404).json({ error: 'Não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
