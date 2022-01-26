<template>
  <div class="task-list">
    <div class="task-list__manage" v-if="list.length">
      <Button :disabled="!checked_ids.length" @click="handleDelete">Delete task</Button>
    </div>
    <div v-if="list.length">
      <TaskRow
          v-for="task in list"
          :key="task.id"
          :task="task"
          :checked="checked_ids.includes(task.id)"
          @checked="(val) => handleCheck(val, task.id)"
      />
    </div>
    <div v-else class="task-list__empty-row">
      You do not have any tasks <span tabindex="0" @click="openModal">add a new task</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TaskRow from './TaskRow';
import Button from '../../components/button/Button';

export default {
  name: 'TaskList',
  components: { Button, TaskRow },
  data: () => ({
    checked_ids: [],
  }),
  computed: {
    ...mapGetters('task', ['list']),
  },
  methods: {
    ...mapActions('task', ['getTaskList', 'deleteMany']),
    ...mapActions('addEditTask', ['openModal']),
    handleCheck(val, id) {
      if (val) {
        this.checked_ids.push(id);
      } else {
        this.checked_ids = this.checked_ids.filter((element) => element !== id);
      }
    },
    async handleDelete() {
      await this.deleteMany(this.checked_ids);
      this.checked_ids = [];
    },
  },
  async mounted() {
    await this.getTaskList();
  },
};
</script>
