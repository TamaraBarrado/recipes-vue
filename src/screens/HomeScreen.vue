<template>
    <RecipesPresentation></RecipesPresentation>
    <RecipesWelcome></RecipesWelcome>
    <RecipesFeatured></RecipesFeatured>
</template>

<script>
import RecipesPresentation from '../components/RecipesPresentation.vue'
import RecipesWelcome from '../components/RecipesWelcome.vue'
import RecipesFeatured from '../components/RecipesFeatured.vue'

export default {
    name: 'HomeScreen',
    components: {
        RecipesPresentation,
        RecipesWelcome,
        RecipesFeatured
    }
}
</script>

<style>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.seccion-oscura {
    color: rgb(55, 37, 37);
    background-color: #afa04e;
}

.seccion-clara {
    color: black;
    background-color: white;
}

.seccion-titulo {
    font-size: 1.5rem;
    padding: 15px 0;
    font-family: 'Merienda', cursive;
}

.seccion-descripcion {
    font-size: 1.2rem;
    color: #584e4e;
}

.seccion-texto {
    font-size: 1rem;
}

.btn-info {
    font-size: 1.1rem;
    margin: 20px;

}

.texto-negro {
    color: black;
}

.texto-blanco {
    color: white;
}</style>
