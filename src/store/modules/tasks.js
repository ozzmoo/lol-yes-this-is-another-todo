export default {
  state: {
    tasks: [{
      id: 0,
      title: "Simple task title",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum mollitia magni adipisci sed deleniti!",
      done: false,
      tags: ['work', 'study', 'family']
    }, ],
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
      for (let i = 0; i < localStorage.length - 1; i++) {
        let key = localStorage.key(i);
        state.tasks.unshift(JSON.parse(localStorage.getItem(key)))
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
    },
    /* Add new task to localestorage and array tasks  */
    addNewTask(state, newTask) {
      localStorage[newTask.id] = JSON.stringify(newTask)
      state.tasks.unshift(newTask)
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
    /* Status of "Add new task" form */
    isAddOpened(state) {
      return state.addOverlay
    }
  }
}