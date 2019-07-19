<template>
  <v-container>   
    <v-layout row wrap>
      <div class="home">
          <h1 class="text-primary text-center">{{title}}</h1>    
          <div class="row">
            <div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index">        
               <h3 @click="godetail(data.productId)">{{data.productTitle}}</h3>
               <span style="padding-right:5px;" >
                 <button @click="edit(data.productId)">modify</button>
               </span>
               <button @click="edit2()">modify2</button>
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

export default {
  name: 'home',
  data () {
    return {
      title: 'Product',
      dialog: false,
      products:[
      {
        productTitle:"ABCN",
//        image       : require('../assets/images/product1.png'),
        productId:1
      },
      {
        productTitle:"KARMA",
//        image       : require('../assets/images/product2.png'),
        productId:2
      },
      {
        productTitle:"Tino",
//        image       : require('../assets/images/product3.png'),
        productId:3
      },
      {
        productTitle:"EFG",
//        image       : require('../assets/images/product4.png'),
        productId:4
      },
      {
        productTitle:"MLI",
//        image       : require('../assets/images/product5.png'),
        productId:5
      },
      {
        productTitle:"Banans",
//        image       : require('../assets/images/product6.png'),
        productId:6
      }
      ]
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
  }  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>