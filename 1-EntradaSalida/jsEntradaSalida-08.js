/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo;
	let divisor;
	let resto;

	dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	resto = dividendo % divisor; 

	alert(" el resto es " + resto);

	/*let x = 40;
	let y = 20;
	let z = 10;

	let resultado = x + y * z; // orden prioridad de operadores
    // igual prioridades de izq a der prim der   () se ejecuta primero
	alert(resultado):*/


}
