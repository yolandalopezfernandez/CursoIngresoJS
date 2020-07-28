function mostrar()
{
	//tomo la hora
	let hora;

	hora = parseInt(document.getElementById("txtIdHora").value);

	if(hora > 6 && hora <= 11){
		alert("Es de mañana");
	}
	else if(hora > 11 && hora <= 19){
		alert("Es de tarde");
	}
	else if( (hora >= 20 && hora <= 24) || (hora >= 0 && hora <= 6) ){
		// primero relacionales y despues logicos, cuando estan iguales de der a izq
		alert("Es de noche");
	}
	else{
		alert("la hora no existe.");
	}

	/*if(hora >= 0 && hora <= 24){

		switch(hora){
		case 7:
			case 8:
				case 9:
					case 10:
						case 11:
							alert("Es de mañana");
		break;
		case 12:
			case 13:
				case 14:
					case 15:
						case 16:
							case 17:
								case 18:
									case 19:
							alert("Es de tarde");
		break;
		default: 
			alert("Es de noche");
		}
	}
	else {
		alert("la hora no existe.");
	}*/


	

}//FIN DE LA FUNCIÓN