const express = require('express');
const router = express.Router();
const todoController = require('../controllers/TodoController');

router.get('/todos', todoController.getAllTodos);
router.get('/todos/:id', todoController.getTodoById);
router.post('/create', todoController.createTodo);
router.put('/todos/:id', todoController.updateTodo);
router.delete('/delete/:id', todoController.deleteTodo);
router.put('/todos/toggle/:id', todoController.toggleTodo);

module.exports = router;
