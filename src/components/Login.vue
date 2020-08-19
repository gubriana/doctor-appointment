<template>
<div>
  <b-col cols="12" class="m-2">
    
  </b-col>
  <b-row align-h="around">
    <b-col cols="5" class="mt-5">
      <b-jumbotron header="Crear cuenta" lead="Si aun no tienes cuenta puedes rellenar este formulario y registrate" class="text-secondary">
        <hr>
        <b-form @submit.prevent="registrar">

          <b-input-group size="lg" class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="person-fill"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="text" placeholder="Nombre" required v-model="registrarNombre"></b-form-input>
          </b-input-group>

          <b-input-group size="lg" class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="envelope"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="email" placeholder="yo@ejemplo.com" required v-model="registrarEmail"></b-form-input>
          </b-input-group>

          <b-input-group size="lg" class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="key"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="password" placeholder="Contraseña" required v-model="registrarPassword"></b-form-input>
          </b-input-group>
          
          <b-input-group size="lg" class="mb-4">
            <b-input-group-prepend is-text>
              <b-icon icon="key"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="password" placeholder="Confirmar contraseña" id="confirmar" required v-model="registrarPasswordConfirmar"></b-form-input>
          </b-input-group>

          <div class="text-right mb-1">
            <b-button pill variant="info" size="lg" type="submit">Registrar</b-button>
          </div>

        </b-form>
      </b-jumbotron>
    </b-col>
    <b-col cols="5" class="mt-5">
      <b-jumbotron header="Ingresar" lead="Debes usar tus datos para ingresar a la plataforma" class="text-secondary">
        <hr>
        <b-form @submit.prevent="ingresar">

          <b-input-group size="lg" class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="envelope"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="email" placeholder="yo@ejemplo.com" required v-model="ingresarEmail"></b-form-input>
          </b-input-group>
          <b-input-group size="lg" class="mb-4">
            <b-input-group-prepend is-text>
              <b-icon icon="key"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="password" placeholder="contraseña" required v-model="ingresarPassword"></b-form-input>
          </b-input-group>
          <br /> 
          <br /> 
          <br /> 
          <br /> 
          <div class="text-right mb-2 mt-3">
            <b-button pill variant="info" size="lg" type="submit">Ingresar</b-button>
          </div>

        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      ingresarEmail: '',
      ingresarPassword: '',
      registrarNombre: '',
      registrarEmail: '',
      registrarPassword:'',
      registrarPasswordConfirmar:''
    }
  },
  computed: {
    // esto viene del v-if
    error() {
      return this.$store.state.error;
    }
  },
  methods: {
    ingresar() {
      console.log('Ingresar');
      // ceración de objeto porque solo puedo pasar
      let datos = {
        email: this.ingresarEmail,
        password: this. ingresarPassword
      }
      // pasar la acción despachar!
      this.$store.dispatch('ingresar',datos)
    },    
    registrar() {
      // verificar que ambas contraseñas sean iguales
      const confirmar = document.getElementById('confirmar');
      // Limpiar el mensaje
      confirmar.setCustomValidity('');
      console.log(this.registrarPassword, this.registrarPasswordConfirmar)
      if (this.registrarPassword != this.registrarPasswordConfirmar) {
        confirmar.setCustomValidity('Ambas contraseñas deben coincidir');
        return;
      }
      // ahora podemos registrar al usuario, llamando a la acción correspondiente
      const datos = {
        email: this.registrarEmail, 
        password: this.registrarPassword,
        nombre: this.registrarNombre
        };
      this.$store.dispatch('registrar', datos)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
