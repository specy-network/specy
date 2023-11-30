

// initial state
// shape: [{ id, quantity }]
const state = () => ({
    address: '',
    icaAddress: ""
})

// getters
const getters = {
    getUserAddress: (state, getters) => {
        return state.address;
    }


}

// actions
const actions = {
    setUserAddress({ commit, state }, value) {
        commit('setUserAddress', value)
    },
    setIcaAddress({ commit, state }, value) {
        commit('setIcaAddress', value)
    }

}

// mutations
const mutations = {

    setUserAddress(state, value) {
        state.address = value
    },
    setIcaAddress(state, value) {
        state.icaAddress = value
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}