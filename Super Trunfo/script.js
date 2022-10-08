//Inicia cartass para o jogo
var carta1 = {
    nome: "Bulbassauro",
    imagem:
      "https://i.pinimg.com/564x/1d/03/d4/1d03d443e4d1488f7dc77a547656fd6d.jpg",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  
  var carta2 = {
    nome: "Charmander",
    imagem: "https://i.pinimg.com/736x/ff/ba/e0/ffbae06e278676d2e8550452cd41cb0c.jpg",
    atributos: {
      ataque: 9,
      defesa: 5,
      magia: 7
    }
  };
  
  var carta3 = {
    nome: "Squirtle",
    imagem: "https://i.pinimg.com/564x/b0/1b/b9/b01bb9dda74930c0a1a7725b741b1ef9.jpg",
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
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
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
    var divResultado = document.getElementById("resultado");
  
    if (valorJogador > valorMaquina) {
      divResultado.innerHTML = "<p class='resultado-final'>VENCEU!!!</p>";
    } else if (valorMaquina > valorJogador) {
      divResultado.innerHTML = "<p class='resultado-final'>PERDEU!</p>";
    } else {
      divResultado.innerHTML = "<p class='resultado-final'>EMPATOU!!</p>";
    }
    document.getElementById("btnJogar").disebled = true;
    
    exibirCartaMaquina()
  }
  
  //Mostra a carta que o jogador tem a tela
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    //divCartaJogador.style.backgroundImage"url(" + cartaJogador.imagem + ")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
   
    var opcoesTexto = "";
      for (var atributo in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + "  " + cartaJogador.atributos[atributo] + "<br>";
    }
    
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
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
      opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + "  " + cartaMaquina.atributos[atributo] + "</p>";
    }
    
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
  }