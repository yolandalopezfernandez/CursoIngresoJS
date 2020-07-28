function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	if(destino == "Bariloche" ){
		alert("Oeste");
	}
	else if(destino == "Mar del plata"){
		alert("Este");
	}
	else if(destino ==  "Ushuaia"){
		alert("Sur");
	}
	else{
		alert("Norte");
	}
	/*switch(destino){

		case "Bariloche":
			alert("Oeste");
		break;
		case "Mar del plata":
			alert("Este");
		break;
		case "Ushuaia":
			alert("Sur");
		break;
		case "Cataratas":
			alert("Norte");
		break;
	}*/
	

}//FIN DE LA FUNCIÓN