import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { api } from "./AxiosService.js";

class TodosService {


  async getTodos() {
    const response = await api.get('api/todos');
    const newTodos = response.data.map(todo => new Todo(todo));

    AppState.todos = newTodos;
  }

  async createTodo(data) {
    const response = await api.post('api/todos', data);
    const newTodo = new Todo(response.data);

    AppState.todos.push(newTodo);
  }

  async deleteTodo(todoId) {
    await api.delete(`api/todos/${todoId}`);
    const todos = AppState.todos;
    const foundIndex = todos.findIndex(todo => todo.id == todoId);

    todos.splice(foundIndex, 1);
  }

  async completeTodo(todoId) {
    const todos = AppState.todos;
    const todoIndex = todos.findIndex(todo => todo.id == todoId);
    const payload = { completed: !todos[todoIndex].completed };

    const response = await api.put(`api/todos/${todoId}`, payload);

    todos.splice(todoIndex, 1, new Todo(response.data));
  }

  get getTime() {
    let time = new Date().toLocaleTimeString();
    return time;
  }
}

export const todosService = new TodosService();