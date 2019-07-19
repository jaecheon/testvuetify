<template>
 <div class="details">
  <div class="container">
   <h1 class="text-primary text-center">{{title}}</h1>
   <h2>the product id is : {{this.$route.params.Pid}} </h2>
   <div class="row">
   	<div class="col-md-12" v-for="(product, index) in products" :key="index">
   		<div v-if="proId == product.productId">
   			<h1>{{index}} {{product.productTitle}} {{product.productId}}</h1>   			
   		</div>
   	</div>
   </div>
  </div>

  <v-container fluid >
    <v-layout row wrap>
      <v-flex xs12 sm6>

      	<v-card>
      	  
      	  <v-card-title>
      	    vuetify-dialog 시험
      	  </v-card-title>

		 	<v-card-actions>
		 	
				<v-btn color="warning" @click="confirm">실행하면 큰일</v-btn>

		 	</v-card-actions>

      	</v-card>
        <v-card-actions>
          
        </v-card-actions>

      </v-flex>
    </v-layout>
  </v-container>
 </div>
</template>

<script>
 export default{
  name:'edit',
  data(){
   return{
    title:"edit",
    proId:this.$route.params.Pid,
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
  	// confirm(){
  	// 	const r = this.$dialog.confirm({title: '위험', text: '그래도 할거야?'})
  	// 	if(!r) return this.$dislog.notify.info('작업완료')

		 //  this.$dialog.notify.error('무기발사', {position: 'bottom-right'})
  	// }
  	confirm(){
      debugger
      alert(this.$dialog);
  	},
  }
 }
</script>