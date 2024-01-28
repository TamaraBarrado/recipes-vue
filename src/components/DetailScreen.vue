<template>
    <div class="container-fluid bg-dark py-2 text-center" style="color: white;">
        <div class="card">
            <div class="row">
                <div class="col-7 col-md-8 col-lg-8" style="max-height: 500px;">
                    <!-- <div class="row justify-content-center align-items-center"> -->                       
                            <img :src="recipeImage" class="center-cropped-image img-fluid" style="max-height: 500px;">               
                    <!-- <div class="carousel-inner">
                        <div class="carousel-item active" style="max-height: 500px;">
                            <img :src="recipeImage" class alt="...">
                        </div>
                    </div> -->
                </div>
                <div class="col-5 col-md-4 col-lg-4">
                    <div class="card-body" style="font-family: 'Merienda', cursive;">
                        <!-- ingredients -->
                        <h4 class="card-title text-center">INGREDIENTES</h4>
                        <h6>
                            <ul class="list-group" style="text-align: left;">
                                <li class="list-gr
                                oup" v-for="(ingredient, index) in recipe.ingredients" :key="index">-{{
                                    ingredient.ingredient }}</li>
                            </ul>
                        </h6><br>
                        <!-- title -->
                        <h3 class="card-title text-center">{{ recipe.name }}</h3>
                        <h6>
                            <p class="card-text">{{ recipe.description }}</p>
                        </h6>
                        <!-- ICONS -->
                        <div class="row">
                            <div class="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center"
                                style="font-size: medium;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-people-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                </svg>{{ recipe.number_of_diners }}&nbsp;&nbsp;&nbsp;

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-alarm-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5m2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.04 8.04 0 0 0 .86 5.387M11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.04 8.04 0 0 0-3.527-3.527" />
                                </svg>{{ recipe.preparation_time }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="container-fluid bg-dark py-4 text-center">
        <div class="row" style="font-family: 'Merienda', cursive;" >
            <div class="container mt-3" v-for="(step, index) in recipe.steps" :key="index">
                <div class="card mb-3 border-2">
                    <div v-if="index % 2 == 0">
                        <div class="row">
                            <div class="col-md-5">
                                <img :src="require(`@/steps/${step.id_step}.jpg`)" class="img-fluid rounded-start">
                            </div>
                            <div class="col-md-7">
                                <div class="card-body">
                                    <h3 class="card-title text-center">{{ step.name }}</h3><br>
                                    <h5>
                                        <p class="card-text">{{ step.instructions }}</p>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="row" >
                            <div class="col-md-7">
                                <div class="card-body">
                                    <h3 class="card-title text-center">{{ step.name }}</h3><br>
                                    <h5>
                                        <p class="card-text">{{ step.instructions }}</p>
                                    </h5>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <img :src="require(`@/steps/${step.id_step}.jpg`)" class="img-fluid rounded-start" >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <component :is="'script'" src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">>
    </component>
</template>
  
<script>
import axios from 'axios';

export default {
    beforeRouteEnter(to, from, next) {
        window.scrollTo(0, 0);
        next();
    },
    name: 'DetailSceen',
    data() {
        return {
            recipe: {}
        };
    },
    computed: {
        recipeImage() {
            if (this.recipe.image != undefined)
                return require(`@/imagenes/${this.recipe.image}`);
            else
                return ""
        }
    },
    mounted() {
        let recipeId = this.$route.params.id;
        axios.get(`http://localhost:3005/recipes/${recipeId}`)
            .then(response => {
                console.log('Prueba receta:', response.data);
                this.recipe = response.data;
            })
            .catch(error => {
                console.error('Error al obtener datos de la API:', error);
            });
    },
    components: {
    }
};
</script>


<style>
.center-cropped-image {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

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
}
</style>
