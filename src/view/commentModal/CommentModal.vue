<template>
  <Modal v-if="task" :title="task.title" :open="open" @close="closeCommentModal">
    <p class="comment-modal__desc">{{ task.description }}</p>
    <div class="comment-modal__details-wrapper">
      <span><b>Date:</b> {{ task.dueDate }} </span>
      <span><b>Priority:</b> {{ task.priority }} </span>
    </div>
    <div class="comment-wrapper">
        <div
          v-for="(comment, index) in task.comments"
          :key="index"
          class="comment-wrapper__comment"
        >
            <b>{{ comment.from }}</b>
            <p>{{ comment.message }}</p>
        </div>
    </div>
    <div class="comment-wrapper__action-wrapper">
      <Input v-model.trim="message" hide-error-message />
      <Button :disabled="!message || !message.length" @click="handleAddComment">Add comment</Button>
    </div>
  </Modal>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Modal from '@/components/modal/Modal';
import Input from '@/components/form/Input';
import Button from '@/components/button/Button';

export default {
  name: 'CommentModal',
  components: { Button, Input, Modal },
  data: () => ({
    message: null,
  }),
  computed: {
    ...mapGetters('comment', ['open', 'task']),
  },
  methods: {
    ...mapActions('comment', ['closeCommentModal', 'addComment']),
    handleAddComment() {
      this.addComment(this.message);
      this.message = null;
    },
  },
};
</script>
