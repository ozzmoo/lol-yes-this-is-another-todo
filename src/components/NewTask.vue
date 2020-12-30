<template>
  <div>
    <v-overlay :value="isAddOpened" :dark="false">
      <v-card class="new">
        <v-card-title class="new__head">
          <v-btn class="new__close" depressed fab small @click="closeOverlay"
            ><v-icon dark> mdi-close </v-icon></v-btn
          >
          <v-btn
            class="new__add"
            depressed
            small
            dark
            color="#69665C"
            @click="addTask"
            >Add</v-btn
          >
        </v-card-title>
        <v-card-text>
          <v-text-field
            filled
            label="Title"
            v-model="task.title"
          ></v-text-field>
          <v-textarea filled label="Task" v-model="task.text"></v-textarea>
          <div class="new__footer">
            <h2>Tags</h2>
          </div>
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
.v-overlay__content {
  margin: 5px;
  max-width: 900px;
  min-width: 300px;
  width: 100%;
}

.new {
  width: 100%;
  padding: 0px 10px;
  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__add {
    color: white;
    padding: 30px;
  }
}
</style>