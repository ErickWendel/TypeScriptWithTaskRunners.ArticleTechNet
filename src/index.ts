//para conseguir trabalhar com typescript, 
//a classe principal precisa do módulo nodeJS
//onde a referencia encontra-se na pasta typings
//adicionamos a referencia ao nosso projeto

///< reference path="typings/tsd.d.ts"

//importamos a classe Hello
import Hello = require('./app/Hello');
var helloClass = new Hello();

//criamos uma variavel do tipo string, em seguida passamos
//o retorno do valor de nosso método 
var helloMensagem: string = helloClass.hello(' app hello world - Erick Wendel');

//exibimos o retorno na tela.
console.log(helloMensagem);

