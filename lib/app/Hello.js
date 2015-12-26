//aqui definimos que será uma classe typescript
var Hello = (function () {
    function Hello() {
    }
    //criamos um método que recebe dois parametros:
    //-> name, um nome para nosso aplicativo
    Hello.prototype.hello = function (name) {
        var mensagem = ("Hello World !!!!!  Nome: %s", name);
        return mensagem;
    };
    return Hello;
})();

//definimos que nossa classe não pode ser herdada
//similar ao sealead do C#
//utilizamos assim, apenas por boa prática
Object.seal(Hello);

module.exports = Hello;
//# sourceMappingURL=Hello.js.map
