export class Todo {
  constructor(data) {
    this.id = data.id
    this.description = data.description || ''
    this.completed = data.completed
  }

  get listTemplate() {
    return `
          <div class="d-flex justify-content-between align-items-center">
            <input onchange="app.TodosController.completeTodo('${this.id}')" type="checkbox" ${this.completed ? 'checked' : ''}>
            <p class="px-3">${this.description}</p>
            <i role="button" onclick="app.TodosController.deleteTodo('${this.id}')" class="fs-3 mdi mdi-delete-forever"></i>
          </div>
    `
  }
}