const textArea = document.querySelector("#textarea");
const mensaje = document.querySelector("#mostrar-texto");
window.onload = function(){
document.getElementById("textarea").focus();
}    
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function botonEncriptar(){
    const textoEncriptado = textArea.value
    document.getElementById("img-mensaje").style.display= "none";
    document.getElementById("boton-copiar").style.display= "block";
}

/*
 const textoEncriptado = encriptar(textArea)
    mensaje.value = textoEncriptado;
*/


/*
function encriptar(stringLetras){
    let datos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        stringLetras = stringLetras.toLowerCase()

        for(let i = 0; i < datos.length; i++){
            if(stringLetras.includes(datos[i][0])){
                stringLetras = stringLetras.replaceAll(datos[i][0],datos[i][1])
            }
        }
        return stringLetras
}*/
function botonDesencriptar(){
    document.getElementById("img-mensaje").style.display= "none"
    document.getElementById("boton-copiar").style.display= "block";
    
}
function desencriptar(stringLetras){
    let datos = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    stringLetras = stringLetras.toLowerCase()
}