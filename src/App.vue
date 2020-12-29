<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="tasks" v-for="task in allTasks" :key="task.id">
          <Task :task="task" />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Task from "./components/Task";
export default {
  name: "App",

  components: {
    Task,
  },

  data: () => ({}),
  computed: mapGetters(["allTasks"]),
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
