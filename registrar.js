function main() {
    const inputNombre = document.querySelector("#usuario-nombre");
    const inputEmail = document.querySelector("#usuario-email");
    const inputContra = document.querySelector("#usuario-contrasenia");

    const nuevoUsuario = {
        nombre: inputNombre.value,
        email: inputEmail.value,
        contrasenia: inputContra.value
    }

    const usuarios = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];
    usuarios.push(nuevoUsuario)
    localStorage.setItem("usuariosRegistrados", JSON.stringify(usuarios))
}