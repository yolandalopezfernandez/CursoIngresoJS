function mostrar()
{
	let mes;
	 
	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Febrero" : 
			alert( "tiene 28 días");
		break;
		case "Abril" :
				case "Junio" :
					case "Septiembre" :
						case "Noviembre" :
						alert( "tiene 30 días");
		break;
		default :
			alert("tiene 31 días");
		break;
	}



}//FIN DE LA FUNCIÓN