<template>
  <div class="jumbotron">
    <vue-form :state="formState" @submit.prevent="enviar()">
      <validate tag="div">
        <label for="name">Nombre</label>
        <input class="form-control" type="text" id="name" name="name" v-model.trim="formData.name"
               autocomplete="off" :minlength="minNameLength" :maxlength="maxNameLength" required>
        <field-messages name="name" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          <div slot="minlength" class="alert alert-danger mt-1">
            Este campo requiere {{ minNameLength }} caracteres como mínimo
          </div>
          <div v-if="formData.name.length === maxNameLength" class="alert alert-warning mt-1">
            Máximo {{ maxNameLength }} caracteres
          </div>
        </field-messages>
      </validate>
      <validate tag="div">
        <label for="age">Edad</label>
        <input class="form-control" type="number" id="age" name="age" v-model.number="formData.age"
               autocomplete="off" :min="ageMin" :max="ageMax" required>
        <field-messages name="age" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          <div slot="min" class="alert alert-danger mt-1">Edad mínima: {{ ageMin }} años</div>
          <div slot="max" class="alert alert-danger mt-1">Edad máxima: {{ ageMax }} años</div>
        </field-messages>
      </validate>
      <validate tag="div">
        <label for="email">E-mail</label>
        <input class="form-control" type="email" id="email" name="email" v-model.trim="formData.email"
               autocomplete="off" required>
        <field-messages name="email" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
        </field-messages>
      </validate>
      <button class="btn btn-success my-3" :disabled="formState.$invalid" type="submit">Enviar</button>
    </vue-form>
  </div>
</template>

<script lang="js">

export default {
  name: 'src-components-form',
  props: [],
  mounted() {

  },
  data() {
    return {
      formData: this.getFormInicial(),
      formState: {},
      minNameLength: 5,
      maxNameLength: 15,
      ageMin: 18,
      ageMax: 120,
    }
  },
  methods: {
    getFormInicial() {
      return {
        name: '',
        age: '',
        email: ''
      }
    },
    enviar() {
      this.$store.dispatch('sendUser', this.formData)
      this.reset()
    },
    reset() {
      this.formData = this.getFormInicial()
      this.formState._reset()
    }
  },
  computed: {}
}


</script>

<style scoped lang="css">
.src-components-form {

}

.jumbotron {
  padding: 32px;
  background-color: cornflowerblue;
}

input {
  margin-bottom: 1rem;
}
</style>
