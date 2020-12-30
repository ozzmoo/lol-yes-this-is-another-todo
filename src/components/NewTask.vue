<template>
  <div>
    <v-overlay :value="isAddOpened" :dark="false">
      <v-card class="new">
        <v-card-title class="new__head">
          <h2 class="new__title">Add new</h2>
          <div class="new__btns">
            <v-btn
              class="new__add"
              depressed
              fab
              small
              color="#DAF2D6"
              @click="addTask"
              ><v-icon dark> mdi-plus </v-icon></v-btn
            >
            <v-btn class="new__close" depressed fab small @click="closeOverlay"
              ><v-icon dark> mdi-close </v-icon></v-btn
            >
          </div>
        </v-card-title>
        <v-card-text>
          <v-text-field label="Title" v-model="task.title"></v-text-field>
          <v-textarea label="Task" v-model="task.text"></v-textarea>
        </v-card-text>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "NewTask",
  data() {
    return {
      task: {
        title: "",
        text: "",
      },
    };
  },
  methods: {
    ...mapMutations(["addNewTask", "closeAddForm"]),
    addTask() {
      if (this.task.text != "") {
        this.addNewTask({
          id: new Date().getTime(),
          title: this.task.title,
          text: this.task.text,
          done: false,
          tags: [],
        });
        this.closeOverlay();
      }
    },
    closeOverlay() {
      this.closeAddForm();
    },
  },
  computed: mapGetters(["isAddOpened"]),
};
</script>

<style lang="scss">
.new {
  max-width: 600px;
  min-width: 300px;
  width: 100%;

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>