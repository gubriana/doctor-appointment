<template>
<div>
  <b-row align-h="around">
    <b-col cols="12" class="mt-5">
      <b-jumbotron header="Reservar una hora" lead="Debes selecionar una fecha y una hora" class="text-secondary">
        <hr>
        <b-form inline >

          <b-input-group size="lg" class="mb-2 mr-5">
            <b-input-group-prepend is-text>
              <b-icon icon="calendar-event"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="date" placeholder="Nombre"></b-form-input>
          </b-input-group>

          <b-input-group size="lg" class="mb-2 mr-5">
            <b-input-group-prepend is-text>
              <b-icon icon="clock-fill"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="time" class="text-gris"></b-form-input>
          </b-input-group>
          <b-button pill variant="info" size="lg" class="ml-5">Reservar</b-button>
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
.text-gris {
  color: lightgray;
}
</style>
