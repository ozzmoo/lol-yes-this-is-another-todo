<template>
  <v-main>
    <v-container>
      <div class="header">
        <h1>Todo</h1>
        <v-btn icon large class="add-new" @click="openAddFormOverlay"
          ><v-icon dark> mdi-plus </v-icon></v-btn
        >
      </div>
      <div class="main">
        <div class="main__left">
          <v-checkbox
            v-model="donetasks"
            :label="`Hide done tasks`"
          ></v-checkbox>
        </div>
        <div class="main__right">
          <div v-if="!donetasks" class="tasks">
            <div v-for="task in allTasks" :key="task.id">
              <Task :task="task" />
            </div>
          </div>
          <div v-else class="tasks">
            <div v-for="task in doneTasks" :key="task.id">
              <Task :task="task" />
            </div>
          </div>
        </div>
      </div>
      <NewTask />
    </v-container>
  </v-main>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import Task from "../components/Task";
import NewTask from "../components/NewTask";

export default {
  name: "Todo",
  components: {
    Task,
    NewTask,
  },

  data: () => ({
    donetasks: false,
  }),
  methods: {
    ...mapMutations(["openAddForm", "updateTasks"]),
    openAddFormOverlay() {
      this.openAddForm();
    },
    updateTasksFromLocale() {
      this.updateTasks();
    },
  },
  computed: mapGetters(["allTasks", "doneTasks"]),
  mounted() {
    this.updateTasksFromLocale();
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
}

.main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 1fr));
  grid-auto-flow: dense;
}
.tasks {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}
</style>
