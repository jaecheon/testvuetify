<template>
 <div class="details">
  <div class="container">
   <h1 class="text-primary text-center">{{title}}</h1>
   <div class="row">
		<span>Target Component Global Count {{ this.$store.state.count }} clicks</span>
   </div>
  </div>
 </div>
</template>

<script>
//https://alligator.io/vuejs/global-event-bus/


// import { EventBus } from '../js/EventBus.js';

//the event handler function.
// const clickHandler = function(clickCount){
// 	console.log("oh, that's nice. it's gotten ${clickCount} clicks");
// }

//listen to the event.
// EventBus.$on('i-got-clicked', clickHandler);

//stop listening.
// EventBus.$off('i-got-clicked', clickHandler);

 export default{
  name:'PleaseClickMeTarget',
  data(){
  	return {
  		clickCount: 0,
      title: 'pleaseclickmetarget!!!',
  	}
  },
 }
</script>