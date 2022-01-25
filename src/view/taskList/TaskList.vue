<template>
  <div class="task-list">
    <div v-if="list.length">
      <TaskRow v-for="task in list" :key="task.id" :task="task" />
    </div>
    <div v-else class="task-list__empty-row">
      You do not have any tasks <span tabindex="0" @click="openModal">add a new task</span>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import TaskRow from "./TaskRow";

export default {
name: "TaskList",
  components: {TaskRow},
  computed: {
    ...mapGetters('task', ['list'])
  },
  methods: {
    ...mapActions('task', ['getTaskList']),
    ...mapActions('addEditTask', ['openModal'])
  },
  async mounted() {
      await this.getTaskList()
  }
}
</script>
