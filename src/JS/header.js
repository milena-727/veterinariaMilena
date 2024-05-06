const header = document.getElementById("header")
const nav = document.getElementById("navbarOption")
//BARRA DE NAVEGACIÓN
header.innerHTML=`
<nav id="navbarOption">
    <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <a id="nameLogo" class="navbar-brand" href="#">HAPPY PET</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Options</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item" >
                        <a class="nav-link" id="registrar" href="#">Register a new pet<!--Registar una nueva mascota--></a> 
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">View the list of all registered pets<!--Ver la lista de todas las mascotas registradas--></a> 
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">List of owners<!--Ver una lista de todos los dueños--></a> 
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Search pet by name<!--Buscar una mascota por el nombre--></a> 
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pets of the same owner<!--mascotas pertenecientes a un mismo dueño--></a> 
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Update a pet's information<!--Actualizar la información de una mascota--></a> 
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Remove a pet<!--Eliminar una mascota--></a> 
                        </li>
                    </ul>
                    <form class="d-flex mt-3" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    </nav>
</nav>

`


























