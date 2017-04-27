var arquivo = __dirname + '/natalcard.json';

lerJSONComReadFileSync(arquivo);
lerJSONComReadFile(arquivo);
var json = lerJSONComRequire(arquivo);

console.log(json[1].matricula);
console.log(json[1].nome);
console.log(json[1].cpf);
console.log(json[1].email);
console.log(json[1].telefone);

function lerJSONComReadFileSync(arquivo) {
    var fs = require('fs');

    // console.log('iniciou a leitura');
    var texto = fs.readFileSync(arquivo);
    // console.log('terminou a leitura do arquivo');
    // console.log('iniciou a conversão do texto para objeto');
    var json = JSON.parse(texto);
    // console.log('terminou a conversão do texto para objeto');
    // console.log(json);

    return json;
}

function lerJSONComReadFile(arquivo) {
    var fs = require('fs');
    var json = {};

    // console.log('iniciou a leitura do arquivo');
    // var callback = function(err,data) {
    //     if (err) throw err;
    //     json = JSON.parse(data);
    //     console.log('AGORA TERMINOU');
    // };
    // fs.readFile('./natalcard.json', callback);
    fs.readFile(arquivo, (err, data) => {
      if (err) throw err;
      json = JSON.parse(data);
    //   console.log('AGORA TERMINOU');
    });
    // console.log('terminou a leitura');
    // console.log(json);

    // pode ser que não funcione porque pode finalizar
    // a função sem terminar de ler o arquivo
    return json;
}

function lerJSONComRequire(arquivo) {
    var json = require(arquivo);

    // console.log(json);

    return json;
}
