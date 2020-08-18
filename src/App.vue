<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#"><b-icon-gem variant="light"></b-icon-gem></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <!-- <b-form-input size="sm" class="mr-sm-2" placeholder=""></b-form-input>
          <b-button  pill  variant="outline-light" size="sm" class="my-2 my-sm-0" type="submit"><b-icon-search variant="light"></b-icon-search></b-button> -->
        </b-nav-form>
        <b-navbar-nav class="ml-5">
          <b-nav-item href="#">Salir</b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <b-container>
    <router-view />
  </b-container>
</div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
</style>
