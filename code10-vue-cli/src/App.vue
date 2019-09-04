<template>
<!-- 최상위 인스턴스, 템플릿 루트는 하나만 있어야 함-->
  <div>
    <app-header 
    v-bind:propsdata="str" 
    v-on:renew="renewStr">
    </app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  data: function() {
    return {
      str: 'hi!!',
    }
  },
  components:{
    'app-header': AppHeader
  },
  methods:{
    renewStr: function(){
      this.str = 'renewd header'
    }
  }
}
</script>

<style>

</style>