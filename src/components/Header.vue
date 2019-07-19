<template>
	<v-container>	  
	  <v-layout>
		<span>Vuetify</span>
		<span class="font-weight-light">MATERIAL DESIGN</span>
		<ul>
			<li class="nav-item">
			  <router-link class="nav-link" to="/">Home</router-link>
			</li>
			<li class="nav-item">
			  <router-link class="nav-link" to="/blog">Blog</router-link>
			</li>
			<li class="nav-item">
			  <router-link class="nav-link" to="/service">Services</router-link>
		 	</li>
			<li class="nav-item">
			   <router-link class="nav-link" to="/contact">contact</router-link>
		 	</li>			
			<li class="nav-item">
			   <router-link class="nav-link" to="/clickme">ClickMe</router-link>
		 	</li>			
			<li class="nav-item">
			   <router-link class="nav-link" to="/alerts">Alerts</router-link>
		 	</li>			
			<li class="nav-item">
			   <router-link class="nav-link" to="/buttons">Buttons</router-link>
			</li>			
			<li class="nav-item">
			   <router-link class="nav-link" to="/calendars">Calendars</router-link>
 			</li>			
			<li class="nav-item">
			   <router-link class="nav-link" to="/Product">Product</router-link>
 			</li>			
		</ul>
	  </v-layout>
	</v-container>	
</template>

<script>
	import { SetNickName } from "../Store/mutation-types"
	// import { mapState } from 'vuex'
	import { LogOut } from '../Service/Users/user'

	export default {
		name: "Header",
		// computed: {
		// 	mapState([
		// 		SetNickName
		// 		])
		// },
		methods: {
			logout(){
				LogOut()
			}
		}
	}

</script>