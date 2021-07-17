import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import List from "../Models/List.js";

class TasksService {
  createList(rawList) {
    ProxyState.list = [...ProxyState.list, new List(rawList)]
  }

  createTask(rawTask) {
    ProxyState.task = [...ProxyState.task, new Task(rawTask)]
  }
  delete(id) {

  }
}

export const tasksService = new TasksService();