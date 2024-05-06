let pets = [];
const form = document.getElementById("form");


function findId(event) {
    return event.target.parentElement.parentElement.id;
}

function deletePet(event) {
    event.target.parentElement.parentElement.remove()
    const id = findId(event);
    pets = pets.filter(pet => pet.id !== parseInt(id));
    console.log(pets)
}


function createPetStringTemplate(pet) {
    return `
    <div class="card" id='${pet.id}' style="width: 18rem;">
        <img src=""
            class="card-img-top" id='${pet.foto} alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title id='${pet.nombre}'</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">especie id='${pet.especie}'</li>
            <li class="list-group-item">raza id='${pet.raza}'</li>
            <li class="list-group-item">edad id='${pet.edad}'</li>
            <li class="list-group-item">peso id='${pet.peso}'</li>
            <li class="list-group-item">estado id='${pet.estado}'</li>
            <li class="list-group-item">nombre del propietario id='${pet.nombrePropietario}'</li>
            <li class="list-group-item">documento del propietario id='${pet.documento}'</li>
            <li class="list-group-item">telefono del propietario id='${pet.telefono}'</li>
            <li class="list-group-item">correo del propietario id='${pet.correo}'</li>
        </ul>
        <div class="card-body">
            <button class="btn btn-primary">Actualizar</button>
            <button onclick="deletePet(event)" class="btn btn-primary">Borrar</button>
        </div>
    </div>
    `
}


form.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(form);
    const pet = {
        id: pets.length+1,
        foto: formData.get("foto"),
        nombre: formData.get("nombre"),
        especie: formData.get("especie"),
        raza: formData.get("raza"),
        edad: formData.get("edad"),
        peso: formData.get("peso"),
        estado: formData.get("estado"),
        nombrePropietario: formData.get("nombrePropietario"),
        documento: formData.get("documento"),
        telefono: formData.get("telefono"),
        correo: formData.get("correo")
    }
    pets.push(pet)
    const petList = document.getElementById("pet-list");
    petList.innerHTML+= createPetStringTemplate(pet);
    
    form.reset();
});


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
// ];

















