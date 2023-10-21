//obj vai representar a poke api 

const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {

    return fetch(pokemon.url).then((response) => response.json())
}


pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

    return fetch(url)
        //buscando lista de pokemons 
        //convertendo para json 
        .then((response) => response.json()) // Correção de "respose" para "response"
        //pegando somente os resultados 
        .then((jsonBody) => jsonBody.results)

        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))

        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => pokemonDetails)
}






