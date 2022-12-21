alert('Bienvenido al pokedexjs.... En construcción')

let listaPokemon = []

// los objetos los voy a alimentar desde una api luego

class Pokemon{
    constructor(numero,nombre,tipo,generacion){
        this.numero = numero
        this.nombre = nombre
        this.tipo = tipo
        this.generacion = generacion
    }
}

// estos pokemon se van a desplegar de manera automatica en una especie de card en el html

const pokemon1 = new Pokemon(1,'Bulbasaur','Planta','Primera Generacion')
const pokemon2 = new Pokemon(2,'Pikachu','Electrico','Primera Generacion')
const pokemon3 = new Pokemon(3,'Charizard','Fuego','Primera Generacion')
const pokemon4 = new Pokemon(4,'Blastoise','Agua','Primera Generacion')
const pokemon5 = new Pokemon(5,'Alakazam','Psiquico','Primera Generacion')
const pokemon6 = new Pokemon(6,'Gengar','Fantasma','Primera Generacion')

listaPokemon = [pokemon1,pokemon2,pokemon3,pokemon4,pokemon5,pokemon6]

alert('Podras agregar tus propios pokemon al pokedex para dotarlo')

let pregunta = prompt('Quieres agregar un nuevo pokemon?')

const agregarNuevoPokemon = () => {

    let numero = prompt("Ingresa el numero del pokemon que vas agregar")*1
    let nombre = prompt("Ingresa el nombre del pokemon que vas a agregar")
    let tipo = prompt("Ingresa el tipo del pokemon que vas agregar")
    let generacion = prompt("Ingresa la generacion del pokemon que vas agregar")

    const pokemon7 = new Pokemon(numero,nombre,tipo,generacion)

    listaPokemon.push(pokemon7)

    return listaPokemon

}

//va a tener un buscador arriba de las cards

const buscarPokemon = () =>{
    consulta = prompt(`Ingresa el numero del pokemon que quieres consultar recuerda que el maximo es: ${listaPokemon.length}`)*1
    consulta = consulta -1

    for(i=0; i<listaPokemon.length; i++){
        if((consulta) === listaPokemon[i]){
        }
    }
    return console.log(listaPokemon[consulta])
}

const contarPokemon = () =>{
    contar = listaPokemon.length
    return contar
}


if((pregunta == 'si') || (pregunta == 'Si') || (pregunta == 'SI')){
    contador = contarPokemon()
    alert(`Actualmente tiene ${contador} pokemones`)
    agregarNuevoPokemon()
    console.log(listaPokemon)
}
else if((pregunta == 'no') || (pregunta == 'No') || (pregunta == 'NO')){
    buscarPokemon()
    console.log(listaPokemon)
}
else{
    alert("Se va a cerrar la pestaña... Adios")
    window.close()
}

