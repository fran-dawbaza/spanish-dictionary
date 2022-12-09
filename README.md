# spanish-dictionary
Diccionario español, array javascript

Tenemos diferentes ejemplos para acceder al diccionario:
- Usando módulos ES (leerDiccionarioConModulos.html y leerDiccionarioConModulos.js que lee diccionario.js).
- Sin usar módulos, directamente declarando previamente el array (leerDiccionarioConScriptSrc.html y leerDiccionarioConScriptSrc.js que lee diccionarioSinExport.js).
- Haciendo una petición con fetch y leyendo un archivo JSON (leerDiccionarioJson.html y leerDiccionarioJson.js que leen diccionario.json).

Una vez leído diccionario, podemos usar los métodos de los arrays para buscar palabras, por ejemplo:
diccionario.includes('palabra') devolverá true cuando 'palabra' esté en el array diccionario.

En comparaHasIncludesForOf.js tenemos una comparación para búsquedas en Array y en Set, sería buena idea transformar el diccionario en un objeto de tipo Set para obtener mejor eficiencia en búsquedas.

También sería adecuado hacer búsquedas sin tener en cuenta tíldes cuando sea necesario, para ello tendríamos que transformar el diccionario previamente, ejemplo:
code
// Elimina los diacríticos de un texto excepto si es una "ñ" (ES6)
//
function eliminarDiacriticosEs(texto) {
    return texto
           .normalize('NFD')
           .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
           .normalize();
}
/code
