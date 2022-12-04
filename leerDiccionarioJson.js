

// Dentro de la función tenemos acceso a diccionario
async function leeDiccionario(){
    const respuesta = await fetch('https://raw.githubusercontent.com/fran-dawbaza/spanish-dictionary/main/diccionario.json');
    const diccionario = await respuesta.json();
    console.log(diccionario);
    console.log("¿patata está en el diccionario? ", diccionario.includes('patata'));
}

leeDiccionario();


