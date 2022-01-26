
var d = document.getElementById("linesCanvas");
var lienzo = d.getContext("2d");
lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.lineWidth = 3;

// dibujo del borde
linea( 0, 0, d.width, 0,lienzo);
linea( d.width, 0, d.width, d.width,lienzo);
linea( d.width, d.width, 0, d.width,lienzo);
linea( 0, d.width, 0, 0,lienzo);

var estado = 0;


document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse
document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click

 // Funcion para mousedown
 function presionarMouse(evento)
  {
    estado = 1;         //click presionado  
    xInicial = evento.layerX;
    yInicial = evento.layerY;
  }

// Funcion para mousemove
function dibujarMouse(evento)
{
    if (estado == 1) 
    {   // solo se dibujara si esta el click del mouse presionado
        linea(xInicial, yInicial, evento.layerX, evento.layerY,lienzo)    
    }   
    xInicial = evento.layerX;
    yInicial = evento.layerY;
    
}
  
   // Funcion para mouseup
  function soltarMouse(evento)
  {
    estado = 0;         // click suelto
    //xInicial = evento.layerX;
    //yInicial = evento.layerY;
  }


function linea(xInicial,yInicial,xFinal,yFinal, lienzo)
{
    lienzo.moveTo(xInicial,yInicial);  // donde empieza la linea
    lienzo.lineTo(xFinal,yFinal);  // hasta donde va la linea   

    lienzo.stroke();
    lienzo.closePath();
}



