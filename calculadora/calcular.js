#!/usr/bin/env node

// uso:
//      ./calcular.js expressao.json
//      node calcular.js expressao.json

// vetor com strings das expressões
var strings = ler_entrada(process.argv[2]);

if (strings.length == 0) {
    ajuda();
    process.exit(-1);
}

var expressoes = parse_expressoes(strings);
var resultados = executar_expressoes(expressoes);
imprimir_expressoes_e_resultados(expressoes, resultados);

process.exit(0);

function ler_entrada(nome_do_arquivo) {
    return [];
}

function parse_expressoes(strings) {
    return [];
}

function executar_expressoes(expressoes) {
    return [];
}

function imprimir_expressoes_e_resultados(expressoes, resultados) {

}

function ajuda() {
    console.log("calculadora do problema http://dojopuzzles.com/problemas/exibe/avaliando-expressoes-matematicas/");
    console.log("Usando o arquivo 'calculadora.js':");
    console.log("\tnode calculadora [arquivo json]");
    console.log("Exemplo de arquivo 'json':");
    console.log("\t{\"expressao\" : \"3 * 2 + 5\"}");
    console.log("\t{");
    console.log("\t\t\"expressoes\" : [");
    console.log("\t\t\t\"3 * 2 + 5\",");
    console.log("\t\t\t\"6 / 2 - 5\",");
    console.log("\t\t\t\"3 * 2 + 5 + 6 / 2 - 5\" ]");
    console.log("\t}");
}
