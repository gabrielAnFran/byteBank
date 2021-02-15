export class ContaCorrente{

    agencia;
    cliente;
    _saldo= 0;

    sacar(valor){
        if(valor <= this._saldo){
            console.log("Saldo anterior: "+ this._saldo)
            this._saldo -= valor;
            console.log("Saldo atual: "+ this._saldo)
            return valor;

            }

    }

    despositar(valor){
        if(valor<=0){

            return;

        }
        console.log("Saldo anterior: "+ this._saldo)
       let saldoAtual = this._saldo+= valor
        console.log("Saldo atual: "+ saldoAtual)

    }

}