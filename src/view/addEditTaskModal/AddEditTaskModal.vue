<template>
  <Modal :title="isEdit ? 'Update task' : 'New task'" :open="open" @close="closeModal">
    <div class="add-edit-task-modal">
      <Input
          label="Title:"
          v-model="body.title"
          :error="error.title"
          @blur="validateOne('title')"
      />
      <TextArea
          label="Description:"
          v-model="body.description"
          isTextArea
          :error="error.description"
          @blur="validateOne('description')"
      />
      <DateInput
          label="Set due date:"
          v-model="body.dueDate"
          :error="error.dueDate"
          @blur="validateOne('dueDate')"
      />
      <Select
          label="Priority:"
          v-model="body.priority"
          :options="priorityList"
          :error="error.priority"
      />
      <TextArea
          label="Comment:"
          v-model="body.comment"
          isTextArea
      />
      <div class="add-edit-task-modal__action-wrapper">
        <Button @click="handleSubmit" :disabled="isError">
          {{ isEdit ? 'Update' : 'Create' }}
        </Button>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/modal/Modal';
import { mapActions, mapGetters } from 'vuex';
import Input from '@/components/form/Input';
import Button from '@/components/button/Button';
import DateInput from '../../components/form/DateInput';
import { taskSchema } from '../../validator/schema/taskValidator';
import Select from '../../components/form/Select';
import TextArea from '../../components/form/TextArea';
import validatorMixin from '../../validator/validatorMixin';

const emptyBody = () => ({
  title: null,
  description: null,
  dueDate: null,
  priority: null,
  comment: null,
});

export default {
  name: 'AddEditTaskModal',
  components: {
    TextArea, Select, DateInput, Button, Input, Modal,
  },
  mixins: [validatorMixin(taskSchema)],
  data: () => ({
    body: emptyBody(),
    priorityList: ['low', 'medium', 'hard'],
  }),
  computed: {
    ...mapGetters('addEditTask', ['open', 'task']),
    isEdit() {
      return !!this.body.id;
    },
  },
  methods: {
    ...mapActions('addEditTask', ['closeModal']),
    ...mapActions('task', ['createTask', 'updateTask']),
    async handleSubmit() {
      this.validateAll();
      await this.$nextTick();
      if (!this.checkIsError()) {
        if (this.isEdit) {
          await this.updateTask(this.body);
        } else {
          await this.createTask(this.body);
        }
        this.body = emptyBody();
        this.error = {};
        this.closeModal();
      }
    },
  },
  watch: {
    task: {
      deep: true,
      handler(val) {
        this.body = { ...val };
      },
    },
  },
};
</script>
