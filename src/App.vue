<template>
  <div id="app">
    <div id="page-wrapper">
      <Header />
      <TaskList />
    </div>
    <AddEditTaskModal />
  </div>
</template>

<script>

import Header from "./view/header/Header";
import AddEditTaskModal from "@/view/addEditTaskModal/AddEditTaskModal";
import TaskList from "./view/taskList/TaskList";
export default {
  name: 'App',
  components: {TaskList, AddEditTaskModal, Header}
}
</script>

<style>
#app {

}
</style>
