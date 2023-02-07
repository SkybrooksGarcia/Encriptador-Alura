//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"
const textArea = document.querySelector("#textarea");
const resultado = document.querySelector("#mostrar-texto");
//BOTON ENCRIPTAR//
function botonEncriptar(){
    let mostrarTexto=encriptar(textArea.value);
    resultado.value=mostrarTexto;
    textArea.value="";
    document.getElementById("img-mensaje").style.display="none";
    document.getElementById("boton-copiar").style.display="block";
    document.getElementById("mostrar-texto").style.backgroundImage="none";
}

function encriptar(stringLetras){
    let datos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        stringLetras = stringLetras.toLowerCase()

        for(let i = 0; i < datos.length; i++){
            if(stringLetras.includes(datos[i][0])){
                stringLetras = stringLetras.replaceAll(datos[i][0],datos[i][1])
            }
        }
        return stringLetras
}
//BOTON DESENCRIPTAR//
function botonDesencriptar(){
    let mostrarTexto=desencriptar(textArea.value);
    resultado.value=mostrarTexto;
    textArea.value="";
    document.getElementById("img-mensaje").style.display= "none"
    document.getElementById("boton-copiar").style.display= "block";
    document.getElementById("mostrar-texto").style.backgroundImage="none";
}
function desencriptar(stringLetras){
    let datos = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    stringLetras = stringLetras.toLowerCase()

    for(let i = 0; i < datos.length; i++){
        if(stringLetras.includes(datos[i][0])){
            stringLetras = stringLetras.replaceAll(datos[i][0],datos[i][1])
        }
    }
    return stringLetras
}
//BOTON COPIAR//
function botonCopiar(){
        var copiarTexto = resultado;
        copiarTexto.select();
        copiarTexto.setSelectionRange(0, 99999); 
        navigator.clipboard.writeText(copiarTexto.value);
        alert("Copiado Exitoso. ☑");
      
}