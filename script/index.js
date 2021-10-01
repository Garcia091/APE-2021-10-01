
let nombre = "";
let apellido = "";
let telefono = "";
let direccion = ""
let usuario;
let Personas = [];

let listar = document.getElementById('listar');
let boton = document.getElementById('btnEnviar');
let form = document.getElementById('form');

form.addEventListener('submit', formSumbit)
function formSumbit(e) {
    e.preventDefault();
}

boton.addEventListener('click', capturaDatos)
function capturaDatos() {

    class Persona {
        constructor(nombre, apellido, telefono, direccion, ciudad) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.telefono = telefono;
            this.direccion = direccion;
            this.ciudad = ciudad;
        }
    }

    nombre = document.querySelector('#inputNombre').value;
    apellido = document.querySelector('#inputApellido').value;
    telefono = document.getElementById('inputTelefono').value;
    direccion = document.getElementById('inputDireccion').value;
    ciudad = document.getElementById('ciudad').value;

    usuario = new Persona(nombre, apellido, telefono, direccion, ciudad)
    guardarLocalStorage(usuario);
}

function guardarLocalStorage(usuario) {

    localStorage.setItem('Nombre', usuario.nombre);
    localStorage.setItem('Apellido', usuario.apellido);
    localStorage.setItem('Teléfono', usuario.telefono);
    localStorage.setItem('Dirección', usuario.direccion);
    localStorage.setItem('Ciudad', usuario.ciudad);
    listarData();
}

function listarData() {

    let nombre = localStorage.getItem('Nombre');
    let apellido = localStorage.getItem('Apellido');
    let telefono = localStorage.getItem('Teléfono');
    let direccion = localStorage.getItem('Dirección');
    let ciudad = localStorage.getItem('Ciudad');

    listar.innerHTML = `
    <table class="table">
    <thead class="thead-inverse">
    <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Teléfono</th>
        <th>Dirección</th>
        <th>Ciudad</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${telefono}</td>
            <td>${direccion}</td>
            <td>${ciudad}</td>
        </tr>
    </tbody>
     </table>
    `;
}