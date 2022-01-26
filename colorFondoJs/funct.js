

var boton = document.getElementById("colorBackground");

boton.addEventListener("onclick",showChoose)

function showChoose(){
    if(document.getElementById("checkBlack").checked)
    colorFondo = "black";
    if(document.getElementById("checkRed").checked)
    colorFondo = "red";
    if(document.getElementById("checkGreen").checked)
    colorFondo = "green";

    document.body.style.backgroundColor= colorFondo;
}




console.log(checkBlack);

