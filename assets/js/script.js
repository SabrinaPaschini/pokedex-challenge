console.log('sucesso!');

const offset = 0;
const limit = 10; 
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

 function convertPokemonToLi(pokemon){
    return `
    <li class="pokemon">

        <span class="number"> #001 </span>
        <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            <li class="type">Grass</li>
            <li class="type">Poison</li>
        </ol>
        <img class="img-p"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt ="${pokemon.name}">
    </div>
</li>

    `
 }

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {

    const newList = pokemons.map((pokemon) => convertPokemonToLi(pokemon))

    const newHtml = newList.join('')

    pokemonList.innerHTML += newHtml
})