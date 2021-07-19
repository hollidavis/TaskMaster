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
    let foundList = ProxyState.lists.find(l => l.id == rawTask.listId)
    foundList.totalCount++
  }
  deleteList(id) {
    ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
    ProxyState.tasks = ProxyState.tasks.filter(task => task.listId != id)
  }

  deleteTask(id) {
    let foundTask = ProxyState.tasks.find(t => t.id == id)
    let foundList = ProxyState.lists.find(l => l.id == foundTask.listId)
    if (foundTask.check == true) {
      foundList.totalCount--
      foundList.checkCount--
    } else if (foundTask.check == false) {
      foundList.totalCount--
    }
    ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
  }

  checked(id) {
    let foundTask = ProxyState.tasks.find(t => t.id == id)
    let foundList = ProxyState.lists.find(l => l.id == foundTask.listId)
    if (foundTask.check == false) {
      foundTask.check = true
      foundList.checkCount++
      NotificationsService.toast("You did it! Good work")
    } else {
      foundTask.check = false
      foundList.checkCount--
    }
  }
}
export const listsService = new ListsService();