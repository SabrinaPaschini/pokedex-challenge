function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.name}">

        <span class="number"> ID: #${pokemon.id}</span>
        <span class="name">${pokemon.name}</span>
    <div class="detail" >
    <img src ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg">

        <ol class="type-api" >
        
             ${convertPokemonTypesToli(pokemon.types).join('')}
         
                </ol>
           </div>
        </li>
<section class="new-section">
<h1>Details Pokédex</h1>
    <div class="new-img"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg"></div>
        <div class="card-poke" > 
        
        <ol class="new-ol">
            <li class="new-li">Pokémon Name:${pokemon.name}</li>
                <li class="new-li">Pokémon ID:${pokemon.id}</li>
            <li class="new-li">Pokémon Weight:${pokemon.weight}</li>
        </ol>
    </div>
</section>


    `


}
