<template lang="html">
  <section class="src-components-users">
    <div class="jumbotron">
      <button class="btn btn-warning my-3 mr-3" @click="getUsersThenCatch">GET con AXIOS Then-Catch</button>
      <button class="btn btn-success my-3 mr-3" @click="getUsersAsyncAwait">GET con AXIOS Async/Await</button>
      <div v-if="users.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th v-for="(col, i) in getColumnas" :key="i">{{ col }}</th>
          </tr>
          <tr v-for="(user, i) in users" :key="i">
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
  data() {
    return {
      url: 'https://60b80c29b54b0a0017c0307a.mockapi.io/api/ort/users-tp6',
      users: []
    }
  },
  methods: {
    getUsersThenCatch() {
      this.axios(this.url)
          .then(r => {
            this.users = r.data
          })
          .catch(e => console.error(e))
    },
    async getUsersAsyncAwait() {
      try {
        let response = await this.axios(this.url)
        this.users = response.data
      } catch (e) {
        console.error(e)
      }
    }
  },
  computed: {
    getColumnas() {
      return Object.keys(this.users[0])
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
