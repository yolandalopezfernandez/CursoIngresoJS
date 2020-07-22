function mostrar()
{
	let numero;
	let minimo = 10; // declarar asi las variables hace reutilizable el codigo
	let maximo = 1;

	numero = Math.round(Math.random () * (maximo - minimo)+ minimo);
	// mathramdom (dato sale del round) * (se genera otro operando) el min
	// por si el producto es cero entonces el resultado no es cero
	alert(numero);

}//FIN DE LA FUNCIÓN