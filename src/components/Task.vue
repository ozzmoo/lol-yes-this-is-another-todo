<template>
  <div class="task">
    <div class="task__head">
      <h2 class="task__title" :class="{ 'task--done': checkbox }">
        {{ task.title }}
      </h2>
      <div class="task__menu"><i class="menu-icon fas fa-ellipsis-h"></i></div>
    </div>
    <p class="task__body" :class="{ 'task--done': checkbox }">
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
    ...mapMutations(["updateTaskStatus"]),
    changeTaskStatus() {
      this.updateTaskStatus(this.task);
    },
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