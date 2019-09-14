<template>
  <header>
      <h1>header</h1>
      <div>
          {{ propsdata }}
      </div>
      <div>
          <button v-on:click="sendEvent">send</button>
      </div>
  </header>
</template>

<script>
export default {
    props: ['propsdata'],
    methods :{
        sendEvent: function(){
            this.$emit('renew')
        }
    }
}
</script>

<style>

</style>