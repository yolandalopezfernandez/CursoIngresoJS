function mostrar()
{
	ESTADIA = 15000;
	let estacion;
	let destino;
	let precioFinal;
	let porcentaje;
	

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	switch (estacion){

		case "Invierno" :

			if (destino == "Bariloche" ){
				porcentaje = 20;
			}
			else if ( destino == "Cataratas" || destino == "Cordoba"){
				porcentaje = -10;
			}
			else{
				porcentaje = -20;
			}
		break;
		case "Verano":

			if (destino == "Bariloche" ){
				porcentaje = -20;
			}
			else if ( destino == "Cataratas" || destino == "Cordoba"){
				porcentaje = 10;
			}
			else{
				porcentaje = 20;
			}
		break;
		case "Otoño":
			case "Primavera":

			if (destino == "Cordoba" ){
				porcentaje = 0;
			}
			else{
				porcentaje = 10;
			}
		break;
	}
	
	precioFinal = ESTADIA + ESTADIA * porcentaje/100;

	alert(`Su viaje con destino a ${destino} en ${estacion} tiene un costo de ${precioFinal}`);


	/*if( estacion == "Invierno"){
		switch(destino){
			case "Bariloche":
				aumento = 20;
			break;
			case "Cataratas":
				case "Cordoba":
					descuento = 10;
			break;
			case  "Mar del plata":
				descuento = 20;
			break;
		}
		
	}
	else if(estacion == "Verano"){
		switch(destino){
			case "Bariloche":
				descuento = 20;
			break;
			case "Cataratas":
				case "Cordoba":
					aumento = 10;
			break;
			case  "Mar del plata":
				aumento = 20;
			break;
		}
	}
	else{
		switch(destino){
			case "Bariloche":
				case "Cataratas":
					case  "Mar del plata":
						aumento = 10;
			break;
			case "Cordoba":
				descuento = 0;	
			break;
		}
	}
	if (aumento != 0){
		precioFinal = ESTADIA + ESTADIA * aumento / 100 ;
	}
	else if(descuento != 0){
		precioFinal = ESTADIA - ESTADIA * descuento / 100 ;
	}
	else{
		precioFinal = ESTADIA
	}

	alert(`Su viaje con destino a ${destino} en ${estacion} tiene un costo de ${precioFinal}`);
	*/
	



}