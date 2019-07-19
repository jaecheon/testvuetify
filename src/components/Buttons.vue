<template>
  <div class="details">
    <div class="container">
      <h1 class="text-primary text-center">{{title}}</h1>
      <v-btn color="success">Success</v-btn>
      <v-btn color="error">Error</v-btn>
      <v-btn color="warning">Warning</v-btn>
      <v-btn color="info">Info</v-btn>

      <h1 class="text-primary text-center">Raised 버튼은 클릭할때 박스의 그림자가 커집니다. 버튼의 기본 스타일입니다.</h1>
      <v-layout align-center>
          <v-flex xs12 sm4 text-xs-center>
            <div>
              <v-btn small>Normal</v-btn>
            </div>
            <div>
              <v-btn small color="primary">Primary</v-btn>
            </div>
            <div>
              <v-btn small color="error">Error</v-btn>
            </div>
            <div>
              <v-btn small disabled>Disabled</v-btn>
            </div>
          </v-flex>
          <v-flex xs12 sm4 text-xs-center>
            <div>
              <v-btn>Normal</v-btn>
            </div>
            <div>
              <v-btn color="primary">Primary</v-btn>
            </div>
            <div>
              <v-btn color="error">Error</v-btn>
            </div>
            <div>
              <v-btn disabled>Disabled</v-btn>
            </div>
          </v-flex>
          <v-flex xs12 sm4 text-xs-center>
            <div>
              <v-btn large>Normal</v-btn>
            </div>
            <div>
              <v-btn large color="primary">Primary</v-btn>
            </div>
            <div>
              <v-btn large color="error">Error</v-btn>
            </div>
            <div>
              <v-btn large disabled>Disabled</v-btn>
            </div>
          </v-flex>
        </v-layout>


        <h1 class="text-primary text-center">Depressed 버튼은 여전히 배경색을 관리하지만 박스 그림자가 없습니다.</h1>
        <v-layout align-center>
            <v-flex xs12 sm4 text-xs-center>
              <div>
                <v-btn depressed small>Normal</v-btn>
              </div>
              <div>
                <v-btn depressed small color="primary">Primary</v-btn>
              </div>
              <div>
                <v-btn depressed small color="error">Error</v-btn>
              </div>
              <div>
                <v-btn depressed small disabled>Disabled</v-btn>
              </div>
            </v-flex>

            <v-flex xs12 sm4 text-xs-center>
              <div>
                <v-btn depressed>Normal</v-btn>
              </div>
              <div>
                <v-btn depressed color="primary">Primary</v-btn>
              </div>
              <div>
                <v-btn depressed color="error">Error</v-btn>
              </div>
              <div>
                <v-btn depressed disabled>Disabled</v-btn>
              </div>
            </v-flex>

            <v-flex xs12 sm4 text-xs-center>
              <div>
                <v-btn depressed large>Normal</v-btn>
              </div>
              <div>
                <v-btn depressed large color="primary">Primary</v-btn>
              </div>
              <div>
                <v-btn depressed large color="error">Error</v-btn>
              </div>
              <div>
                <v-btn depressed large disabled>Disabled</v-btn>
              </div>
            </v-flex>
          </v-layout>        
    </div>
  </div>
</template>

<script>
//https://vuetifyjs.com/ko/components/buttons

 export default{
  name:'alert',
  title: 'alert',
  data(){
  	return {
      title:"buttons",
  	}
  },

 }
</script>