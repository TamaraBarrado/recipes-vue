<template>
  <section class="contacto">
    <div class="container">
      <div class="container text-center rectangulo d-flex justify-content-evenly">
        <div class="row">
          <div class="col-12 col-md-4 seccion-titulo">
            ¡Hablamos!
          </div>
          <div class="col-12 col-md-4 descripcion">
            Para cualquier consulta o información, estamos a un click :)
          </div>
          <div class="col-12 col-md-4">
            <a href="mailto:barradotamara@meloinvento.com">
              <button type="button" id="contacto">
                Contacto
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-envelope-check-fill" viewBox="0 0 16 16">
                  <path
                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z" />
                  <path
                    d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'RecipesContact'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contacto {
  background-color: black;
}

.contacto .container {
  max-width: 1100px;
  min-height: 200px;
  padding: 20px;
}

.contacto .rectangulo {
  margin-top: -3rem;
  background-color: #989897;
  border-radius: 10px;
  box-shadow: 0px 1px 4px 1px white;
}

.contacto .row {
  width: 100%;
  display: flex;
  align-items: center;
}

.contacto .descripcion {
  color: white;
  font-size: 1.2rem;
}

.contacto button {
  color: white;
  font-weight: bold;
  background-color: transparent;
  border: 2px solid white;
  padding: 1.25em 2em;
  margin: 10px;
  border-radius: 100px;
  transition: all 0.2s ease-in-out;
}

.contacto button:hover {
  background-color: white;
  color: black;
}

.contacto button i {
  color: white;
  font-size: 1.3rem;
  transition: all 0.2s ease-in-out;
}

.contacto button:hover i {
  color: black;
}
</style>
