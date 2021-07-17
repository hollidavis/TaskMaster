import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import List from "../Models/List.js";

class ListsService {
  createList(rawList) {
    ProxyState.lists = [...ProxyState.lists, new List(rawList)]
  }

  createTask(rawTask) {
    ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask)]
  }
  delete(id) {
    ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
    ProxyState.tasks = ProxyState.tasks.filter(task => task.listId != id)
  }

  deleteTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
  }
}

export const listsService = new ListsService();