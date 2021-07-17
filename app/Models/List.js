
import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"
export default class List {
  constructor({ name, color, id = generateId() }) {
    this.name = name
    this.color = color
    this.id = id
  }

  get Template() {
    return /*html*/`
  <div class="col-md-3" id = "${this.id}">
    <div class="card mb-3">
        <div class="card-header bg-primary text-center">
            <h5 class="m-0">${this.name}</h5>
            <i class = "mdi mdi-alpha-x"><i>
        </div>
        <div class="card-body">
            <div id="tasks" class="d-flex justify-content-between">
            ${this.MyTasks}
            </div>
            <div>
                <form class="d-flex justify-content-between line m-0 onsubmit="app.listsController.createTask('${this.id}')"">
                    <div class="form-group mr-2">
                        <input type="text" name="task" class="form-control" placeholder="Add Task..."
                            required minlength="3" maxlength="50">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-outline-primary"><i class="mdi mdi-plus"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>`
  }

  get MyTasks() {
    let template = ''
    let tasks = ProxyState.tasks.filter(tasks => tasks.taskId === this.id)
    tasks.forEach(t => {
      template += t.Template
    })
    if (!template) {
      template += "No tasks yet!"
    }
    return template
  }

}