// Variáveis:
//respostas - São respostas que serão dadas.
//elementoResposta - É o ID do h3 do HTML, onde estará a resposta.
//document.querySelector - Procura de seletor para achar as IDs #resposta e #inputPergunta no HTML. 
//inputPergunta - Para verificar se a pergunta foi vazia.
//buttonPerguntar - Para desabilitar o botão enquanto uma resposta é mostrada.
const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
    "Assim como um balançar de borboletas, a resposta estará dentro de ti.",
    "Hmm... Para encontrar a resposta, procure enfrentar suas inseguranças.",
    "Nada mais proveitoso que o tempo, logo conhecerá a resposta.",
    "Não sei! Valeu! Eu tô atrasado para levar minha avó no jiu-jitsu.",
    "Vou ver e te aviso!",
    "Sei lá, irmão. Eu sou Daleste, cheguei mas tô saindo fora!",
    "Pera aí, deixa eu checar aqui...",
    "Opa! Eu não sei não, viu. Pesquisa no Google."
]

// Criação de função para quando clicar em fazer pergunta
function fazerPergunta() {
//if para quando a perguntar for vazia, para a pessoa digitar a pergunta corretamente
  if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  // Geração de um número aleatório da Array.
  const  totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  // Para voltar a resposta da opacidade 0
  elementoResposta.style.opacity = 1;

  // Sumir a resposta depois de 3s
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}