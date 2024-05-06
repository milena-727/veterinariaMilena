
const section = document.getElementById("section")
const btnRegistrar = document.getElementById("registrar")


// <!--FORMULARIO PARA REGISTRAR UNA NUEVA MASCOTA-->
section.innerHTML+=`
    <form class="row g-3" id="form">
        <div class="col-md-4">
        <label for="validationDefault01" class="form-label">Enter the pet's name<!--Ingrese el nombre de la mascota--></label>
        <input type="text" class="form-control" id="nombre" name="nombre" id="validationDefault01" value="" required>
        </div>
        <div class="col-md-4">
        <label for="validationDefault02" class="form-label">Enter the species of the pet<!--Ingrese la especie de la mascota--></label>
        <input type="text" class="form-control" id="especie" name="especie" id="validationDefault02" value="" required>
        </div>
        <div class="col-md-4">
        <label for="validationDefault02" class="form-label">Enter the pet's breed<!--Ingrese la raza de la mascota--></label>
        <input type="text" class="form-control" id="raza" name="raza" id="validationDefault02" value="" required>
        </div>
        <div class="col-md-4">
        <label for="validationDefault02" class="form-label">Enter pet's date of birth<!--Ingrese la fecha de nacimiento de la mascota (AAAA-MM-DD)--></label>
        <input type="date" class="form-control" id="edad" name="edad" id="validationDefault02" value="" required>
        </div>
        <div class="col-md-4">
        <label for="validationDefault02" class="form-label">Enter the pet's weight in kg<!--Ingrese el peso de la mascota en kg--></label>
        <input type="text" class="form-control" id="peso" name="peso" id="validationDefault02" value="" required>
        </div>
        <div class="col-md-3">
        <label for="validationDefault04" class="form-label">Enter pet's condition (stable, critical)<!--Ingrese el estado de la mascota (estable, critico)--></label>
        <select class="form-select" id="estado" name="estado" id="validationDefault04" required>
            <option selected disabled value="">Option...<!--opcion--></option>
            <option>Stable<!--estable-->...</option>
            <option>Critical<!--critico-->...</option>
        </select>
        </div>
        <div class="col-md-4">
        <label for="validationDefault02" class="form-label">Enter the owner's name<!--Ingrese el nombre del propietario--></label>
        <input type="text" class="form-control" id="nombrePropietario" name="nombrePropietario" id="validationDefault02" value="" required>
        </div>
        <div class="col-md-4">
        <label for="validationDefault02" class="form-label">Enter the owner's document<!--Ingrese el documento del propietario--></label>
        <input type="text" class="form-control" id="documento" name="documento" id="validationDefault02" value="" required>
        </div>
        <div class="col-md-4">
        <label for="validationDefault02" class="form-label">Enter the owner's phone number<!--Ingrese el teléfono del propietario--></label>
        <input type="text" class="form-control" id="telefono" name="telefono" id="validationDefault02" value="" required>
        </div>
        <div class="col-md-4">
        <label for="validationDefaultUsername" class="form-label">Enter the owner's email address<!--Ingrese el correo del propietario--></label>
        <div class="input-group">
            <span class="input-group-text" id="inputGroupPrepend2">@</span>
            <input type="email" class="form-control" id="correo" name="correo" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required>
        </div>
        </div>
        <div class="col-12">
        <button class="btn btn-primary" type="submit" id="guardar">save<!--Guardar--></button>
        </div>
    </form>

    

`

//EVENTO PARA EL BOTON REGISTAR NUEVA MASCOTA
const form = document.getElementById("form")

form.classList.add(`d-none`)
btnRegistrar.addEventListener('click', ()=>{
    form.classList.toggle('d-none');
})


















