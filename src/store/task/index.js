import callApi from "@/api/callApi";

export default {
    namespaced: true,
    state: {
        loading: true,
        list: []
    },
    mutations: {
        SET_LIST(state, value) {
            state.list = value
        },
        SET_LOADING(state, value) {
            state.loading = value
        }
    },
    actions: {
        async createTask(_, data) {
            const res = await callApi('task/create', data)
            if (res.success) {
               await _.dispatch('getTaskList')
            }
        },
        async updateTask(_, data) {
            const res = await callApi('task/update', data)
            if (res.success) {
                await _.dispatch('getTaskList')
            }
        },
        async getTaskList(_) {
            const res = await callApi('task/list')
            if (res.success) {
                _.commit('SET_LIST', res.result)
            }
        }
    },
    getters: {
        list: state => state.list
    },
};
