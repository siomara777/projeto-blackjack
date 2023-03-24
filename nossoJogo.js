/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
 
//confirm(`"Quer iniciar uma nova rodada?"`)

//if(confirm(`"Quer iniciar uma nova rodada?"`)) { 
// o que fazer se o usuário clicar "ok" 
//} else { 
//console.log(`"O jogo acabou".`)
// o que fazer se o usuário clicar "cancelar"   
//}

//const carta = comprarCarta();
// // Método que sorteia uma carta. Por exemplo, o rei de ouros 

//console.log(carta.texto) 
// // imprime o texto da carta. Nesse caso: "K♦️" 

//console.log(carta.valor) 
// // imprime o valor da carta (um número). Nesse caso: 10)



        //  Projeto BlackJack  Nosso Jogo\\


console.log(`"Boas vindas ao jogo de BlackJack!"`)

const resposta = confirm(`"Quer iniciar uma nova rodada?"`)
if (resposta == true) 
{  
 
const cartaUsuarioUm = comprarCarta()
const cartaUsuarioDois = comprarCarta()
const pontuacaoUsuario = cartaUsuarioUm.valor  + cartaUsuarioDois.valor

console.log(`"Usuário - cartas:`, cartaUsuarioUm.texto, cartaUsuarioDois.texto, `- pontuação`, pontuacaoUsuario,`"`)

const computadorUm = comprarCarta()
const computadorDois = comprarCarta()
const pontuacaoComputador = computadorUm.valor + computadorDois.valor

console.log(`"Computador - cartas:`, computadorUm.texto, computadorDois.texto, `- pontuação`, pontuacaoComputador,`"`)

// verificação para impedir um par de A na primeira mão	
if (cartaUsuarioUm[1] === "A"  && cartaUsuarioDois[2] === "A")  cartaUsuarioUmGeraCarta()
if (computadorUm[1] === "A"  && computadorDois[2] === "A" )  computadorUmGeraCarta()

const usuarioGanhou = pontuacaoUsuario > pontuacaoComputador
const computadorGanhou = pontuacaoUsuario < pontuacaoComputador
const empate = pontuacaoComputador === pontuacaoUsuario

if (usuarioGanhou) {
  console.log('"O usuário ganhou!"')

} else if (computadorGanhou) {
  console.log('"O computador ganhou!"')

} else if (empate){
  console.log('"Empate!"')

} else {

}

} 
else
{
console.log(`"O jogo acabou".`)
} 
