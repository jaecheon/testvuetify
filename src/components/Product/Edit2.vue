<template>
  <v-container fluid >
    <h1 class="text-primary text-center">{{title}}</h1>
    <v-layout row wrap>

      <v-flex xs12 sm6>

        <v-card>

          <v-card-title>
            vuetify-dialog 시험
          </v-card-title>

          <v-card-actions>      
            <v-btn color="warning" @click=confirm>실행하면 큰일</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
 export default{
  name:'edit2',
  data(){
   return{
    title:"edit2",
   }
  },
  methods: {
  	confirm: async function(){
  		// const r = await this.$dialog.confirm({title: '위험', text: '그래도 할거야?'})
  		// if(!r) return this.$dislog.notify.info('작업완료')

		  // this.$dialog.notify.error('무기발사', {position: 'bottom-right'})
  	}
  }
 }
</script>