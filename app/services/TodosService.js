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
    const response = await api.delete(`api/todos/${todoId}`);
    const todos = AppState.todos;
    const foundIndex = todos.findIndex(todo => todo.id == todoId);

    todos.splice(foundIndex, 1);
  }
}

export const todosService = new TodosService();