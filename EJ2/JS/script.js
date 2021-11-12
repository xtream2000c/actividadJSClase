
var cadResultado = '';


function inicializar(){

    var pantalla = document.getElementById("resultado");

    document.getElementById("cero").onclick =function(event) { cadResultado += 0+ ""; pantalla.innerHTML=cadResultado;};
    document.getElementById("uno").onclick =function(event) { cadResultado += 1+ ""; pantalla.innerHTML=cadResultado;};
    document.getElementById("dos").onclick =function(event) { cadResultado += 2+ "" ; pantalla.innerHTML=cadResultado;};
    document.getElementById("tres").onclick =function(event) { cadResultado += 3+ ""; pantalla.innerHTML=cadResultado;};
    document.getElementById("cuatro").onclick =function(event) { cadResultado += 4+ ""; pantalla.innerHTML=cadResultado;};
    document.getElementById("cinco").onclick =function(event) { cadResultado += 5+ ""; pantalla.innerHTML=cadResultado;};
    document.getElementById("seis").onclick =function(event) { cadResultado += 6+ ""; pantalla.innerHTML=cadResultado;};
    document.getElementById("siete").onclick =function(event) { cadResultado += 7+ ""; pantalla.innerHTML=cadResultado;};
    document.getElementById("ocho").onclick =function(event) { cadResultado += 8+ ""; pantalla.innerHTML=cadResultado;};
    document.getElementById("nueve").onclick =function(event) { cadResultado += 9+ ""; pantalla.innerHTML=cadResultado;};

    document.getElementById("suma").onclick =function(event) { cadResultado += " + "; pantalla.innerHTML=cadResultado;};
    document.getElementById("resta").onclick =function(event) { cadResultado += " - "; pantalla.innerHTML=cadResultado;};
    document.getElementById("multiplicacion").onclick =function(event) { cadResultado += " * "; pantalla.innerHTML=cadResultado;};
    document.getElementById("division").onclick =function(event) { cadResultado += " / "; pantalla.innerHTML=cadResultado;};

    document.getElementById("coma").onclick =function(event) { cadResultado += "."};
    document.getElementById("igual").onclick = function(event) {pantalla.innerHTML = eval(cadResultado); cadResultado=''};
 
}
