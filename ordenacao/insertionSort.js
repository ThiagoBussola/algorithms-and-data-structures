// para pegar a ultima posição do array utilizamos j = meuArray.length -1


// agora devemos comprar o item que vamos inserir, no caso o 23, com o penultimo item, ou seja: j -1
// se for menor, eu troco o j pelo j -1, então o j passa a ser agora o penultimo item, ou seja o 23

let myArr = [7, 12, 14, 18, 51, 60, 73, 90, 23]
// atual começa como o ultimo item

let atual = myArr.length - 1
while (atual > 0 && myArr[atual] < myArr[atual -1]) {
    let aux = myArr[atual]
    myArr[atual] = myArr[atual - 1]
    myArr[atual-1] = aux
    atual -= 1;
}

console.log(myArr)

// método dois
// método do Cormen
let myArr2 = [7, 12, 14, 18, 51, 60, 73, 90, 23]
// J deve ser o atual, e começar na segunda posição no caso inicia no 12
for(let atual = 1; atual < myArr2.length; atual++) {
    // a chave recebe o segundo item
    let key = myArr2[atual]
    // o i representa o item anterior ao qual estamos percorrendo, no caso inicia no 7
    let i = atual - 1
    while (i > 0 && myArr2[i] > key){
        myArr2[i + 1] = myArr2[i]
        i = i -1
    }
    myArr2[i+1] = key
}

console.log(myArr2)


// método da Loiane
function insertionSort() {
    let array = [3, 5, 1, 4, 2]
    // no caso dessa declaração length vale 5
    var length = array.length, j, temp;
    console.log("length", length)
    for (var i = 1; i < length; i++) {
        j = i
        temp = array[i]
        while(j > 0 && array[j-1] > temp) {
            array[j] = array[j-1]
            j--
        }
        array[j] = temp
    }
}

insertionSort()