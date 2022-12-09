/*
Vamos a comparar tiempos de ejecución en la realización de 
búsquedas en el diccionario. Compararemos el uso del método
includes con una búsqueda usando un bucle for of
*/
import {diccionario} from "https://cdn.jsdelivr.net/gh/fran-dawbaza/spanish-dictionary/diccionario.js";


/* Devuelve un array de tamaño "cantidad", las palabras
incluidas en el array devuelto están en el array "palabras"
con la probabilidad "porcentajeIncluidas"
*/
function palabrasAleatorias(palabras,cantidad,porcentajeIncluidas=1){
    const longitud = palabras.length;
    const resultado=[];
    for (let i=0;i<cantidad;i++) {
        let posicion = Math.floor(longitud*Math.random());
        // Selecciono una palabra aleatoria
        let palabra = palabras[posicion];

        if (porcentajeIncluidas < Math.random()){
            // Al añadir 6k a una palabra me aseguro de que
            // no esté en el diccionario
            palabra += '6k'; 
        }
        resultado.push(palabra);
    }
    return resultado;
}

/* Utiliza el método includes para buscar todas las palabras en
el diccionario.
Devuelve un objeto con:
- retardo: el tiempo de búsqueda de todas las palabras
incluídas en el diccionario
- contador: número de palabras incluídas en el diccionario
*/

function usandoIncludes(diccionario,palabras){
    let contador=0;
    let tiempoInicial = Date.now();
    for (const palabra of palabras) {
        if (diccionario.includes(palabra))
            contador++;
    }
    return {
        retardo: Date.now() - tiempoInicial,
        contador: contador
    };
}

/* Utiliza el método has para buscar todas las palabras en
el diccionario, que debe ser de tipo Set
Devuelve un objeto con:
- retardo: el tiempo de búsqueda de todas las palabras
incluídas en el diccionario
- contador: número de palabras incluídas en el diccionario
*/

function usandoHas(diccionario,palabras){
    let contador=0;
    let tiempoInicial = Date.now();
    for (const palabra of palabras) {
        if (diccionario.has(palabra))
            contador++;
    }
    return {
        retardo: Date.now() - tiempoInicial,
        contador: contador
    };
}


/* Utiliza un bucle for of para buscar todas las palabras en
el diccionario.
Devuelve un objeto con:
- retardo: el tiempo de búsqueda de todas las palabras
incluídas en el diccionario
- contador: número de palabras incluídas en el diccionario
*/
function usandoForOf(diccionario,palabras){
    let contador=0;
    let tiempoInicial = Date.now();
    for (const palabra of palabras) {
        for (const entrada of diccionario){
            if (entrada === palabra) {
                contador++;
                break;
            }
        }
    }
    return {
        retardo: Date.now() - tiempoInicial,
        contador: contador
    };
}

//const palabrasTerminadasEnR = diccionario.filter(p=>p[p.length-1]==='r');

let diezMilPalabras = palabrasAleatorias(diccionario,10000,1);
//console.log(dosMilPalabras);
console.log('Usando includes 100% incluidas: ', usandoIncludes(diccionario,diezMilPalabras));
console.log('Usando has 100% incluidas: ', usandoHas(new Set(diccionario),diezMilPalabras));
console.log('Usando for ... of 100% incluidas: ', usandoForOf(diccionario,diezMilPalabras));

diezMilPalabras = palabrasAleatorias(diccionario,10000,0.5);
//console.log(dosMilPalabras);
console.log('Usando includes 50% incluidas: ', usandoIncludes(diccionario,diezMilPalabras));
console.log('Usando has 50% incluidas: ', usandoHas(new Set(diccionario),diezMilPalabras));
console.log('Usando for ... of 50% incluidas: ', usandoForOf(diccionario,diezMilPalabras));

diezMilPalabras = palabrasAleatorias(diccionario,10000,0);
//console.log(dosMilPalabras);
console.log('Usando includes 0% incluidas: ', usandoIncludes(diccionario,diezMilPalabras));
console.log('Usando has 0% incluidas: ', usandoHas(new Set(diccionario),diezMilPalabras));
console.log('Usando for ... of 0% incluidas: ', usandoForOf(diccionario,diezMilPalabras));

// Conclusión
console.log(`
Usar un for ... of para realizar búsquedas de palabras 
que sí están en el diccionario es más eficiente que usar 
includes. Pero solo en ese caso. Cuando puede haber palabras
que buscamos que no están en el diccionario o que no sabemos 
si estarán (que es lo normal) entonces es más eficiente usar
includes`);
console.log(`
Por otra parte, si se trata de un array de tipo Set la
velocidad de búsqueda se dispara con el método has, siendo
éste mucho más eficiente en cualquier caso. Merece la pena
convertir previamente en array en Set`)