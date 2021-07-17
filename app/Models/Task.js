import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor({ task, listId, id = generateId() }) {
    this.task = task
    this.id = id
    this.listId = listId
  }

  get Template() {
    return /*html*/`
    <div>
      <input type="checkbox" id="checkbox">
      <label for="checkbox">${this.task}</label>
    </div>
      <span><i class="mdi mdi-18px mdi-trash-can" onclick="app.tasksController.removeTask('${this.id}')"></i></span>`
  }
}