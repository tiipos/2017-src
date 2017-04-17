var info_do_crime;
var teoria;

do {
  info_do_crime = ler_informacoes();
  teoria = ler_teoria();
  erros = verificar(info_do_crime, teoria);
  if (erros.length == 0) {
    sair = true;
  } else {
    imprimir_erro(erros)
  }
} while(sair)
