

console.log("Sistema EBAC de Registro de Alumnos");

var Registro = [
    {nombre: "Ariosto Bandala", edad: "28", Zonaresidencia: "Merida", Nombreprograma: "IT Start", correoelectronico: "ariostobandala@gmail.com"},
    {nombre: "Maria Hubert", edad: "34", Zonaresidencia: "EdoMex", Nombreprograma: "IT Desarrollo back end", correoelectronico: "maria@ebac.mx"},
    {nombre: "Daniel Faraday", edad: "31", Zonaresidencia: "Queretaro", Nombreprograma: "IT Python", correoelectronico: "dfaraday@ebac.mx"},
    {nombre: "Rubie Mendoza", edad: "26", Zonaresidencia: "Tijuana", Nombreprograma: "IT Desarrollo front end", correoelectronico: "lamerarubiem@gmail.com"},
    {nombre: "John Locke", edad: "44", Zonaresidencia: "Cancun", Nombreprograma: "Analisis de datos", correoelectronico: "Johnlocke@ebac.mx"},
    ];


//funcion Incluir (creo)
function agregarAlumno(){

var nombre = prompt("Ingresa el nombre del nuevo alumno");
var Zonaresidencia = prompt("Ingresa la zona de residencia del Alumno");
var edad = prompt("Ingresar edad");
var Nombreprograma = prompt("Programa a estudiar");
var correoelectronico = prompt("Correo electronico"); 

var nuevoAlumno = {nombre: nombre,edad: edad, Zonaresidencia: Zonaresidencia, Nombreprograma: Nombreprograma, correoelectronico: correoelectronico};

Registro.push(nuevoAlumno);

}

// Funcion consultar
function consultarRegistros(){
    for(var i = 0; i < Registro.length; i++){
        console.log("Nombre: " + Registro[i].nombre);
        console.log("Edad: " + Registro[i].edad);
        console.log("Zona de Residencia: " + Registro[i].Zonaresidencia);
        console.log("Programa de estudio: " + Registro[i].Nombreprograma);
        console.log("Correo Electronico: " + Registro[i].correoelectronico);
    };
}

function EliminarAlumno () {

    var nombreaEliminar = prompt("Ingresa el nombre del alumno a eliminar");
    Registro = Registro.filter(alumno => alumno.nombre !== nombreaEliminar);

}


do {

var opcion = prompt("Seleccione una opción: \n1. Agregar registro \n2. Consultar registro \n3 Eliminar registro \n4 Salir")
/* Esta linea nos deplegará un menu de opciones, servirá para obtener un input del usuario y mostrar la información solicitada */

if (opcion === "1"){
    agregarAlumno();
} else if (opcion === "2"){
    consultarRegistros();
} else if(opcion === "3"){
    EliminarAlumno()
} else if ("Salida"){
    alert("Salir del sistema");
} else{
    alert("Opción inválida, elige otra");
}

var continuar = prompt ("Desea realiazar otra accion? (S/N)")

} while (continuar === "s");





/* Este If nos mostrará alertas a los inputs que el usuario elija en el codigo anterior */ 



/* Como su nombre lo indica este es el registro, esta contenido dentro de la variable Registro y por lo tanto almacena toda la información sobre los estudiantes inscritos */


/* Por último este ciclo for nos servirá para desplegar de una forma ordenada todos los registros de los alumnos mostrando su nombre, edad, zona de residencia, programa de estudio y correo electronico */

