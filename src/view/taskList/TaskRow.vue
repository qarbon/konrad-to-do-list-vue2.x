<template>
  <div class="task-row">
    <div>check</div>
    <div>{{ task.title }}</div>
    <div class="task-row__date">
      <img :src="calendarIcon" />
      {{ formatDate }}
    </div>
    <IconButton :icon="chatIcon" />
    <IconButton :icon="editIcon" @click="handleClick" />
  </div>
</template>

<script>
import moment from "moment";
import IconButton from "../../components/button/IconButton";
import chatIcon from "@/assets/icon/chat.png";
import editIcon from "@/assets/icon/pencil.png";
import calendarIcon from "@/assets/icon/calendar.png";
import {mapActions} from "vuex";

export default {
  name: "TaskRow",
  components: {IconButton},
  data: () => ({ chatIcon, editIcon, calendarIcon }),
  props: {
    task: {
      type: Object,
      require: true
    }
  },
  computed: {
    formatDate() {
      return moment(this.task.dueDate).format('DD/MM/YYYY')
    }
  },
  methods: {
    ...mapActions('addEditTask', ['openModal']),
    handleClick() {
      this.openModal(this.task)
    }
  }
}
</script>
