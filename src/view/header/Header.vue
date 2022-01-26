<template>
  <header id="header">
    <h1>PawaTask</h1>
    <Button @click="openModal">
      Add a new task
    </Button>
  </header>
</template>

<script>
import Button from '../../components/button/Button';
import { mapActions } from 'vuex';

export default {
  name: 'Header',
  components: { Button },
  methods: {
    ...mapActions('addEditTask', ['openModal']),
  },
};
</script>

<style scoped>

</style>
