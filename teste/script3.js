const comida = ['pizza','frango','carne','macarrão'];

const primeiroArray = comida.shift();
const ultimArray = comida.pop();
comida.push("Arroz");
comida.unshift("Peixe");
// console.log(primeiroArray);
// console.log(ultimArray);


const estudante =['marcio','brenda','joana','kleber','julia'];

estudante.sort();
estudante.reverse();
console.log(estudante.includes("joana"));
console.log(estudante.includes("juliana"));

let html = '<section><div>Sobre</div><div>Produtos</div><div>Contatos</div></section>';
html = html.split("section").join("ul").split("div").join("li");


const carros =['Ford','fiat','vw','honda'];
const carrosOrig = carros.slice();

const carrosNovo = carros.pop();



