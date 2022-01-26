import Vue from 'vue';
import Vuex from 'vuex';
import addEditTask from './addEditTask';
import task from './task';
import comment from './comment';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.DEV,
  modules: {
    addEditTask,
    task,
    comment,
  },
});
