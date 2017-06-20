main();

function main() {
    var resultado = {};

    var url = "http://api.pgi.gov.br/api/1/serie/27.json";

    var ibge = require('./ibge-unidades_federativas.json');
    var uf = localizar_uf(ibge.valores, 24);

    resultado.fontes = [ibge.url_origem, url];
    resultado.uf = {};
    resultado.uf.id = uf.id;
    resultado.uf.nome = uf.nome;

    servico(url, resultado);
}


function localizar_uf(ufs, id) {
    var uf_temporaria = ufs.filter(uf => uf.id == id);

    return (uf_temporaria.length > 0) ? uf_temporaria[0] : {};
}


function servico(url, resultado) {
    var ClienteRest = require('node-rest-client').Client;
    var rest = new ClienteRest();

    rest.get(url, (http_body, http_response) => {
        resultado.valores = capturar_dados(http_body.valores, resultado.uf.id);
        resultado.media = calcular_media(resultado.valores);
        console.dir(resultado, {depth: null, colors: true});
    });
}

function capturar_dados(valores, id) {
    return valores.filter(objeto => objeto.estado_ibge == id);
}

function calcular_media(valores) {
    var quantidade = valores.length;
    var media = valores.reduce(
        (total, objeto) => total + objeto.valor, 0);
    return media / quantidade;
}
