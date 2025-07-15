<template>
  <div>
    <h1>Halo dari Vue!</h1>
    <p>{{ pesan }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pesan: "Ini frontend Vue.js"
    };
  }
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>