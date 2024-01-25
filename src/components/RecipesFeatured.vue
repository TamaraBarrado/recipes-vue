<template>
  <section class="recetas seccion-clara d-flex flex-column">
    <h2 class="seccion-titulo texto-negro">Recetas Destacadas</h2>
    <!-- Galeria de Recetas -->
    <div class="container text-center recetas-contenedor">
      <div class="row">
        <RecipesFeaturedItem v-for="(item, index) in recipes" :key="index" :item="item"></RecipesFeaturedItem>
      </div>
    </div>
  </section>
</template>


<script>
import axios from 'axios';
import RecipesFeaturedItem from './RecipesFeaturedItem.vue';

export default {
  name: 'RecipesFeatured',
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    axios.get('http://localhost:3005/featured')
      .then(response => {
        this.recipes = response.data;
      })
      .catch(error => {
        console.error('Error al obtener datos de la API:', error);
      });
  },
  components: {
    RecipesFeaturedItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recetas {
  padding: 40px;
  padding-bottom: 100px;
}

.recetas-contenedor {
  padding-top: 60px;
  margin-bottom: 40px;
}
</style>
