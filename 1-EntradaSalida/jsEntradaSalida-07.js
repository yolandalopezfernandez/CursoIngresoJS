/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num1;
	let num2;
	let resultado;
	
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);	
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = num1 + num2;

	alert("la suma es " + resultado);
}

function restar()
{
	let num1;
	let num2;
	let resultado;
	
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);	
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
    // javascript reconoce tipo de variable 
	resultado = num1 - num2;
    // alert(typeof); me muestra el tipo de variable
	alert("la resta es  " + resultado);
}

function multiplicar()
{ 
	let num1;
	let num2;
	let resultado;
	
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);	
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = num1 * num2;

	alert("la multiplicacion es  " + resultado);
}

function dividir()
{
    let num1;
	let num2;
	let resultado;
	
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);	
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = num1 / num2;

	alert("la división es  " + resultado);
}

