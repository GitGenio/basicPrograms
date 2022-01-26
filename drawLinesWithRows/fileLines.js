
var puntoInicio =300;
// se hace un arreglo como pureba para inicializar las variables al tiempo
const arrayVarInicio = [xInicial= puntoInicio,yInicial= puntoInicio,xFinal= puntoInicio,yFinal= puntoInicio];

var mov =31;  // tamaño de linea dibujada
var keys = { LEFT:37, UP:38, DOWN:40, RIGHT:39 }; //en JSON asigno numero a una constante
var d = document.getElementById("linesCanvas");
d.width=1200; // width of field to draw
d.height=600;
var lienzo = d.getContext("2d");

document.addEventListener("keyup",drawkey);

function linea(xInicial,yInicial,xFinal,yFinal){
    lienzo.moveTo(xInicial,yInicial);  // donde empieza la linea
    lienzo.lineTo(xFinal,yFinal);  // hasta donde va la linea   
}

function drawkey(variable){

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.lineWidth = 5;

switch(variable.keyCode){

    case keys.LEFT:
         xFinal -= mov;       
        break;
    case keys.RIGHT:
        xFinal += mov;
        break;
    case keys.DOWN:
        yFinal+= mov;  
         break;  
     case keys.UP:
         yFinal -= mov;
         break;

}

linea(xInicial,yInicial,xFinal,yFinal);
xInicial = xFinal; // se cambia el punto de inicio
yInicial = yFinal;

lienzo.stroke();
lienzo.closePath();
console.log(variable);


}

