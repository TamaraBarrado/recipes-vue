<template>
  <nav class="navbar navbar-expand-md navbar-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar-toggler">
        <a class="navbar-brand" href="#">
          <img src="./../assets/cocinando.png" width="50" alt="Logo de la página web">
        </a>
        <ul class="navbar-nav d-flex justify-content-center align-items-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#sobre mi">Sobre mí</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'RecipesToolbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: #afa04e;
}

.navbar-collapse {
  align-items: center;
  justify-content: space-between;
}
</style>
