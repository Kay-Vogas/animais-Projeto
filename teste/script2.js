// NUMERO ALEATORIO ENTRE 1050 E 2000

const aletorio = Math.floor(Math.random()*(2000 - 1050 +1)) + 1050;

console.log(aletorio)

// Retorne O MAIOR NUMB DA LISTA 

const lista = "4 ,5 ,20 ,8 ,9";

const arrayNumb = lista.split(",");
const maxNumb = Math.max(...arrayNumb);
console.log (maxNumb);

//

const listaValor=["    R$59,999","   R$100,222",
                 "R$230","     r$200"];

function limparValor(valor){
    valor = +valor.toUpperCase().trim().replace("R$","").replace(",",".");
    valor = +valor.toFixed(2);
    return valor;
    
};

let somaValores = 0;

listaValor.forEach((valor)=>{
    somaValores +=limparValor(valor);
})

console.log(somaValores);
