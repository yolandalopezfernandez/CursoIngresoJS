/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let alambre;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    perimetro = 2 * (ancho + largo);

    alambre = perimetro * 3;

    alert("Se deben comprar " + alambre + " metros");
}
function Circulo () 
{
    let radio;
    let perimetro;
    let alambre;
    const PI = 3.14; // la const se declara el la misma linea que se inicializa
    // Math.PI
    radio = parseFloat(document.getElementById("txtIdRadio").value);
    // capturo el dato de la cja de texto

    perimetro = 2 * PI * radio;

    alambre = perimetro * 3;

    alert("Se deben comprar " + alambre + " metros");

}
function Materiales () 
{
    let largo;
    let ancho;
    let area;
    let alambre;
    let cemento; //cosnt CEMENTO_X_METRO =2;
    let cal;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    area = largo * ancho;
    
    cemento = area * 2;

    cal = area * 3;

    alert("Para un contrapiso de " +  area + "m2 necesito comprar " + cemento + " de cemento y " + cal + "bolsas de cal");

}