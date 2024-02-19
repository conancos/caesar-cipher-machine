function rot13(str) {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        
        const letra = str[ i ].toUpperCase(); /* Convierto todo en mayúsculas */
        const code = letra.charCodeAt(0) ;  // El código de la letra en cuestión
        
        if (letra >= "A" && letra <= "Z") {
            let letraDecodificada = code + 13;  // Suma a todos 13.

            if (letraDecodificada > 90) { // 90 representa la Z.
                letraDecodificada -= 26;    // Resto los 13 que sumé a todos,
            }                             // mas -13 porque es a partir de la M.

            newStr += String.fromCharCode(letraDecodificada);//ascii a letra y sumo
        } else {
            newStr += letra; // añado el espacio, !, ?, ó el punto.
        }
    }
    console.log(newStr)
    return newStr;
}
/* const encryptedText = rot13("SERR PBQR PNZC");
console.log(encryptedText); Comento la llamada a consola, por la app */

/* Estaría bien hacer el código al revés para maquetarlo en 1 app. => Hecho! */
function rot31(str) {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        const letra = str[ i ].toUpperCase();
        const code = letra.charCodeAt(0);

        if (letra >= "A" && letra <= "Z") {
            let letraDecodificada = code - 13; // Resto a todas 13.
            if (letraDecodificada < 65) {
                letraDecodificada += 26;
            }

            newStr += String.fromCharCode(letraDecodificada);
        } else {
            newStr += letra;
        }
    }
    console.log(newStr);
    return newStr;
}
/* const decrypted = rot13("Free Code Camp") */