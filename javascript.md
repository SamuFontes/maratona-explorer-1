1. Variáveis - Atribui valores na memória
let estaChovendo = true (let change você altera o valor em qualquer momento)
const meuNome = "Samuel" (constant você não consegue alterar o valor)


2. Tipos de Dados
String - Dado de texto 
 "" - Dado de texto
 '' - Dado de texto

Number
12 - Integer(Inteiro) (+ -)
3.2 - Float(Racional) (+ - )

Boolean
true or false (verdadeiro ou falso)
const maiorDeDezoito = false

undefined - indefinido


3. Operadores
    Atribuição (ex.: =)
    Atribui valor
    let n1 = 12
    let n2 = 3

    console.log(n1 + n2)


Aritméticos (ex.: * / + -)
Cálculos matemáticos simples

Concatenação de String (+)
console.log (Samuel, você é nota " + 10)

Comparação (ex.: > < ==)
Transforma a expressão em true ou false
const maiorQue = 1 > 2 // false
igualA = 1 == 1 // true

4. Condicional (if/else)
const idade = 17
const maiorDeDezoito = idade >= 18

if(maiorDeDezoito) {
    alert("Pode tirar carteira de motorista")
}   else {
    alert("Não pode tirar")
}

5. Estrutura de dados
Array é um Vetor, uma Lista
Array -----           0     1   2    3
const temperaturas = [23.3, 32.2, 1, 5]

Object
const pessoa = {
    nome: "Samuel",
    idade: 25,
    filhos: ["K", "E", "J", "L", "G"]
}

6. Function
Primeira etapa: Criação
function nomeDaFuncao() {
    console.log('código dentro da função')
    }

Segunda etapa: Execução
nomeDaFuncao()

Parâmetros (Relacionar uma função com um cálculo)
function soma(a, b) {
    console.log(a + b)
}

soma(34, 45)
soma(98, 54)

Retorno (Faz o cálculo direto no console.log)
function soma (a, b) {
    return a + b
}

console.log(soma(2, 2))

7. Extensões da linguagem (ex.: Math, Date...)

Math.random() - Número randômico entre 0 e 1.
Math.floor(1.2) - Arredonda para baixo o número (floor = piso).
Math.ceil(1.2) - Arredonda para cima o número (ceil = teto)
Math.PI - Número de PI.

8. DOM - Document Object Model

window
window.alert("alerta") - Aparece uma janela de alerta

document
document.write("texto") - Escrever um texto

manipular elementos
document.documentElement.style.background = "black" - Seta o CSS do HTML pelo JS.