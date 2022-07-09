const podeDirigir = true
if(podeDirigir) {
    console.log('Ela pode dirigir')
}

const saldoEmConta = 1
if(!saldoEmConta) {
    console.log('Não tem saldo!')
}

const boolComString = 'ae hackerzao!!'

// força o valor a true ou false
// de acordo com a tabela
console.log('boolComString', !!boolComString)

//negação
console.log('negação', !boolComString)

// negação + forçar a boll
console.log(
    'negação + forçar bool',
    ! (!!boolComString)
)