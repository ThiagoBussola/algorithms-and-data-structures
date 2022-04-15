// insertion sort
{
    function insertionSort(array) {
        for (let i = 1; i < array.length; i++) {
            let temp = array[i]
            let j = i - 1

            while (array[j] > temp) {
                array[j + 1] = array[j]
                j--
            }

            j++

            array[j] = temp
        }

        return array
    }

    (function test() {
        var testArray1 = [3, 4, 2, 1]
        console.log(insertionSort(testArray1))
    })()
}

// Loiane Insertion

{
    function insertionSort(array) {
        let length = array.length, j, temp // declaração de variaveis 

        for (let i = 1; i < length; i++) { // iterar sobre o array para encontrar o lugar correto para o i-éssimo item. Commeçamos pelo seguindo item pois consideramos que o primeir já está ordenado
            j = i // variavel auxiliar com o valor de i
            temp = array[i] // variavel temporaria com a posição do array, para que seja inserido mais tarde na posição correta

            while (j > 0 && array[j - 1] > temp) { // verificando se é maior que zero e se o valor anterior no array é maior que o malor com o qual estamos comparando
                array[j] = array[j - 1] // deslocando o valor anterior para a posição atual
                j-- // decrementar o j
            }
            array[j] = temp // inserindo o valor na posição correta
        }
        return array
    }

    (function test() {
        var testArray = [100, 33, 6, 7, 52, 49, 69, 5,]
        console.log('Loianeeeee')
        console.log(insertionSort(testArray))
    })()
}

// insetion sort -> canal Programação dinamica

{
    function insertion_sort(array) {
        length = array.length
        for(i = 1; i < length; i++) {
            chave = array[i] // o que ele chama de chave os outros chamam de temp, chave seria o elemento corrente
            j = i - 1 // enquanto o i começa na segunda posição, o j começaria na primeira posição, representando quem já está ordenado
            
            // descending order
            while (j >= 0 && array[j] > chave) {
                array[j+1] = array[j]
                j--
            }
            array[j+1] = chave
        }
        return array
    }

    (function test() {
        var testArray = [100, 33, 6, 7, 52, 49, 69, 5,]
        console.log('PM')
        console.log(insertion_sort(testArray))
    })()
}