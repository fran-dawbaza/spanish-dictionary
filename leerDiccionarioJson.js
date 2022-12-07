

// Dentro de la función main tenemos acceso al array diccionario, puedes hacer tu aplicación dentro de esta función o usar un callback
async function leeDiccionario(callBack){
    // También podemos usar la ruta https://cdn.jsdelivr.net/gh/fran-dawbaza/spanish-dictionary/diccionario.json
    const respuesta = await fetch('https://raw.githubusercontent.com/fran-dawbaza/spanish-dictionary/main/diccionario.json');
    const diccionario = await respuesta.json();
    // console.log(diccionario);
    // console.log("¿patata está en el diccionario? ", diccionario.includes('patata'));
    if (callBack && typeof callBack === 'function')
        callBack(diccionario);
}

leeDiccionario();

/* 
o bien

function miPrograma(diccionario){
  //...
}

leerDiccionario(miPrograma);

*/
