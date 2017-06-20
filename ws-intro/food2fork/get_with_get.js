// ws-intro/food2fork/get_with_get.js

var ClienteRest = require('node-rest-client').Client;
var rest = new ClienteRest();

var url = "http://food2fork.com/api/get";

var args = {
	parameters: {
        key: "d039f02041493e66db56d697e923ca00",
        rId: "34889" }
};


var processar_resposta = function(data, response) {
    var resposta = JSON.parse(data);
    imprimir_receitas(resposta.recipe);
};

function imprimir_receitas(receita) {
    console.log("===================");
    console.log("Receita ID [" + receita.recipe_id + "]");
    console.log("Título: " + receita.title);
    console.log("URL: " + receita.f2f_url);
    console.log("Ingreditentes: " + receita.ingredients);
}

rest.get(url, args, processar_resposta);
