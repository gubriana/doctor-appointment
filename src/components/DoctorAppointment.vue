<template>
<div>
  <b-row align-h="around">
      <b-col cols="12" class="mt-5">
        <b-jumbotron header="Horas reservadas" lead="{nombre} esta es la lista de horas" class="text-secondary">
          <hr>
          <b-col cols="4" class="mt-5 right" offset-md="3">
          </b-col><b-row align-h="end">
            <b-col cols="4">
            <b-form>
              <b-input-group size="sm" class="mb-2">
                <b-form-input type="search" placeholder="buscar" class="mr-1 mt-1"></b-form-input><b-button pill variant="info" size="xs">
                  <b-icon icon="search"></b-icon></b-button>
              </b-input-group>
            </b-form>
            </b-col>
            <b-col cols="1">
              <b-button pill><b-icon icon="plus-circle"></b-icon></b-button>
            </b-col>
          </b-row>

        </b-jumbotron>
      </b-col>
      <b-col>
        <b-table striped hover :items="items" class="text-secondary"></b-table>
      </b-col>
  </b-row>
</div>
</template>

<script>
export default {
  name: 'DoctorAppointment',
  data() {
    return {
      items: [
        { fecha: '04.03.20', hora: '13:15', nombre: 'Macdonald', dolencia: 'Dolo espalda', eliminar: 'x' },
        { fecha: '21.08.20', hora: '14:25', nombre: 'Shaw', dolencia: 'Control', eliminar: 'x' },
        { fecha: '21.08.20', hora: '15:35', nombre: 'Wilson', dolencia: 'Dolor de estómago', eliminar: 'x' },
        { fecha: '21.08.20', hora: '16:45', nombre: 'Carney', dolencia: 'Control', eliminar: 'x' }
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
