<template>
<div>
  <b-row align-h="around">
    <b-col cols="5" class="mt-5">
      <b-jumbotron header="Crear cuenta" lead="Si aun no tienes cuenta puedes llenar este formulario" class="text-secondary">
        <hr>
        <b-form>

          <b-input-group size="lg" class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="person-fill"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="text" placeholder="Nombre"></b-form-input>
          </b-input-group>

          <b-input-group size="lg" class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="envelope"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="email" placeholder="yo@ejemplo.com"></b-form-input>
          </b-input-group>

          <b-input-group size="lg" class="mb-4">
            <b-input-group-prepend is-text>
              <b-icon icon="key"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="password" placeholder="contraseña"></b-form-input>
          </b-input-group>
          
          <div class="text-right mb-1">
            <b-button pill variant="info" size="lg">Crear</b-button>
          </div>

        </b-form>
      </b-jumbotron>
    </b-col>
    <b-col cols="5" class="mt-5">
      <b-jumbotron header="Ingresar" lead="Debes usar tus datos para ingresar a la plataforma" class="text-secondary">
        <hr>
        <b-form>
          <b-input-group size="lg" class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="envelope"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="email" placeholder="yo@ejemplo.com"></b-form-input>
          </b-input-group>
          <b-input-group size="lg" class="mb-4">
            <b-input-group-prepend is-text>
              <b-icon icon="key"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="password" placeholder="contraseña"></b-form-input>
          </b-input-group>
          <br /> 
          <br /> 
          <div class="text-right mb-2">
            <b-button pill variant="info" size="lg">Ingresar</b-button>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
