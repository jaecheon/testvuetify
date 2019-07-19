//참조블로그
//https://1ilsang.blog.me/221338075908

import { SetAccessToken, SetNickName, LogOut, Increment, Decrement } from "./mutation-types"
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		[Increment](state){
			state.count++
		},
		[Decrement](state){
			state.count--
		},
		increment2(state, payload){
			state.count += payload.amount
		},
		[LogOut](){

		},
	}
})

export default store