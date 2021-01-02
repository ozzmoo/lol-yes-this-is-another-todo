export default {
  state: {
    tasks: [],
    tags: {
      'work': {},
      'study': {},
      'family': {}
    },
    addOverlay: false
  },
  mutations: {
    /* Get tasks from localestorage on load app */
    updateTasks(state) {
      state.tasks.length = 0
      let keys = Object.keys(localStorage);
      for (let key of keys) {
        if (!isNaN(key)) {
          state.tasks.unshift(JSON.parse(localStorage.getItem(key)))
        }
      }
    },
    /* Update "done" status of task */
    updateTaskStatus(state, task) {
      let indexOfTask = null
      for (let elInd = 0; elInd < state.tasks.length; elInd++) {
        if (state.tasks[elInd].id == task.id) {
          indexOfTask = elInd
          break
        }
      }
      state.tasks[indexOfTask].done = !state.tasks[indexOfTask].done

      localStorage[task.id] = JSON.stringify(task)
    },
    /* Add new task to localestorage and array tasks  */
    addNewTask(state, newTask) {
      localStorage[newTask.id] = JSON.stringify(newTask)
      state.tasks.unshift(newTask)
    },
    deleteTask(state, task) {
      let ind = null
      for (let i = 0; i < state.tasks.length; i++) {
        if (state.tasks[i].id == task.id) {
          ind = i
          break
        }
      }
      state.tasks.splice(ind, 1)
      localStorage.removeItem(task.id)
    },
    /* Show "Add new task form" */
    openAddForm(state) {
      state.addOverlay = true
    },
    /* Hide "Add new task form" */
    closeAddForm(state) {
      state.addOverlay = false
    }
  },
  actions: {

  },
  getters: {
    /* Get all tasks */
    allTasks(state) {
      return state.tasks
    },
    doneTasks(state) {
      return state.tasks.filter(task => {
        return !task.done
      })
    },
    /* Status of "Add new task" form */
    isAddOpened(state) {
      return state.addOverlay
    }
  }
}