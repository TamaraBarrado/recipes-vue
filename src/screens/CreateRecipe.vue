<template>
    <div>
        <h2>Crear Receta</h2>

        <!-- Renderiza los elementos del formulario basados en el array de datos -->
        <div v-for="(item, index) in data" :key="index">
            <input v-model="data[index]" placeholder="Ingrese un valor">
            <button @click="removeData(index)">Eliminar</button>
        </div>

        <!-- Botón para agregar nuevos elementos al formulario -->
        <button @click="addData">Agregar Dato</button>

        <!-- Botón para enviar el formulario con todos los datos -->
        <button @click="submitForm">Enviar Formulario</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            recipe: {
                name: '',
                description: '',
                preparation_time: 0,
                number_of_diners: 0,
                ingredients: [],
                steps: []
            }
        };
    },
    methods: {
        addData() {
            // Agrega un nuevo elemento al array de datos
            this.data.push('');
        },
        removeData(index) {
            // Elimina un elemento del array de datos
            this.data.splice(index, 1);
        },
        submitForm() {
            // Crea un objeto FormData para enviar datos y archivos al servidor
            const formData = new FormData();
            formData.append('ingredients', this.data);

            console.log('Respuesta del servidor:', this.data);
            // // Agrega cada archivo al FormData
            // for (let i = 0; i < this.archivos.length; i++) {
            //     formData.append('archivos[]', this.archivos[i]);
            // }

            // // Envía la solicitud al servidor
            // axios.post('http://localhost:3000/tu-ruta', formData, {
            //     headers: {
            //         'Content-Type': 'multipart/form-data'
            //     }
            // })
            //     .then(response => {
            //         console.log('Respuesta del servidor:', response.data);
            //     })
            //     .catch(error => {
            //         console.error('Error al enviar formulario:', error);
            //     });
        }
    }
};
</script>