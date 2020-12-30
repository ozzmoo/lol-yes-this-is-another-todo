<template>
  <div class="task">
    <div class="task__head">
      <h2 class="task__title" :class="{ 'task--done': task.done }">
        {{ task.title }}
      </h2>
      <div class="task__controls">
        <v-btn icon><v-icon dark> mdi-pencil-outline </v-icon></v-btn>
        <v-btn icon @click="deleteSelectedTask"
          ><v-icon dark> mdi-close </v-icon></v-btn
        >
      </div>
    </div>
    <p class="task__body" :class="{ 'task--done': task.done }">
      {{ task.text }}
    </p>
    <div class="task__footer">
      <div class="task__tags">0 0 0</div>
      <v-checkbox
        class="task__check"
        v-model="checkbox"
        :label="`Done`"
        @click="changeTaskStatus"
      ></v-checkbox>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Task",
  components: {},
  props: {
    task: {
      type: Object,
    },
  },
  data() {
    return {
      checkbox: false,
    };
  },
  methods: {
    ...mapMutations(["updateTaskStatus", "deleteTask"]),
    changeTaskStatus() {
      this.updateTaskStatus(this.task);
    },
    deleteSelectedTask() {
      this.deleteTask(this.task);
    },
  },
  computed: {},
  mounted() {
    this.checkbox = this.task.done;
  },
};
</script>

<style lang="scss">
.task--done {
  text-decoration: line-through;
}
.task {
  max-width: 400px;
  min-width: 300px;
  width: 100%;
  padding: 20px 20px 0px;
  border-radius: 5px;
  background-color: #fff9de;
  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 0px 10px;
  }
  &__menu {
    font-size: 1.3rem;
    cursor: pointer;

    & .menu-icon {
      transition: 1s;
      transform-origin: center;
      color: #848073;
      &:hover {
        transform: rotate(90deg);
      }
    }
  }
  &__title {
    font-size: 1.3rem;
    font-weight: bold;
    color: #848073;
  }
  &__body {
    padding: 0px 0px 10px;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    color: #848073;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>