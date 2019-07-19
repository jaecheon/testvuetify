<template>
 <div class="details">
  <div class="container">
   <h1 class="text-primary text-center">{{title}}</h1>
   <div class="row">
		<!-- <button @click="emitGlobalClickEvent()">clickme!!!</button> -->
		<span>oh, that's nice. it's gotten {{ clickCount }} clicks</span><br>
    <span>parent clickCount : {{ this.$store.state.count }} clicks</span><br>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
    <Target ></Target>
   </div>
  </div>
 </div>
</template>

<script>
//https://alligator.io/vuejs/global-event-bus/


import { EventBus } from '../js/EventBus.js'
import Target from './PleaseClickMeTarget'

// //the event handler function.
// const clickHandler = function(clickCount){
// 	console.log("oh, that's nice. it's gotten ${clickCount} clicks");
// }

// //listen to the event.
// EventBus.$on('i-got-clicked', clickHandler);

// //stop listening.
// EventBus.$off('i-got-clicked', clickHandler);

 export default{
  name:'PleaseClickMe',  
  data(){
  	return {
  		clickCount: 0,
      title: 'pleaseclickme!!!',
  	}
  },

  methods: {
  	emitGlobalClickEvent(){
		this.clickCount++;

		//send the event on a channel (i-got-clicked) with a payload
		// EventBus.$emit('i-got-clicked', this.clickCount);
  	},
    addCounter(){
      this.$store.state.count++;
    },
    subCounter(){
      this.$store.state.count--;
    }
  },
  components: {
    'Target': Target,
  }
 }
</script>