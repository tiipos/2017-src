lerJSONComReadFileSync();
lerJSONComReadFile();
var json = lerJSONComRequire();
console.log(json[0].matricula);

function lerJSONComReadFileSync() {
    var fs = require('fs');

    // console.log('iniciou a leitura');
    var texto = fs.readFileSync('./natalcard.json');
    // console.log('terminou a leitura do arquivo');
    // console.log('iniciou a conversão do texto para objeto');
    var json = JSON.parse(texto);
    // console.log('terminou a conversão do texto para objeto');
    // console.log(json);

    return json;
}

function lerJSONComReadFile() {
    var fs = require('fs');
    var json = {};

    // console.log('iniciou a leitura do arquivo');
    // var callback = function(err,data) {
    //     if (err) throw err;
    //     json = JSON.parse(data);
    //     console.log('AGORA TERMINOU');
    // };
    // fs.readFile('./natalcard.json', callback);
    fs.readFile('./natalcard.json', (err, data) => {
      if (err) throw err;
      json = JSON.parse(data);
    //   console.log('AGORA TERMINOU');
    });
    // console.log('terminou a leitura');
    // console.log(json);

    return json;
}

function lerJSONComRequire() {
    var json = require('./natalcard.json');

    // console.log(json);

    return json;
}
