/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre; // declaro variable nombre

	nombre = prompt("Ingrese su Nombre"); // igual primero ejecuta a la derecha y despues la izq
	// se lee primero desde la derecha y los parentesis y luego se ejecuta a la izquierda del =

	alert(nombre);
}

