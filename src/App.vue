<template>
  <div id="app">
    <div id="page-wrapper">
      <Header />
      <TaskList />
    </div>
    <AddEditTaskModal />
    <CommentModal />
  </div>
</template>

<script>

import Header from './view/header/Header';
import AddEditTaskModal from './view/addEditTaskModal/AddEditTaskModal';
import TaskList from './view/taskList/TaskList';
import CommentModal from './view/commentModal/CommentModal';

export default {
  name: 'App',
  components: {
    CommentModal, TaskList, AddEditTaskModal, Header,
  },
};
</script>
