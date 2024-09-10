function Pessoa(name,age){
    this.nome = name;
    this.idade= age;
    this.andar = function(){
        console.log(this.nome+" andou");
    }
}

const paciente1 = new Pessoa("Luiza",29);
const paciente2 = new Pessoa("João",20);
const paciente3 = new Pessoa("Maria Joaquina",669);

paciente1.andar()


function DomLista(seletor){
    const elementList = document.querySelectorAll(seletor); 
    this.element = elementList
    this.addClass= function(classe){
        elementList.forEach((element)=>{
            element.classList.add(classe)
        })
    }
    this.removeClass = function(classe){
        elementList.forEach((element)=>{
            element.classList.remove(classe);    
        })
    };
};

const lista = new DomLista("li");
lista.addClass("teste");


function Pessoa(nome,sobrenome,idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

const pessoa1 = new Pessoa("Kaio","Fagundes",45);

Pessoa.prototype.nameCompleto = function(){
    return this.nome +' '+this.sobrenome;
}

console.log(pessoa1.nameCompleto());

const transacoes = [
    {
        descricao: "Taxa do Pão",
        valor : "R$ 39",
    },
    {
        descricao: "Taxa do Mercado",
        valor : "R$ 129",   
    },
    {
        descricao: "Taxa do Cliente",
        valor : "R$ 99",   
    },
    {
        descricao: "Recebimento do Cliente",
        valor : "R$ 49",   
    },
]

// console.log(transacoes[0].valor);
let taxaTotal = 0;
let recebiTotal = 0;
transacoes.forEach((item)=>{
    const numbLimpo = +item.valor.replace("R$ ","")

    if(item.descricao.slice(0,4)==="Taxa"){
        taxaTotal+=numbLimpo;
    }else if(item.descricao.slice(0,4)==="Rece") {
        recebiTotal+=numbLimpo;
        
    }
})

console.log(taxaTotal,recebiTotal)


const transporte = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransporte = transporte.split(";");

console.log(arrayTransporte);

const html = "<ul><li><span>Sobre</span></li><li><span>Produtos</span></li><li><span>Contato</span></li></ul>";

const htmlArray = html.split("span").join("a");
console.log(htmlArray)

const frase = "Melhor do ano!";


console.log(frase.charAt(frase.length-1))


const transacoes2 = ['Taxa do Banco','   Taxa do Pão','  Taxa do Mercado',' Taxa do Cliente','       Recebimento do Cliente'];

let totalTaxa = 0;

transacoes2.forEach((item)=>{
    item = item.toLocaleLowerCase().trim().slice(0,4);
    
    if(item==="taxa"){
        totalTaxa++;
    }

})

console.log(totalTaxa); 