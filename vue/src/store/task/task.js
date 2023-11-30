

// initial state
// shape: [{ id, quantity }]
const state = () => ({
    task: null
})

// getters


// actions
const actions = {
    setTask({ commit, state }, value) {
        commit('setTask', value)
    }
}

// mutations
const mutations = {

    setTask(state, value) {
        state.task = value
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}