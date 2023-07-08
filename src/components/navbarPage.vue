<template>
    <b-navbar toggleable="lg" type="light" style="background-color: rgb(245,207,194);">
        <div class="container">
            <b-navbar-brand href="#" style="color: #372922;"><strong>DOG.lovedia</strong></b-navbar-brand>

            <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav >
            <b-navbar-nav >
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
                <router-link class="nav-link" to="/" style="color: transparent;">Home</router-link>
                <router-link class="nav-link" to="/list-anjing">Category</router-link>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>
            </b-navbar-nav>
            </b-collapse> -->
        </div>
    </b-navbar>
</template>
  
<script>
  export default {
    methods: {
      navigateToDashboard() {
        this.$router.push('/dashboard');
      }
    }
  }
</script>
  
<style scoped>
  .landing-page {
    text-align: center;
    padding: 40px;
    color: blue;
    /* background-color: bisque; */
  }
</style>  