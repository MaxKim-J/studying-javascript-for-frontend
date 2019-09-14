<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearAll">Clear all</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearAll() {
      this.$emit("clearAll");
    }
  }
};
</script>

<style>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}

.clearAllBtn {
  color: #e20303;
  display: black;
}
</style>