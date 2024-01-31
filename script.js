let usuario = prompt ("Digite um numero: ")

function parImpar(valor) {
    verificacao = parseInt(valor) % 2;
    if (verificacao == 0){
        return "O numero "+ parseFloat(usuario) + " é par"
    }if (verificacao >= 1) {
        return "O numero "+ parseFloat(usuario) + " é impar"

    } else{
        return "Valor invalido"
    }
}
alert(parImpar(usuario))