import { usuarios } from "../model/ModelUsuarios.js"

export function BuscarUsuario() {
    let respuesta = usuarios.some((i) => {
        let usuario = document.querySelector("#usuario").value
        let contraseña = document.querySelector("#contraseña").value
        if (usuario == i.usuario && contraseña == i.contraseña) {
            return true
        } else {
            return false
        }
    })
    return respuesta
}