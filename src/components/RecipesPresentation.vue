<template>
  <section class="hero align-items-stretch">
    <div class="hero-principal">
      <img class="hero-imagen" src="../assets/cookingletras.png" width="250" alt="Logo cookingletras"
        style="margin: 0px 0px 25px 0px">
      <h1>Hola, soy Tamara Barrado</h1>
      <h2>Desarrollo sitios web, entre ellos, esta web de recetas de cocina</h2>
    </div>
    <div class="hero-inferior">
      <img class="hero-inferior-portada" src="../assets/fruits.png" alt="portada">
    </div>
  </section>
</template>


<script>
export default {
  name: 'RecipesPresentation'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero {
  background-color: rgb(255, 177, 168);
  min-height: 300px;
  text-align: center;
}

.hero-principal {
  padding: 2rem;

  h1 {
    font-size: 2.5rem;
    font-family: 'Merienda', cursive;
    color: rgb(65, 14, 14)
  }

  h2 {
    font-size: 1rem;
    font-family: 'Merienda', cursive;
    color: rgb(53, 53, 53)
  }
}

.hero-inferior-portada {
  padding: 2rem;
  width: 700px;
  height: 450px;
  background-color: rgb(96, 94, 93);
}
</style>
