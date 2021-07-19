import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import List from "../Models/List.js";
import NotificationsService from "../Services/NotificationsService.js";

class ListsService {
  createList(rawList) {
    ProxyState.lists = [...ProxyState.lists, new List(rawList)]
  }

  createTask(rawTask) {
    ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask)]
  }
  deleteList(id) {
    ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
    ProxyState.tasks = ProxyState.tasks.filter(task => task.listId != id)
  }

  deleteTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
  }

  checked(id) {
    let foundTask = ProxyState.tasks.find(t => t.id == id)
    if (foundTask.check == false) {
      foundTask.check = true
      NotificationsService.toast("You did it! Good work")
    } else {
      foundTask.check = false
    }
  }
}

export const listsService = new ListsService();