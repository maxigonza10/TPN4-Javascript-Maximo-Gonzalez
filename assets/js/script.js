// URL del API de Rick and Morty para obtener información sobre los personajes
const link = "https://rickandmortyapi.com/api/character"
// Función asincrónica que procesa la promesa de obtener datos del API
const procesarPromesa = async (link) =>{
    try {
        // Espera la respuesta de la llamada fetch a la URL especificada
        const respuesta = await fetch(link)
        // Convierte la respuesta en formato JSON
        const info = await respuesta.json()
        // Imprime la información obtenida en la consola
        console.log(info);
        // Devuelve la información obtenida
        return info
    } catch (error) {
        // Si ocurre un error, lo captura y lo imprime en la consola
        console.log("hubo un error: " + error);
    }
}
// Obtiene el elemento del DOM con el ID "container"
const container = document.getElementById("container");
// Llama a la función procesarPromesa con el link del API
procesarPromesa(link)
    .then((info) =>{
        // Recorre cada elemento (personaje) en los resultados obtenidos del API
        info.results.forEach((elemento) => {
            // Agrega una tarjeta (div) al contenedor con la información del personaje
            container.innerHTML += `
            <div class="card">
                <img src="${elemento.image}" alt="">
                <h2>${elemento.name}</h2>
                <p>${elemento.species}</p>
            </div>
            `
        })
    })