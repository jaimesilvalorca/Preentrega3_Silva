const listaPokemon = document.querySelector("#listaPokemon");
const pokemon = document.getElementById('namePokemon')
const buttonSearch = document.getElementById('searchPokemon')

let URL = "https://pokeapi.co/api/v2/pokemon/"

buttonSearch.addEventListener('onclick',getPokemon())

for(let i = 1; i <= 151; i++){
    fetch(URL+i)
    .then((response) => response.json())
    .then(data => mostrarPokemon(data))
}

class Pokemon{
  constructor(numero,nombre,tipo){
      this.numero = numero
      this.nombre = nombre
      this.tipo = tipo
  }
}
const pokemon1 = new Pokemon(0,'No encontrado','Sin tipo')

const pokemon1String = JSON.stringify(pokemon1);
localStorage.setItem('pokemon1', pokemon1String);

function mostrarPokemon (data) {
  const div = document.createElement("div");
  div.classList.add("card-pokemon");
  div.innerHTML = `<div class="card" style="width: 18rem;">
    <h1>${data.name}</h1>
    <img src="${data.sprites.other["official-artwork"].front_default}" class="card-img-top" alt="...">
    <div class="card-body">
      <ul>
        <li>
            Numero: ${data.id} 
        </li>
        <li>
            Nombre: ${data.name}
        </li>
        <li>
            Tipo: ${data.types[0].type.name}
        </li>
      </ul>
      <button type="button" class="btn btn-outline-dark">Agregar</button>
    </div>
  </div>
</div>`;
  listaPokemon.append(div);
};

async function getPokemon() {
  let pokemon = document.getElementById("namePokemon").value;
  let data =  await fetch(`${URL}${pokemon}`);                
  data = await data.json();
  listaPokemon.innerHTML="";
  mostrarPokemon(data);
}


document.getElementById("searchPokemon").addEventListener("click", getPokemon);

