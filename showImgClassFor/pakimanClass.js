class Pakiman
{
    constructor(nombre, vida,ataque)
    {
        this.name = nombre;
        this.life = vida ;
        this.atack = ataque ;
        this.type = "soil";

        
        this.imagen = new Image();
        this.imagen.src = images[this.name];
    }
    hablar() // inside class don't put word function
    {
        alert(this.name);
    }
    showImage()
    {
        document.write("<p>");
        document.body.appendChild(this.imagen);
        document.write("<strong>" + this.name + "</strong><br>");
        document.write(" <br> Vida " + this.life);
        document.write("<br> Ataque " + this.atack);
        document.write("</p>"+"<hr>");
    }
}