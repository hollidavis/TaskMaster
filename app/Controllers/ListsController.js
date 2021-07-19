import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import NotificationsService from "../Services/NotificationsService.js";


//Private
function _draw() {
  let template = ''
  let lists = ProxyState.lists
  lists.forEach(l => template += l.Template)
  document.getElementById("lists").innerHTML = template
}

//Public
export default class ListsController {
  constructor() {
    ProxyState.on('lists', _draw)
    ProxyState.on('tasks', _draw)
    ProxyState.on('lists', saveState)
    ProxyState.on('tasks', saveState)

    loadState()
  }
  createList() {
    event.preventDefault()
    let form = event.target
    let rawList = {
      // @ts-ignore
      name: form.name.value,
      // @ts-ignore
      color: form.color.value
    }
    listsService.createList(rawList)
    // @ts-ignore
    form.reset()
  }


  async deleteList(id) {
    if (await NotificationsService.confirmAction("Are you sure you wanna delete this?")) {
      listsService.deleteList(id)
    }
  }

  createTask(listId) {
    event.preventDefault()
    let form = event.target
    let rawTask = {
      listId,
      // @ts-ignore
      task: form.task.value
    }
    listsService.createTask(rawTask)
    // @ts-ignore
    form.reset()
  }

  async deleteTask(id) {
    if (await NotificationsService.confirmAction("Are you sure you wanna delete this?")) {
      listsService.deleteTask(id)
    }
  }
}
