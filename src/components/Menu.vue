<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Simulador de Tweets</a>

      <button
        class="btn btn-success pl-4 pr-4"
        :class="{ 'btn-success': !showFormTweet, 'btn-danger': showFormTweet }"
        @click="openShowFormTweet"
      >
        {{ !showFormTweet ? "Nuevo Tweet" : "Cerrar Tweet" }}
      </button>
      
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    showFormTweet: Boolean,
    openShowFormTweet: Function,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
</style>