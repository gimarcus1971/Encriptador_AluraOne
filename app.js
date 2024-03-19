//DECLARACION DE CONSTANTES//
const texto_ingresado = document.getElementById("texto_ingresado");

const mensajeFinal = document.getElementById("mensajeFinal");
const texto_Ingresa = document.getElementById("texto_Ingresa");
const muñeco = document.getElementById("muñeco");

const s2 = document.getElementById("s2");

const button_E = document.getElementById("button_E");
const button_D = document.getElementById("button_D");
const button_C = document.getElementById("button_C");


let reemplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]

//BOTON ENCRIPTAR//
button_E.addEventListener("click", () => {
    const texto = texto_ingresado.value.toLowerCase()

    function encriptar(nuevo_texto) {
        for (let i = 0; i < reemplazar.length; i++){
            if (nuevo_texto.includes(reemplazar[i][0])){
                nuevo_texto = nuevo_texto.replaceAll(reemplazar[i][0], reemplazar[i][1]);
            };
        };
        return nuevo_texto;
    }

    const textoEncriptado = encriptar(texto);
    mensajeFinal.innerHTML = textoEncriptado;
    texto_ingresado.value = "";
    muñeco.style.display = "none";
    texto_ingresado.style.display = "block";
    texto_Ingresa.style.display = "none";
    button_C.style.display = "block"
    s2.classList.add("ajustado");
    mensajeFinal.classList.add("ajustado");
})

//BOTON DESENCRIPTAR//
button_D.addEventListener("click", () => {
    const texto = texto_ingresado.value.toLowerCase()

    function desencriptar(nuevo_texto) {
        for (let i = 0; i < reemplazar.length; i++){
            if (nuevo_texto.includes(reemplazar[i][1])){
                nuevo_texto = nuevo_texto.replaceAll(reemplazar[i][1], reemplazar[i][0]);
            };
        };
        return nuevo_texto;
    }

    const textoDesencriptado = desencriptar(texto);
    mensajeFinal.innerHTML = textoDesencriptado;
    texto_ingresado.value = "";
    muñeco.style.display = "none";
    texto_ingresado.style.display = "block";
    texto_Ingresa.style.display = "none";
    button_C.style.display = "block"
    s2.classList.add("ajustado");
    mensajeFinal.classList.add("ajustado");
})


//BOTON COPIAR//
button_C.addEventListener("click", () => {
    var contenido = document.querySelector(".mensajeFinal.ajustado").textContent;

    navigator.clipboard.writeText(contenido);

    mensajeFinal.innerHTML = "Ningún mensaje fue encontrado";
    texto_ingresado.value = "";
    muñeco.style.display = "block";
    texto_ingresado.style.display = "block";
    texto_Ingresa.style.display = "block";
    button_C.style.display = "none"
    s2.classList.remove("ajustado");
    mensajeFinal.classList.remove("ajustado");
})




