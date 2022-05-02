function start() { // Inicio da função start()

	$("#inicio").hide(); // comando Jquery - seleciona uma div / utiliza função do Jquery "hide" para oculta-la
	
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>"); // append - cria novas divs dentro da div especificada
	$("#fundoGame").append("<div id='inimigo1'  class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");



//Principais variáveis do jogo
	
	var jogo = {}

	var TECLA = {
		W: 87,	// valor decimal de cada tecla
		S: 83,
		D: 68
		}
	
		jogo.pressionou = []; // array que recebe as teclas pressionadas

		//Verifica se o usuário pressionou alguma tecla	
	
		$(document).keydown(function(e){ 	// keydown = verifica se a tecla foi pressionada
			jogo.pressionou[e.which] = true;
		});
	
	
		$(document).keyup(function(e){		// keyup = verifica se a tecla NÃO está sendo pressionada no momento
		   jogo.pressionou[e.which] = false;
		});
	
	//Game Loop

	jogo.timer = setInterval(loop,30);
	
	function loop() {
	// função principal do jogo, que faz um looping até o jogo terminar
	movefundo();
	movejogador();
	
	} // Fim da função loop()

//Função que movimenta o fundo do jogo
	
	function movefundo() {
	
	esquerda = parseInt($("#fundoGame").css("background-position"));
	$("#fundoGame").css("background-position",esquerda-1);
	// pega a posição atual da div "fundoGame" e subtrai sempre -1 pixel para fazer a tela sempre
	// se movimentar
	} // fim da função movefundo()

	function movejogador() {
	
		if (jogo.pressionou[TECLA.W]) { 		// nave anda para baixo
			var topo = parseInt($("#jogador").css("top"));
			$("#jogador").css("top",topo-10);

			if (topo<=0) {							// verifica se não ultrapassa o teto e se passar, soma +10 
				$("#jogador").css("top",topo+10);	//	e "prende" o helicóptero no máximo do teto
			}
				
		}
		
		if (jogo.pressionou[TECLA.S]) {				// nave anda para cima
			var topo = parseInt($("#jogador").css("top"));
			$("#jogador").css("top",topo+10);	

			if (topo>=434) {						// verificação para o chão, não ultrapassar o máximo do chão
				$("#jogador").css("top",topo-10);
			}	
		}
		
		if (jogo.pressionou[TECLA.D]) {
			//Chama função Disparo	
		}
	
	} // fim da função movejogador()



} // Fim da função start