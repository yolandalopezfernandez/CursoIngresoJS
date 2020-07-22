function mostrar()
{
	let nota;

	nota = Math.round(Math.random () * 9 + 1);
	//alert(nota);

	if ( nota >= 9 ){ //  o nota == (9 || 10)
		alert("EXCELENTE: " + nota);
	}
	else if( nota > 3 ){ // o mayor igual 4
		alert("APROBÓ:" + nota);
	}
	else {
		alert("Vamos, la proxima se puede:" + nota);
	}

}//FIN DE LA FUNCIÓN