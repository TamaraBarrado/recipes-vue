<template>
    <RecipesToolbar></RecipesToolbar>
    <router-view></router-view>
    <RecipesContact></RecipesContact>
    <RecipesFooter></RecipesFooter>
</template>

<script>
import RecipesToolbar from './components/RecipesToolbar.vue'
import RecipesContact from './components/RecipesContact.vue'
import RecipesFooter from './components/RecipesFooter.vue'

export default {
    name: 'App',
    components: {
        RecipesToolbar,
        RecipesContact,
        RecipesFooter
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
