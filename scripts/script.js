const inputClave1 = document.getElementById('input-clave-1');
const generated = document.getElementById('input-result-1');

const inputClave2 = document.getElementById('input-clave-2');
const descifrated = document.getElementById('input-result-2');

const generate = document.getElementById('generate');
const descifrate = document.getElementById('descifrate');

const soundGenerate = document.getElementById('sound-generate');
const soundDescifrate = document.getElementById('sound-descifrate');

const mainMachine = document.querySelector('.main-machine');

generate.addEventListener("mouseup", (event) => {
    if (event.type === "mouseup" || (event.type === "keyup" && event.key === "Enter")) {

        let str = inputClave1.value;
        let result = rot13(str);
        soundGenerate.play();

        generated.value = `${ result }`;
    }
});

descifrate.addEventListener("mouseup", (event) => {
    if (event.type === "mouseup" || (event.type === "keyup" && event.key === "Enter")) {
    
        let str = inputClave2.value;
        let result = rot31(str);
        soundDescifrate.play();

        descifrated.value = `${ result }`;
    }
});

// Simulación de clicks con Intro
inputClave1.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        let mouseupEvent = new Event('mouseup');
        generate.dispatchEvent(mouseupEvent);
    }
});

inputClave2.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        let mouseupEvent = new Event('mouseup');
        descifrate.dispatchEvent(mouseupEvent)
    }
});


mainMachine.addEventListener('contextmenu', function (event) {
    event.preventDefault();
}); // burbujeo, destino image