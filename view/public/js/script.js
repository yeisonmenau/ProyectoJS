import { usuarios } from "../../../model/ModelUsuarios.js"  
console.log(usuarios)
function IniciarSesion (){
    let usuario = document.querySelector("#usuario").value
    let contraseña = document.querySelector("#contraseña").value
    if (usuario == "admin" && contraseña == "123"){
        alert("bienvenido")
    }else{
        alert("usuario incorrecto")
    }
}
