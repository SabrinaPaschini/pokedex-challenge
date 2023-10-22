console.log('sucesso!');

const offset = 0;
const limit = 10; 
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

 function convertPokemonToLi(pokemon){
    return `
    <li class="pokemon">

        <span class="number"> #00${pokemon.id}</span>
        <span class="name">${pokemon.name}</span>

        


    <div class="detail">
    <img src ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg">
        <ol class="types">
            <li class="type">${''}</li>
            <li class="type"> ${''}</li>
         
                </ol>
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