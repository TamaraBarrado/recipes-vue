<template>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="receta" @click="goToRecipeDetail(item.id_recipe)">
      <img :src="recipeImage">
      <div class="overlay">
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'RecipesFeaturedItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    recipeImage() {
      return `../imagenes/${this.item.image}`;
    }
  },
  methods: {
    goToRecipeDetail(recipeId) {
      this.$router.push(`/recipes/${recipeId}`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.receta img {
  height: 300px;
  width: 400px;
  padding: 10px;
  border-radius: 20px;
  display: block;
  transition: all 0.2s ease;
}
.overlay {
  transition: all 0.2s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

}

.overlay p {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 0;
}

.receta {
  position: relative;
}

.receta:hover img {
  opacity: 0.2;
}

.receta:hover .overlay {
  opacity: 1;
}
</style>
