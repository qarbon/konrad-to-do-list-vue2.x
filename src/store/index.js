import Vue from 'vue'
import Vuex from 'vuex'
import addEditTask from "@/store/addEditTask";
import task from "@/store/task";

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.DEV,
    modules: {
        addEditTask,
        task
    },
});
