import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: []
    },
    actions: {
        async getUsers({commit}) {
            console.log('getUsers')
            try {
                let response = await axios('https://60b80c29b54b0a0017c0307a.mockapi.io/api/ort/users-tp6')
                commit('setUsers', response.data)
            } catch (e) {
                console.error(e)
            }
        },
        async sendUser({commit}, data) {
            console.log('sendUser')
            console.log(data)
            axios.post('https://60b80c29b54b0a0017c0307a.mockapi.io/api/ort/users-tp6', data)
                .then(() => {
                    console.log('Creado correctamente')
                    console.log({commit})
                })
                .catch(e => console.error(e))
        }
    },
    mutations: {
        setUsers(state, users) {
            state.users = users
        }
    }
})