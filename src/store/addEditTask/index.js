export default {
    namespaced: true,
    state: {
        open: false,
        task: null,
    },
    mutations: {
        SET_MODAL_OPEN(state, value) {
            state.open = value
        },
        SET_TASK(state, value) {
            state.task = value
        }
    },
    actions: {
        openModal(_, task = null) {
            _.commit('SET_MODAL_OPEN', true)
            _.commit('SET_TASK', task)
        },
        closeModal(_) {
            _.commit('SET_MODAL_OPEN', false)
            _.commit('SET_TASK', null)
        }
    },
    getters: {
        open: state => state.open,
        task: state => state.task
    },
};