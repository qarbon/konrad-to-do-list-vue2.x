import callApi from '../../api/callApi';

export default {
  namespaced: true,
  state: {
    open: false,
    task: null,
  },
  mutations: {
    SET_MODAL_OPEN(state, value) {
      state.open = value;
    },
    SET_TASK(state, value) {
      state.task = value;
    },
  },
  actions: {
    openCommentModal(_, task) {
      _.commit('SET_MODAL_OPEN', true);
      _.commit('SET_TASK', task);
    },
    closeCommentModal(_) {
      _.commit('SET_MODAL_OPEN', false);
      _.commit('SET_TASK', null);
    },
    async addComment(_, comment) {
      const { id } = _.state.task;
      await callApi('task/updateComment', { id, comment });
      const res = await callApi('task/get', { id });
      if (res.success) {
        _.commit('SET_TASK', res.result);
      }
    },
  },
  getters: {
    open: (state) => state.open,
    task: (state) => state.task || {},
  },
};
