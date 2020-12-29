export default {
  state: {
    tasks: [{
        id: 0,
        title: "Simple task title",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum mollitia magni adipisci sed deleniti!",
        done: false,
      },
      {
        id: 1,
        title: "The second task title",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        done: false,
      },
      {
        id: 2,
        title: "The third task title",
        text: "Lorem, ipsum dolor sit amet. Nesciunt earum mollitia magni adipisci sed deleniti!",
        done: false,
      },
    ],
  },
  mutations: {
    updateTasks(state, tasks) {
      tasks.forEach(task => {
        state.task.push(task)
      });
      /* Push tasks from localestorage */
    },
    updateTaskStatus(state, task) {
      let indexOfTask = null
      for (let elInd = 0; elInd < state.tasks.length; elInd++) {
        if (state.tasks[elInd].id == task.id) {
          indexOfTask = elInd
          break
        }
      }
      state.tasks[indexOfTask].done = !state.tasks[indexOfTask].done
    }
  },
  actions: {
    getTasksFromLocale( /* ctx */ ) {
      /* Get array of tasks from localstorage */
      /* ctx.commit('updateTasks', tasks) */
    }
  },
  getters: {
    allTasks(state) {
      return state.tasks
    }
  }
}