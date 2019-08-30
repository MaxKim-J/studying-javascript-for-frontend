<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" placeholder="할일을 입력하세요" />
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fa fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ""
    };
  },
  methods: {
    addTodo() {
      //메서드 이름
      // 메서드의 로직 정리
      // 입력값이 없을때 걸러주는 예외처리 코드
      if (this.newTodoItem !== "") {
        var todoItem = this.newTodoItem && this.newTodoItem.trim();
        // trim으로 앞뒤 공백 문자열 제거
        this.$emit("addTodo", todoItem);
        this.clearInput(); // clear 인풋 메서드 호출
        // this는 해당 컴포넌트를 가리킴(여기서는 App)
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>