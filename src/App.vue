<template>
  <div id="app" class="container-fluid my-3">
    <div class="jumbotron">
      <h1>Trabajo práctico N°6</h1>
      <br>
      <Navbar/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Navbar from "./components/Navbar";

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
.jumbotron {
  padding: 32px;
}
</style>
