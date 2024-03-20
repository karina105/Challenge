const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.campo-mensaje');

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

// Creación de la funciones para el uso del boton encriptar

function btnEncriptar() {
    const texto = textArea.value.trim()

    if (!minusculasySinAcentos(texto)) {
        return;
    }

    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = '';
    mensaje.style.backgroundImage = "none";
}

// Creación de la función para encriptar el texto que se va a usar para realizar la tarea

function encriptar(stringEncriptado) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufar']];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}

// Creación de la funciones para el uso del boton desencriptar 

function btnDesencriptar() {
    const texto = textArea.value.trim();

    if (!minusculasySinAcentos(texto)) {
        return;
    }

    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = '';
}

// Creación de la función para desencriptar el texto que se va a usar para realizar la tarea

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufar']];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado;
}

// Función que verifica si el texto está cumpliendo con las condiciones establecidas
function minusculasySinAcentos(texto) {
    const errorMessage = document.getElementById('error-message');

    if (!/^[a-z\s]+$/.test(texto)) {
        errorMessage.textContent = "Error: Solo letras minúsculas y sin acentos.";
        return false;
    }

    errorMessage.textContent = ''; // Se limpia el mensaje de error si no hay errores
    return true;
}



// Funcion para el botton copiar texto de campo mensaje

function btnCopiar() {
    const copiarTexto = document.querySelector('.campo-mensaje');
    navigator.clipboard.writeText(copiarTexto.value);
    const buttonCopy = document.querySelector('.botton-copiar');
    buttonCopy.textContent = "¡Copiado!";
    setTimeout(() => {
        buttonCopy.textContent = "Copiar"
    }, 2500);

    // Función para limpiar el campo de mensaje después de copiar el texto 
    copiarTexto.value = '';
}
