import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        type: false
    },
    getters: {
        ty(state) {
            return state.type
        }
    },
    mutations: {
        fun(state, type) {
            state.type = type
        }
    },
    actions: {}
})