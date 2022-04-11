
class ContaBancaria {
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero; 
        this.tipo = tipo; 
        this._saldo = saldo;
    }
    
    get saldo() {
        // verifica se está chamando o método ou o atributo (se somar 25, é o método)
        return this._saldo + 25; 
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        this._saldo =- valor;
    }

    depositar(valor){
        this._saldo =+ valor;
    }

}


class ContaCorrente extends ContaBancaria{
    constructor(tipo = 'conta corrente',agencia,numero,saldo,cartaoCredito){
        super(agencia, numero, tipo, saldo);
        this._cartaoCredito = cartaoCredito;
        
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(cartao){
        this._cartaoCredito = cartao;
    }


}


class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        super(agencia, numero, tipo, saldo);
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        super(agencia, numero, tipo, saldo);
    }

    sacar(valor) {
        if(valor > 500){
            console.log("Só é possível sacar valores menores que 500 reais.");
        } else {
            this._saldo =- valor;
        }
        
    }

}

const contaGiuli = new ContaUniversitaria('3134','19.164-7','universitaria',5000);

// para acessar um método GET ou SET em JS, colocar antes dos atributos o underscore "_", assim quando for chamado, 
// será chamado o método e não o acesso direto do atributo
console.log(contaGiuli.saldo);




