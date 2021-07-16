import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";


//Private
function _draw() {
  let tasks = ProxyState.tasks;
  let template = ''
  tasks.forEach(t => template += t.Template)
  document.getElementById("tasks").innerHTML = tasks.Template
}

//Public
export default class TasksController {
  constructor() {
    ProxyState.on("tasks", _draw);
  }
}
