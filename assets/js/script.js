const link = "https://rickandmortyapi.com/api/character"
 
const procesarPromesa = async (link) =>{
    try {
        const respuesta = await fetch(link)
        const info = await respuesta.json()
        console.log(info);
        return info
    } catch (error) {
        console.log("hubo un error: " + error);
    }
}

const container = document.getElementById("container");

procesarPromesa(link)
    .then((info) =>{
        info.results.forEach((elemento) => {
            container.innerHTML += `
            <div class="card">
                <img src="${elemento.image}" alt="">
                <h2>${elemento.name}</h2>
                <p>${elemento.species}</p>
            </div>
            `
        })
    })