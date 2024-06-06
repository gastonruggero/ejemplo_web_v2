function obtener() {
    const usuarios = JSON.parse(localStorage.getItem("usuariosRegistrados"));

    const olUsuarios = document.querySelector("#contenedor-usuarios");


    usuarios.forEach(usuario => {
        olUsuarios.innerHTML += `
            <li>
                <ul>
                    <li>
                        ${usuario.nombre}
                    </li>
                    <li>
                        ${usuario.email}
                    </li>
                    <li>
                        ${usuario.contrasenia}
                    </li>
                </ul>
            </li>
        `;
    });
}


obtener();