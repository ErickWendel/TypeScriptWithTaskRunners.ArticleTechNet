//aqui definimos que será uma classe typescript
class Hello {
    
    //criamos um método que recebe dois parametros:
    //-> name, um nome para nosso aplicativo
    hello (name:string): string {
        var mensagem: string = ("Hello World !!!!!  Nome: %s", name);
        return  mensagem;
    }
}

//definimos que nossa classe não pode ser herdada
//similar ao sealead do C#
//utilizamos assim, apenas por boa prática 
Object.seal(Hello);

//tornamos nossa classe visivel a 
//todos da aplicação 
export = Hello;