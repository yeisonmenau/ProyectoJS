import {BuscarUsuario} from "../../../controller/ControllerUsuarios.js"


function IniciarSesion() {
    if(BuscarUsuario()){
        window.location.href='/view/pages/home.html'
    }else{
        console.log("Error de credenciales");
    }
}

document.querySelector('#btnIniciar').addEventListener('click', IniciarSesion)
