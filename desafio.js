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
//  const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
//  console.log(carta.texto)
//  console.log(carta.valor)



//  Projeto BlackJack  Desafio \\

function desafioBla() {

  let jogo21 = confirm(`Boas vindas ao jogo de BlackJack! 
    Quer iniciar uma nova rodada?`)

  if (jogo21 === false) {

    alert(`O jogo acabou.`)
    return
  }

  let usuarioUm = []
  let computador = []

  if (jogo21) {

    let cartas = false
    while (!cartas) {

      usuarioUm.push(comprarCarta())
      usuarioUm.push(comprarCarta())
      computador.push(comprarCarta())
      computador.push(comprarCarta())

      //verificação para impedir um par de A na primeira mão	
      if ((usuarioUm[0].valor === 11 && usuarioUm[1].valor === 11) || (computador[0].valor === 11 && computador[1].valor === 11)) {

        usuarioUm = []
        computador = []

      } else {
        cartas = true

      }
    }
  }

  let textoUsuarioUm = `As cartas do usuário são:    `
  let textoComputador = `Computador:   `

  let pontuacaoUsuarioUm = 0
  let pontuacaoComputador = 0

  for (let i = 0; i < usuarioUm.length; i++) {
    textoUsuarioUm += usuarioUm[i].texto + " "
    pontuacaoUsuarioUm += usuarioUm[i].valor
  }

  for (let i = 0; i < computador.length; i++) {
    textoComputador += computador[i].texto + ""
    pontuacaoComputador += computador[i].valor
  }

  let comprar = true

  while (comprar) {
    if (pontuacaoUsuarioUm > 21) {
      break;
    }
    let outraCarta = confirm(`${textoUsuarioUm}\nA carta revelada do computador é    ${computador[0].texto}.  ` +
      "\n" + `Deseja comprar mais uma carta?`
    )

    if (outraCarta) {
      let carta = comprarCarta()
      usuarioUm.push(carta)
      pontuacaoUsuarioUm += carta.valor
      textoUsuarioUm += `${carta.texto}`

    } else {
      comprar = false
    }
  }

  while (pontuacaoComputador <= pontuacaoUsuarioUm && pontuacaoUsuarioUm <= 21) {
    let carta = comprarCarta()
    computador.push(carta)
    pontuacaoComputador += carta.valor
    textoComputador += `${carta.texto}`
  }

  let frase = " "

  if (pontuacaoUsuarioUm > 21) {
    frase = `"Computador ganhou!"`

  } else if (pontuacaoComputador > 21) {
    frase = `"Usuário ganhou!"`

  } else if (pontuacaoComputador > pontuacaoUsuarioUm) {
    frase = `"Computador ganhou!"`

  } else if (pontuacaoUsuarioUm > pontuacaoComputador) {
    frase = `"Usuário ganhou!"`

  } else {
    frase = `"Empate!"`
  }

  alert(`${textoUsuarioUm}\nPontuação do Usuário:  ${pontuacaoUsuarioUm}\n${textoComputador}\nPontuação do Computador é:  ${pontuacaoComputador}\n${frase}`)

}

desafioBla()

