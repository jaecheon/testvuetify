<template>
 <div class="details">
  <div class="container">
   <h1 class="text-primary text-center">{{title}}</h1>
   <v-alert
      :value="true"
      type="success"
    >
      This is a success alert.
    </v-alert>

    <v-alert
      :value="true"
      type="info"
    >
      This is a info alert.
    </v-alert>

    <v-alert
      :value="true"
      type="warning"
    >
      This is a warning alert.
    </v-alert>

    <v-alert
      :value="true"
      type="error"
    >
      This is a error alert.
    </v-alert>
  </div>
 </div>
</template>

<script>
//https://vuetifyjs.com/ko/components/alerts

 export default{
  name:'alert',
  title: 'alert',
  data(){
  	return {
  		alert: false,
      title:"alerts",
  	}
  },

 }
</script>