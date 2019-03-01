<template>
  <div class="container">
    <div id="gui"></div>
    <div id="canvas-container">
      <div id="mountains2"></div>
      <div id="mountains1"></div>
      <div id="skyline"></div>
    </div>
  </div>
</template>

<script>
  import "@/assets/js/dat.gui.min.js"
  import "@/assets/js/index.js"
  import "@/assets/js/jquery.js"
  import "@/assets/js/prefixfree.min.js"
  
  export default {
      mounted () {
        var fworks = new Fireworks();
      }
  }

</script>

<style scoped>
    @import "../../../src/assets/css/firework.css";
  .container {
    width: 100%;
    height: 100%;
  }

</style>
