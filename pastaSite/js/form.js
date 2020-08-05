$(()=>{

	$('#txtNumPessoas').keypress(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			calculaPizza();
		}
	});

	botaoMais("soma1", "txtQtHomens");
	botaoMais("soma2", "txtQtMulheres");
	botaoMais("soma3", "txtQtCriancas");

	botaoMenos("subtrai1", "txtQtHomens");
	botaoMenos("subtrai2", "txtQtMulheres");
	botaoMenos("subtrai3", "txtQtCriancas");

});

function calculaPizza(){
	const qtPedacos = 2.66;
	let qtPessoas = $("#txtNumPessoas").val();
	let qtPizzas = 0;
	
	if(!qtPessoas || qtPessoas<=0|| (qtPessoas>0) == false ){
		alert("Se nem vc nem ninguém vai comer pizza, não faz sentido pedir pizza");
		$("#txtResultPizza").text(qtPizzas);
	}else{
		qtPizzas = (qtPessoas * qtPedacos)/8
		qtPizzas = Math.ceil(qtPizzas);

		$("#txtResultPizza").text(qtPizzas);
	}	
}

function calculaChurras(){
    const grHomem = 0.35;
    const grMulher = 0.25;
    const grCrianca = 0.15;

    let qtHomens = $("#txtQtHomens").html()*1;
    let qtMulheres = $("#txtQtMulheres").html()*1;
    let qtCriancas = $("#txtQtCriancas").html()*1;

    let kgCarne = (qtHomens * grHomem) + (qtMulheres * grMulher) + (qtCriancas * grCrianca);

    kgCarne = kgCarne.toFixed(1);

    $("#txtResultChurras").html(kgCarne);
}

function criptografa(){

	var tabela = [
        {"letra":"a","cripto":"k"},
        {"letra":"b","cripto":"t"},
        {"letra":"c","cripto":"v"},
        {"letra":"d","cripto":"l"},
        {"letra":"e","cripto":"p"},
		{"letra":"f","cripto":"&"},
		{"letra":"g","cripto":"!"},
		{"letra":"h","cripto":"¬"},
		{"letra":"i","cripto":"§"},
		{"letra":"j","cripto":"z"},
		{"letra":"k","cripto":"g"},
		{"letra":"l","cripto":"b"},
		{"letra":"m","cripto":"n"},
		{"letra":"n","cripto":"m"},
		{"letra":"o","cripto":"$"},
		{"letra":"p","cripto":"%"},
		{"letra":"q","cripto":"/"},
		{"letra":"r","cripto":"*"},
		{"letra":"s","cripto":"+"},
		{"letra":"t","cripto":"|"},
		{"letra":"u","cripto":"f"},
		{"letra":"v","cripto":"w"},
		{"letra":"w","cripto":"r"},
		{"letra":"x","cripto":"q"},
		{"letra":"y","cripto":"-"},
		{"letra":"z","cripto":"ç"},
        {"letra":" ","cripto":" "},
	]



	var textoCriptografado = $("#txtCriptografado").val().toLowerCase();
	var textoDescriptografado = $("#txtDescriptografado").val().toLowerCase();
	var descriptografado = "";
	var criptografado = "";
	var letra = "";


	if(textoCriptografado.length > 0 && textoDescriptografado.length == 0){
		//descriptografa
		//Object.keys(tabela).find(key => tabela[key] === "w");

	    criptografado = textoCriptografado.split("");

		for(var i=0;i<textoCriptografado.length;i++){
			letra = criptografado[i];
	        
			for(var j=0;j<tabela.length;j++){                
				if(letra == tabela[j].cripto){    
					descriptografado += tabela[j].letra;   
	            }
			}
		}
		$("#txtDescriptografado").val(descriptografado);
		console.log(descriptografado);

	}else if(textoDescriptografado.length > 0 && textoCriptografado.length == 0){
		//Criptografa
		
		descriptografado = textoDescriptografado.split("");

		for(var i=0;i<textoDescriptografado.length;i++){
			letra = descriptografado[i];
            
			for(var j=0;j<tabela.length;j++){                
				if(letra == tabela[j].letra){    
					criptografado += tabela[j].cripto;   
                }
			}
		}
		$("#txtCriptografado").val(criptografado);
		console.log(criptografado);

	}else{
		alert("Preencha apenas o campo com a informação que deverá ser criptografada/descriptografada, não deixe os dois campos preenchidos");
	}
}

function botaoMais(classe, campo){
	$(`.${classe}`).click(()=>{
		$(`#${campo}`).html($(`#${campo}`).html()*1+1);
	});
}

function botaoMenos(classe, campo){
	$(`.${classe}`).click(()=>{
		if(($(`#${campo}`).html()*1)>0){
			$(`#${campo}`).html($(`#${campo}`).html()*1-1);
		}
	});
}