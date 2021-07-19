
import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"
export default class List {

  constructor({ name, color, id = generateId() }) {
    this.name = name
    this.color = color
    this.id = id
    this.count = 0
    this.checked = 0
  }

  get Template() {
    return /*html*/`
  <div class="col-md-3" id = "${this.id}">
    <div class="card mb-3">
        <div class="card-header" style="background-color:${this.color}">
          <div class = "w-100 d-flex align-items-center justify-content-between text-center">
            <h5 class="m-0"><b>${this.name}</b></h5>
            <button type="button" class="btn btn-outline-dark" onclick = "app.listsController.deleteList('${this.id}')">X</button>
          </div>
          <div class = "w-100 d-flex align-items-center justify-content-center">
            <p class="m-0">${this.checked}/${this.count}<p>
          </div>
        </div>
        <div class="card-body">
            <div id="tasks" class="d-flex flex-column justify-content-between">
            ${this.MyTasks}
            </div>
            <div>
                <form onsubmit="app.listsController.createTask('${this.id}')" class="d-flex justify-content-between line">
                    <div class="form-group mr-2">
                        <input type="text" name="task" id="task" class="form-control" placeholder="Add Task..."
                            required minlength="3" maxlength="50">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-outline-dark"><i class="mdi mdi-plus"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>`
  }

  get MyTasks() {
    let template = ''
    let tasks = ProxyState.tasks.filter(tasks => tasks.listId === this.id)
    tasks.forEach(t => {
      template += t.Template
    })
    if (!template) {
      template += "No tasks yet!"
    }
    return template
  }

}