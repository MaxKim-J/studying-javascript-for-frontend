<template>
  <div>
    <form v-on:submit.prevent="submitForm">
      <!--폼의 기본 동작은 새로고침 -->
      <!-- 기본적인 이벤트 동작을 방지 preventDefault-->
      <div>
        <label for="username">id: </label>
        <input id="username" type="text" v-model="username"/>
      </div>
      <div>
        <label for="password">pw: </label>
        <input id="password" type="password" v-model="password"/>
      </div>
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data: function(){
    return {
      username: '',
      password: '',
    }
  },
  methods:{
    submitForm: function(){
      //event.preventDefault(); //새로고침 방지
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/todos/1';
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
        .then(function(response){
          console.log(response);
        })

        .catch(function(error){
          console.log(error);
        })
      //브라우저에서 서버로 데이터를 보내기 위한 http 라이브러리 - axios
    }
  }
}
</script>

<style>

</style>