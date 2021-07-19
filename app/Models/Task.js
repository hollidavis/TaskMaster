import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor({ task, listId, id = generateId(), check }) {
    this.task = task
    this.id = id
    this.listId = listId
    this.check = check || false
  }

  get Template() {
    return /*html*/`
    <div class="d-flex flex-row justify-content-between">
      <div>
        <input type="checkbox" id="${this.id}" onclick="app.listsController.checked('${this.id}')" ${this.check ? "checked" : ""} >
        <label for="checkbox">${this.task}</label>
      </div >
      <span><i class="mdi mdi-18px mdi-trash-can" onclick="app.listsController.deleteTask('${this.id}')"></i></span>
    </div > `
  }
}