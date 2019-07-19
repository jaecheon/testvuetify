<template>
	<v-app>
		<v-subheader>
			<Header/>
		</v-subheader>
		<v-toolbar color="indigo">
		  <v-toolbar-title>Application</v-toolbar-title>
		</v-toolbar>
		<v-content>
			<v-container fluid fill-height>
			  <v-layout
			  	justify-center
			  	align-center
			  >
				<router-view/>			    
			  </v-layout>
			</v-container>
			</v-content>
		<v-footer app>
			<Footer/>
		</v-footer>
	</v-app>
</template>

<style>
ul li 
{
    display:inline;                         /*  세로나열을 가로나열로 변경 */
/*    border-left:1px solid #999; */            /* 각 메뉴의 왼쪽에 "|" 표시(분류 표시) */
    font:bold 12px Dotum;                     /* 폰트 설정 - 12px의 돋움체 굵은 글씨로 표시 */
    padding:0 10px;                         /* 각 메뉴 간격 */
}	
</style>

<script>
/* eslint-disable */
//https://vuetifyjs.com/ko/framework/default-markup
//위 템플릿의 원문은 위 주소를 참고하고 변경된 내용은 vue create를 통해서 생성된 템플릿
// import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import Footer from './components/Footer'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Home,
    Header,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>