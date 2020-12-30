<template>
  <v-app>
    <v-main>
      <v-container>
        <v-btn class="add-new" @click="openAddFormOverlay">Add</v-btn>
        <NewTask />
        <div class="tasks" v-for="task in allTasks" :key="task.id">
          <Task :task="task" />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import Task from "./components/Task";
import NewTask from "./components/NewTask";

export default {
  name: "App",

  components: {
    Task,
    NewTask,
  },

  data: () => ({}),
  methods: {
    ...mapMutations(["openAddForm", "updateTasks"]),
    openAddFormOverlay() {
      this.openAddForm();
    },
    updateTasksFromLocale() {
      this.updateTasks();
    },
  },
  computed: mapGetters(["allTasks"]),
  mounted() {
    this.updateTasksFromLocale();
  },
};
</script>

<style lang="scss">
@import "./assets/Fonts/AdobeClean-Light/style.css";
@import "./assets/Fonts/AdobeClean-Bold/style.css";
@import "./assets/Fonts/AdobeClean-Regular/style.css";
* {
  font-family: "Adobe Clean";
  color: #6a675d;
}

body {
  background-color: #fafafa;
}
</style>
