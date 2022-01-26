
var d=document.getElementById("picture");

var lienzo = d.getContext("2d");

var textoWidth = document.getElementById("txtWidth"); // texto guarda TODA la información del input
var texto = document.getElementById("txtLineas"); // texto guarda TODA la información del input
var boton = document.getElementById("button");

var textoWidth = document.getElementById("txtWidth"); // texto guarda TODA la información del input


boton.addEventListener("click",drawClick); //sin () la función NO se ejecuta automaticamente
// en html se puede llamar la function with onclick="drawClick() in button"

function linea(xInicial,yInicial,xFinal,yFinal){
    lienzo.moveTo(xInicial,yInicial);  // donde empieza la linea
    lienzo.lineTo(xFinal,yFinal);  // hasta donde va la linea
   
}

function drawClick(){
     
     d.width = parseInt(textoWidth.value);
     d.height = d.width;

    var cantidadLineas = parseInt(texto.value);
    console.log(cantidadLineas);
    lienzo.clearRect(0,0,600,600);
    lienzo.beginPath();
    lienzo.strokeStyle= "green";

inicioCuadro=0;
finCuadro=d.width;
divisionCuadro=(finCuadro-inicioCuadro)/cantidadLineas;


for (i=0; i<cantidadLineas; i++){
    y=(divisionCuadro*i)+inicioCuadro;
    x=divisionCuadro*(i+1)+inicioCuadro;

    linea(inicioCuadro,y,x,finCuadro)   
    linea(y,finCuadro,finCuadro,finCuadro-(x-inicioCuadro))
    linea(finCuadro,finCuadro-(y-inicioCuadro),finCuadro-(x-inicioCuadro),inicioCuadro)
    linea(finCuadro-(y-inicioCuadro),inicioCuadro,inicioCuadro,x)
      
}

lienzo.stroke();
lienzo.closePath();
}

