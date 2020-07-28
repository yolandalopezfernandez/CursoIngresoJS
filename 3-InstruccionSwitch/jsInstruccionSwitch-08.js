function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	if( destino == "Ushuaia" || destino == "Bariloche"){
		alert("FRIO");
	}
	else if(destino == "Mar del plata" || destino == "Cataratas"){
		alert("CALOR");
	}
	else{
		alert("dato invalido");
	}

	/*switch(destino){

		case "Bariloche":
			case "Ushuaia":
			alert("FRIO");
		break;
		case "Mar del plata":
			case "Cataratas":
			alert("CALOR");
		break;
	}*/
}