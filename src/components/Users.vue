<template lang="html">
  <section class="src-components-users">
    <div class="jumbotron">
      <button class="btn btn-success my-3 mr-3" @click="$store.dispatch('getUsers')">GET</button>
      <div v-if="$store.state.users.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th v-for="(col, i) in getColumnas" :key="i">{{ col }}</th>
          </tr>
          <tr v-for="(user, i) in $store.state.users" :key="i">
            <td v-for="(col, i) in getColumnas" :key="i">{{ user[col] }}</td>
          </tr>
        </table>
      </div>
      <div v-else>
        <div class="alert alert-danger">No hay usuarios</div>
      </div>
    </div>
  </section>
</template>

<script lang="js">

export default {
  name: 'src-components-users',
  props: [],
  mounted() {

  },
  computed: {
    getColumnas() {
      return Object.keys(this.$store.state.users[0])
    }
  }
}


</script>

<style scoped lang="css">
.src-components-users {

}

.jumbotron {
  background: #b4ddb4;
  color: white;
}
</style>
