# Cambios importantes realizados a la aplicación:

## borrarDato

Debido a la incapacidad de la aplicación original de borrar datos usando el boton "Borrar" que aparece en el primer menu antes de introducir dato alguno, se ha 
alterado la funcion borrarDato para que acepte nombre.value como "id", y se ha adaptado el DOM para facilitar el uso de esta herramienta al usuario.
Lineas añadidas:

### borrarDato.js
- console.log(id);
- id=parseInt(id);

### index.html
- 	<th><label name="labelNombre" for="nombre">Introduce tu nombre o tu ID</label></th>

### mostrarDatos.js
- campoId = document.createElement("td"), // creo una celda para la clave
- campoId.innerHTML ="id: "+ registro.id; //Escribimos la ID para poder borrarla desde fuera

## Añadido actualizarDato.js. 