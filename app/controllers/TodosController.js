import { AppState } from "../AppState.js";
import { todosService } from "../services/TodosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class TodosController {
  constructor() {
    AppState.on('user', this.getTodos)
    AppState.on('todos', this.drawTodos)
  }

  async createTodo() {
    event.preventDefault();
    const todoFormElem = event.target;
    const todoFormData = getFormData(todoFormElem);
    try {
      await todosService.createTodo(todoFormData);
      todoFormElem.reset();
    } catch (error) {
      Pop.error(error);
    }
  }

  async getTodos() {
    try {
      await todosService.getTodos();
    } catch (error) {
      Pop.error(error);
    }
  }

  async deleteTodo(todoId) {
    let wantsToDel = await Pop.confirm('Are you sure you want to delete this todo?');
    if (wantsToDel) {
      try {
        await todosService.deleteTodo(todoId);
      } catch (error) {
        Pop.error(error);
      }
    } else {
      return
    }
  }

  async completeTodo(todoId) {
    try {
      await todosService.completeTodo(todoId);
    } catch (error) {
      Pop.error(error);
    }
  }

  drawTodos() {
    const todoContElem = document.getElementById('todo-cont');

    if (AppState.user == null) {
      return
    } else {
      todoContElem.classList.remove("d-none");
    }

    const todos = AppState.todos;
    let todoCont = '';

    todos.forEach(todo => todoCont += todo.listTemplate);

    setHTML('todo-list', todoCont);

    const uncompletedTodos = todos.filter(todo => todo.completed == false);
    setHTML('todo-count', uncompletedTodos.length);
  }
}