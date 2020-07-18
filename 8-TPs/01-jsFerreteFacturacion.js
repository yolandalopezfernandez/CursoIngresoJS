/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precio1;
    let precio2;
    let precio3;
    let suma;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = /*precio1 /*+ precio2 +*/ precio3;
    suma = suma.toFixed(2);

    alert("la suma es $" + suma);

}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let promedio;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    promedio = (precio1 + precio2 + precio3) / 3;

    promedio = promedio.toFixed(2);

    alert("el promedio es $" + promedio);
}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let precioIva;
    let suma;
    //capturo los datos de la caja de texto
    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = precio1 + precio2 + precio3; // iva = suma * 21 / 100;

    precioIva = suma + (suma) * 21 / 100; // importeFirnal = suma + iva;

    precioIva = precioIva.toFixed(2);

    alert("el precio final es $" + precioIva); 
    // se modifica la variable las veces que quiera pisando el valor de la misma
    // reescribiendo la variable
}