<template>
  <div class="task-row">
    <CheckBox :value="checked" @input="handleCheckbox"/>
    <div class="task-row__title">{{ task.title }}</div>
    <div class="task-row__date">
      <img :src="calendarIcon" />
      {{ formatDate }}
    </div>
    <IconButton :icon="chatIcon" @click="handleComment"/>
    <IconButton :icon="editIcon" @click="handleEdit" />
  </div>
</template>

<script>
import moment from 'moment';
import IconButton from '@/components/button/IconButton';
import chatIcon from '@/assets/icon/chat.png';
import editIcon from '@/assets/icon/pencil.png';
import calendarIcon from '@/assets/icon/calendar.png';
import { mapActions } from 'vuex';
import CheckBox from '@/components/form/CheckBox';

export default {
  name: 'TaskRow',
  components: { CheckBox, IconButton },
  data: () => ({ chatIcon, editIcon, calendarIcon }),
  props: {
    task: {
      type: Object,
      require: true,
    },
    checked: {
      type: Boolean,
      require: true,
    },
  },
  computed: {
    formatDate() {
      return moment(this.task.dueDate).format('DD/MM/YYYY');
    },
  },
  methods: {
    ...mapActions('addEditTask', ['openModal']),
    ...mapActions('comment', ['openCommentModal']),
    handleEdit() {
      this.openModal(this.task);
    },
    async handleComment() {
      await this.openCommentModal(this.task);
    },
    handleCheckbox(val) {
      this.$emit('checked', val);
    },
  },
};
</script>
