// se ha cargado previamente el diccionario, en la variable diccionario lo tengo



async function leeDiccionario(){
    const respuesta = await fetch('https://raw.githubusercontent.com/fran-dawbaza/spanish-dictionary/main/diccionario.json');
    const datos = await respuesta.json();
    return datos;
}

async ({
    const diccionario = await leeDiccionario();

console.log(diccionario);
})()

