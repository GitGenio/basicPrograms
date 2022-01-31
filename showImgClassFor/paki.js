
// se declara antes para que la lea el constructor
var images = [];   // este es un como un diccionario en javascript
images["Cauchin"] = "./img/cow.png";  // join one word to another thing
images["Pocacho"] = "./img/chicken.png";
images["Tocinauro"] = "./img/pig.png";

/* var images  //  funciona igual que el diccionario de arriba
{
    Cauchin = "./img/cow.png",
    Pocacho = "./img/chicken.png",
    Tocinauro = "./img/pig.png"
}; */
// ---/--/--/--/----/--/---/-----/--/--/----/-----/--/------/----/--///-----/--/-----------------------

/*var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pocacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);

pokacho.showImage();
tocinauro.showImage();
cauchin.showImage();*/

var coleccion =[]; // se puede crear el objeto directamente al array
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pocacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for(elemento of coleccion) //recorre todos los elementos del array
{
    elemento.showImage();
}






