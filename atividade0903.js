const listadepecas= ['pecas de teste','AB','peca b','peca 123']
const pesoemgramas =[50,130,43,250];
console.log(listadepecas);

if(listadepecas.length<=10){
    console.log('as pecas podem ser cadastradas');

for(let index =0; index < listadepecas.length; index++){
    const pecaatual = listadepecas[index];
    if(pecaatual.length< 3){
        console.log(pecaatual + ': a peca possui nome inferior a 3 caracteres e não pode ser cadastrada')
    }
    else
    console.log(pecaatual + ':a peca pode ser cadastrada')

    console.log('peso da peça');
    
    if (pesoemgramas>=100){
        console.log('peso suficiente: '+pesoemgramas[index])
    }
    else
    console.log('peso insuficiente: '+pesoemgramas[index])

    }
}





