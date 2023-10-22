console.log('sucesso!');

const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

function convertPokemonTypesToli(pokemonTypes) {

    return pokemonTypes.map((typeSlot) => `<li class"type-api" >${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.name}  >

        <span class="number"> ID: #${pokemon.id}</span>
        <span class="name">${pokemon.name}</span>
    <div class="detail" >
    <img src ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg">

        <ol class="type-api" >
        
             ${convertPokemonTypesToli(pokemon.types).join('')}
         
                </ol>
           </div>
</li>

<section class="content">

<ol class="pokemons" id="pokemonList"></ol>
</section>


    `
 
    
}
 


const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {

    const newList = pokemons.map((pokemon) => convertPokemonToLi(pokemon))

    const newHtml = newList.join('')

    pokemonList.innerHTML += newHtml
})