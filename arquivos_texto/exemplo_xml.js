var nomeDoArquivo = __dirname + '/natalcard.xml';

// lerXMLComReadXml(nomeDoArquivo, function(err, data) {
//     console.log(data);
// });

lerXMLComXml2Js(nomeDoArquivo, function(err, result) {
    console.log(result.alunos.aluno[1]);
    console.log(result.alunos.aluno[1]['$'].matricula);
    console.log(result.alunos.aluno[1].nome[0]);
    console.log(result.alunos.aluno[1].cpf[0]);
    console.log(result.alunos.aluno[1].email[0]);
    console.log(result.alunos.aluno[1].telefone[0]);
});


function lerXMLComReadXml(arquivo, funcao) {
    var fs = require('fs');
    var xmlReader = require('read-xml');

    fs.readFile(arquivo, function(err, data) {
        xmlReader.readXML(data, funcao);
    });
}

function lerXMLComXml2Js(arquivo, funcao) {
    var fs = require('fs');
    var xmlParser = require('xml2js').parseString;

    fs.readFile(arquivo, function(err, data) {
        xmlParser(data, funcao);
    });
}
