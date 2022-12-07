# spanish-dictionary
Diccionario español, array javascript

Tenemos diferentes ejemplos para acceder al diccionario:
- Usando módulos ES (leerDiccionarioConModulos.html y leerDiccionarioConModulos.js que lee diccionario.js).
- Sin usar módulos, directamente declarando previamente el array (leerDiccionarioConScriptSrc.html y leerDiccionarioConScriptSrc.js que lee diccionarioSinExport.js).
- Haciendo una petición con fetch y leyendo un archivo JSON (leerDiccionarioJson.html y leerDiccionarioJson.js que leen diccionario.json).

Una vez leído diccionario, podemos usar los métodos de los arrays para buscar palabras, por ejemplo:
diccionario.includes('palabra') devolverá true cuando 'palabra' esté en el array diccionario.
