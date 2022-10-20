//Inicia cartass para o jogo
var carta1 = {
  nome: "Bulbassauro",
  imagem:
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};

var carta2 = {
  nome: "Charmander",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  atributos: {
    ataque: 9,
    defesa: 5,
    magia: 7
  }
};

var carta3 = {
  nome: "Squirtle",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  atributos: {
    ataque: 6,
    defesa: 9,
    magia: 7
  }
};

var cartas = [carta1, carta2, carta3];

var cartaMaquina;
var cartaJogador;

//Sortea cartas
function sortearCarta() {
  var indiceCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[indiceCartaMaquina];

  var indiceCartaJogador = parseInt(Math.random() * 3);
  while (indiceCartaMaquina == indiceCartaJogador) {
    indiceCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[indiceCartaJogador];

  exibirCartaJogador();
}

//Seleciona atributo
function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

//Compara o atributo selecionado
function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var valorJogador = cartaJogador.atributos[atributoSelecionado];
  var valorMaquina = cartaMaquina.atributos[atributoSelecionado];
  var divResultado = document.getElementById("divResultado");

  exibirCartaMaquina()

  setTimeout(() => {
    divResultado.style.display = "flex"

    if (valorJogador > valorMaquina) {
      divResultado.innerHTML = "<p>VENCEU!!!</p>";
    } else if (valorMaquina > valorJogador) {
      divResultado.innerHTML = "<p>PERDEU!</p>";
    } else {
      divResultado.innerHTML = "<p>EMPATOU!!</p>";
    }
    divResultado.innerHTML += `<button id="nextTurn" onclick="nextTurn()">Próxima Rodada</button>`
  }
    , 1000)


  document.getElementById("btnJogar").disebled = true;


}

//Mostra a carta que o jogador tem a tela
function exibirCartaJogador() {
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  //divCartaJogador.style.backgroundImage"url(" + cartaJogador.imagem + ")"
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo.toUpperCase() + ":   " + cartaJogador.atributos[atributo] + "<br>";
  }

  var nome = `<div class="card-subtitle">${cartaJogador.nome}</div>`
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

//Mostra a carta que a máquina tem
function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  //divCartaMaquina.style.backgroundImage"url(" + cartaMaquina.imagem + ")"
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo.toUpperCase() + ":   " + cartaMaquina.atributos[atributo] + "</p>";
  }

  var nome = `<p class="card-subtitle">${cartaMaquina.nome}</p>`
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function nextTurn() {
  
}