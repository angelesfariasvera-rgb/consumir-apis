
const boton = document.querySelector('#btnPersonaje');
const nombre = document.querySelector('#nombre-personaje')
const foto = document.querySelector('#foto-personaje')
const estado = document.querySelector('#estado-personaje')

function obtenerPersonajeAzar(){

    //El azar
    const idAleatorio = Math.floor(Math.random() * 826) + 1;

    //pantalla de carga
    nombre.textContent = "Cargando...";
    estado.textContent = "";
    foto.style.display = "none"

    //recopilamos datos con axios
    axios.get(`https://rickandmortyapi.com/api/character/${idAleatorio}`)
    .then(response => {
        const personaje = response.data;

        //mostramos la información
        nombre.textContent = personaje.name;
        foto.src = personaje.image;
        foto.alt = personaje.name;
        foto.style.display = "block";
        estado.textContent = `Estado: ${personaje.status} | Especie: ${personaje.species}`;

    })
    .catch(error => {
        console.log(error);
        nombre.textContent = "Hubo un error al cargar. ¡Intenta de nuevo!";
    });
    
}

//ahora todo esto sucederá cuando se clickee el botón
boton.addEventListener('click', obtenerPersonajeAzar);
