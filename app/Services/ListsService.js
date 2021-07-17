import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import List from "../Models/List.js";

class ListsService {
  createList(rawList) {
    ProxyState.list = [...ProxyState.list, new List(rawList)]
  }

  createTask(rawTask) {
    ProxyState.task = [...ProxyState.task, new Task(rawTask)]
  }
  delete(id) {
    ProxyState.list = ProxyState.list.filter(list => list.id != id)
    ProxyState.task = ProxyState.task.filter(task => task.pizzaId != id)
  }

  deleteTask(id) {
    ProxyState.task = ProxyState.task.filter(task => task.id != id)
  }
}

export const listsService = new ListsService();