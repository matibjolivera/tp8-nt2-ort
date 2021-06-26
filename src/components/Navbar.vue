<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/form">
            <a class="nav-link" href="#">Formulario</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/users">
            <a class="nav-link" href="#">Usuarios</a>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="js">

export default {
  name: 'src-components-navbar',
  props: [],
  mounted() {

  },
  data() {
    return {}
  },
  methods: {},
  computed: {}
}


</script>

<style scoped lang="css">
.src-components-navbar {

}
</style>
