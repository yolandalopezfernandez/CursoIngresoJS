/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1; //reservo espacio de memoria
	let num2;
	let resultado;
    //le aigno valor de la caja de texto a la variable num1
	num1 = document.getElementById("txtIdNumeroUno").value;
    //* num1 = parseInt(document.getElementById("txtIdNumeroUno").value);   Primero lee el docuemtn lo pasa a numero con el parse y lo depositi en la variaable

    //pisa el dato de la variable y lo devuelve convertido en n° entero
	num1 = parseInt(num1);

	num2 = document.getElementById("txtIdNumeroDos").value;

	num2 = parseInt(num2);

	resultado = num1 + num2;

	alert("la suma es " +  resultado);
    

	/*
	let x = "20";
	let y = "10";
	let z;
    //parseInt pisa el dato de la variable y la devuelve como numero
	y = parseInt(y);
	x = parseInt(x);

	z = x + y;

	alert (z); */

}

