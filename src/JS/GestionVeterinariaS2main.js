//-------------GESTION VETERINARIA-------------->

// Descripción del Proyecto:


// Desarrollar un sistema de gestión para una veterinaria que permita administrar la información de
// las mascotas. El sistema deberá permitir realizar operaciones CRUD (Crear, Leer, Actualizar,
// Eliminar) para cada una de estas entidades.
//-------------------------------------------------------------------------------------------------//

// 1) El sistema debe tener como mínimo 10 mascotas previamente registradas para poder practicar.

//-------------------------------------------------------------------------------------------------//
// 2) Recuerda que el uso de comentarios NO es opcional, debes utilizarlos, pero tampoco abusar de
// ellos.
//-------------------------------------------------------------------------------------------------//

// 3) Importante el uso de funciones para modularizar el código y hacerlo más limpio.

// Funcionalidades Principales:

// 1. Registrar una nueva mascota (nombre, especie, raza, edad (calcular la edad de acuerdo a la
// fecha de nacimiento), peso, estado (estable, critico), nombre propietario, documento del
// dueño, teléfono de contacto, correo del propietario,).
// 2. Ver la lista de todas las mascotas registradas, en dicho array.
// 3. Ver una lista de todos los dueños
// 4. Buscar una mascota por el nombre
// 5. Filtrar y luego mostrar a todas las mascotas pertenecientes a un mismo dueño
// 6. Actualizar la información de una mascota existente.
// 7. Eliminar una mascota del array.
// 8. Crear un menú que me permita controlar cada una de estas acciones

// Array 10 mascotas para almacenar
// const mascotas = [
//     {
//         nombre: "Luna",
//         especie: "Perro",
//         raza: "Labrador",
//         edad: calcularEdad("2018-05-10"),
//         peso: 20,
//         estado: "estable",
//         nombrePropietario: "Juan",
//         documentoPropietario: "123456789",
//         telefonoPropietario: "987654321",
//         correoPropietario: "juan@example.com"
//     },
//     {
//         nombre: "Simba",
//         especie: "Gato",
//         raza: "Siamés",
//         edad: calcularEdad("2019-07-20"),
//         peso: 5,
//         estado: "estable",
//         nombrePropietario: "María",
//         documentoPropietario: "987654321",
//         telefonoPropietario: "123456789",
//         correoPropietario: "maria@example.com"
//     },
    
//     {
//         nombre: "Nala",
//         especie: "Gato",
//         raza: "Persa",
//         edad: calcularEdad("2020-02-15"),
//         peso: 4,
//         estado: "estable",
//         nombrePropietario: "Carlos",
//         documentoPropietario: "456789123",
//         telefonoPropietario: "987123654",
//         correoPropietario: "carlos@example.com"
//     },
//     {
//         nombre: "Max",
//         especie: "Perro",
//         raza: "Pug",
//         edad: calcularEdad("2017-12-01"),
//         peso: 10,
//         estado: "critico",
//         nombrePropietario: "Milena",
//         documentoPropietario: "1037632561",
//         telefonoPropietario: "3146396952",
//         correoPropietario: "milena029427@gmail.com"
//     },
//     {
//         nombre: "Coco",
//         especie: "Perro",
//         raza: "Chihuahua",
//         edad: calcularEdad("2021-01-10"),
//         peso: 3,
//         estado: "estable",
//         nombrePropietario: "Pedro",
//         documentoPropietario: "987654123",
//         telefonoPropietario: "123987654",
//         correoPropietario: "pedro@example.com"
//     },
//     {
//         nombre: "Molly",
//         especie: "Gato",
//         raza: "Maine Coon",
//         edad: calcularEdad("2019-09-05"),
//         peso: 7,
//         estado: "estable",
//         nombrePropietario: "Ana",
//         documentoPropietario: "654123789",
//         telefonoPropietario: "321654987",
//         correoPropietario: "ana@example.com"
//     },
//     {
//         nombre: "Rocky",
//         especie: "Perro",
//         raza: "Bulldog",
//         edad: calcularEdad("2015-03-20"),
//         peso: 25,
//         estado: "estable",
//         nombrePropietario: "Sofía",
//         documentoPropietario: "321987654",
//         telefonoPropietario: "789321654",
//         correoPropietario: "sofia@example.com"
//     },
//     {
//         nombre: "Sasha",
//         especie: "Gato",
//         raza: "Bengalí",
//         edad: calcularEdad("2020-08-10"),
//         peso: 6,
//         estado: "estable",
//         nombrePropietario: "David",
//         documentoPropietario: "456789321",
//         telefonoPropietario: "987321654",
//         correoPropietario: "david@example.com"
//     },
//     {
//         nombre: "Bella",
//         especie: "Perro",
//         raza: "Golden Retriever",
//         edad: calcularEdad("2018-11-25"),
//         peso: 30,
//         estado: "estable",
//         nombrePropietario: "Milena",
//         documentoPropietario: "1037632561",
//         telefonoPropietario: "3146396952",
//         correoPropietario: "milena029427@gmail.com"
//     },
//     {
//         nombre: "Toby",
//         especie: "Perro",
//         raza: "Husky Siberiano",
//         edad: calcularEdad("2016-06-15"),
//         peso: 22,
//         estado: "estable",
//         nombrePropietario: "Diego",
//         documentoPropietario: "321456987",
//         telefonoPropietario: "987654123",
//         correoPropietario: "diego@example.com"
//     }
// ];

// // Función para calcular la edad de la mascota
// function calcularEdad(fechaNacimiento) {
//     const hoy = new Date()
//     const nacimiento = new Date(fechaNacimiento);
//     const edadMilisegundos = hoy - nacimiento;
//     const edadAños = Math.floor(edadMilisegundos / (1000 * 60 * 60 * 24 * 365))
//     return edadAños
// }

// // Función para registrar una nueva mascota
// function registrarMascota() {
//     const nombre = prompt("Ingrese el nombre de la mascota:")
//     const especie = prompt("Ingrese la especie de la mascota:")
//     const raza = prompt("Ingrese la raza de la mascota:")
//     const fechaNacimiento = prompt("Ingrese la fecha de nacimiento de la mascota (AAAA-MM-DD):")
//     const peso = parseFloat(prompt("Ingrese el peso de la mascota en kg:"))
//     const estado = prompt("Ingrese el estado de la mascota (estable, critico):")
//     const nombrePropietario = prompt("Ingrese el nombre del propietario:")
//     const documentoPropietario = prompt("Ingrese el documento del propietario:")
//     const telefonoPropietario = prompt("Ingrese el teléfono del propietario:")
//     const correoPropietario = prompt("Ingrese el correo del propietario:")

//     const nuevaMascota = {
//         nombre,
//         especie,
//         raza,
//         edad: calcularEdad(fechaNacimiento),
//         peso,
//         estado,
//         nombrePropietario,
//         documentoPropietario,
//         telefonoPropietario,
//         correoPropietario
//     };
//     mascotas.push(nuevaMascota)
//     console.log("¡Mascota registrada con éxito!")
// }

// // Función para ver la lista de todas las mascotas registradas
// function verTodasLasMascotas() {
//     return mascotas
// }

// // Función para ver una lista de todos los dueños
// function verTodosLosDueños() {
//     const propietarios = []
//     for (const mascota of mascotas) {
//         if (!propietarios.includes(mascota.nombrePropietario)) {
//             propietarios.push(mascota.nombrePropietario)
//         }
//     }
//     return propietarios
// }

// // Función para buscar la mascota por el nombre
// function buscarMascotaPorNombre(nombre) {
//     return mascotas.find(mascota => mascota.nombre === nombre)
// }

// // Función para filtrar y luego mostrar todas las mascotas pertenecientes al mismo dueño
// function filtrarMascotasPorDueño(nombrePropietario) {
//     return mascotas.filter(mascota => mascota.nombrePropietario === nombrePropietario)
// }

// // Función para actualizar la información de una mascota existente
// function actualizarInformacionDeMascota(nombre) {
//     const mascota = buscarMascotaPorNombre(nombre)
//     if (mascota) {
//         const nuevaRaza = prompt("Ingrese la nueva raza de la mascota:")
//         const nuevoPeso = parseFloat(prompt("Ingrese el nuevo peso de la mascota en kg:"))
//         const nuevoEstado = prompt("Ingrese el nuevo estado de la mascota (estable, critico):")

//         mascota.raza = nuevaRaza
//         mascota.peso = nuevoPeso
//         mascota.estado = nuevoEstado

//         console.log("¡Información de la mascota actualizada con éxito!")
//     } else {
//         console.log("No se encontró ninguna mascota con ese nombre.")
//     }
// }

// // Función para eliminar una mascota del array
// function eliminarMascota(nombre) {
//     const indice = mascotas.findIndex(mascota => mascota.nombre === nombre)
//     if (indice !== -1) {
//         mascotas.splice(indice, 1)
//         console.log("¡Mascota eliminada con éxito!")
//     } else {
//         console.log("No se encontró ninguna mascota con ese nombre.")
//     }
// }


// //----------------------------------Ejecutar el menú--------------------------->


// // Función para mostrar el menú
// function mostrarMenu() {
//     console.log("(👉ﾟヮﾟ)👉=== MENÚ ===👈(ﾟヮﾟ👈)")
//     console.log("1. Registrar una nueva mascota")
//     console.log("2. Ver la lista de todas las mascotas registradas")
//     console.log("3. Ver una lista de todos los dueños")
//     console.log("4. Buscar una mascota por el nombre")
//     console.log("5. Filtrar y luego mostrar a todas las mascotas pertenecientes a un mismo dueño")
//     console.log("6. Actualizar la información de una mascota existente")
//     console.log("7. Eliminar una mascota del array")
//     console.log("8. Salir")
// }

// let opcion;
// mostrarMenu()                     // Mostrar el menú por primera vez
// do {
//     opcion = parseInt(prompt("Ingrese la opción deseada (^._.^)ﾉ:"))
//     gestionMenu(opcion)
// } while (opcion !== 8)

// //---------------------------------------Ejecutar el menú------------------------------>
// function gestionMenu(opcion) {
//     switch (opcion) {
//         case 1:
//             registrarMascota()
//             break;
//         case 2:
//             console.log(verTodasLasMascotas())
//             break;
//         case 3:
//             console.log(verTodosLosDueños())
//             break;
//         case 4:
//             const nombreMascota = prompt("Ingrese el nombre de la mascota a buscar:")
//             console.log(buscarMascotaPorNombre(nombreMascota))
//             break;
//         case 5:
//             const nombrePropietario = prompt("Ingrese el nombre del propietario:")
//             console.log(filtrarMascotasPorDueño(nombrePropietario))
//             break;
//         case 6:
//             const nombreMascotaActualizar = prompt("Ingrese el nombre de la mascota a actualizar:")
//             actualizarInformacionDeMascota(nombreMascotaActualizar)
//             break;
//         case 7:
//             const nombreMascotaEliminar = prompt("Ingrese el nombre de la mascota a eliminar:")
//             eliminarMascota(nombreMascotaEliminar)
//             break;
//         case 8:
//             console.log("...FIN DE LA GESTIÓN...")
//             break;
//         default:
//             console.log("Opción inválida. Por favor, ingrese un número del 1 al 8.")
//     }
// }








