<template>
  <v-container>   
    <v-layout row wrap>
      <div class="home">
          <h1 class="text-primary text-center">{{title}}</h1>    
          <h1 class="text-primary text-center">localStorage 지원여부 : {{localStorage}}</h1>    
          <h1 class="text-primary text-center">count : {{ this.$store.state.count }}</h1>    
          <div class="row">
            <div class="col-md-4 col-lg4">
              <div class="text-xs-center">
                <v-btn 
                color="primary"
                flat
                @click="increment"
                >
                Increment
                </v-btn>
                <v-btn 
                color="primary"
                flat
                @click="decrement"
                >
                Decrement
                </v-btn>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4 col-lg4">
              <div class="text-xs-center">
                <v-dialog
                  v-model="dialog"
                  max-width="500px"
                  width="500"
                >
                  <template v-slot:activator="{ on }">
                    <v-btn
                      color="success"
                      dark
                      v-on="on"
                    >
                      Click Me
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title 
                    class="headline grey lighten-2"
                    primary-title
                    >
                      Privacy Policy
                    </v-card-title>

                    <v-card-text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn 
                      color="primary"
                      flat
                      @click="dialog = false"
                      >
                      I accept
                    </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </div>
          </div>
        </div>
    </v-layout>
  </v-container>  
</template>
<script>
//https://medium.com/@saidhayani/understand-routing-in-vue-js-with-examples-6da96979c8e3

//dialog : https://vuetifyjs.com/ko/components/dialogs
import { Increment, Decrement } from "../Store/mutation-types"

export default {
  name: 'home',
  data () {
    return {
      title: 'Home',
      dialog: false,
      localStorage: window.localStorage ? "support":"non support",
    }
  },
  methods: {
    godetail(productId){
      this.$router.push({name : "detail", params:{Pid:productId}})
    },
    edit(productId){
      this.$router.push({name : "edit", params:{Pid:productId}})
    },
    edit2(){
      this.$router.push({name : "edit2"})
    },
    increment(){
      this.$store.commit(Increment)
      // this.$store.state.count++
    },
    decrement(){
      // this.$store.commit(Decrement)
      // this.$store.state.count--
      alert(this.$dialog)
    }
  }  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>