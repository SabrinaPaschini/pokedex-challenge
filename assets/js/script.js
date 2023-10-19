console.log('sucesso!');

//requisao via http 
//fetsh api 

const offset = 0;
const limit = 10; 
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

// fetch retorna uma promisse, resposta assincrona, não é imediata a response
//como processa o sucesso de uma promisse 
//pelo mentodo then 

fetch(url)
    .then(function(response){
        response.json().then(function(responseBody){
            console.log(responseBody)
        })
})

// manipular quando der algum erro 
.catch(function(error){
    console.log(error)
})

//independente do sucesso ou do erro, ele vai chamar o finaly quando finalizar o precoesso 
.finally(function(){
    console.log('Requisição concluída!')
})

