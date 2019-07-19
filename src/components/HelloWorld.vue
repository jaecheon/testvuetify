<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>

        <v-btn 
        color="primary"
        flat
        @click="increment()"
        >
        Increment
        </v-btn>
        <v-btn 
        color="primary"
        flat
        @click="decrement()"
        >
        Decrement
        </v-btn>

      <h1 class="text-primary text-center">count : {{ this.$store.state.count }}</h1>
      </v-flex>
      
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
    })
  }
</script>

<style>

</style>
