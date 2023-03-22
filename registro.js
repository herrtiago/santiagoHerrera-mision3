import Persona from "./PersonaMision.js";
const btnEnviar = document.getElementById("btnEnviar");
const listaPersonas = JSON.parse(localStorage.getItem('listaPersonas')) || [];

btnEnviar.addEventListener("click", () => {
    if (!inputNombres.value || !inputApellidos.value || !inputArea.value || !inputUsuario.value || !inputEdad.value || !inputDireccion.value || !inputEmail.value) {
        alert("Complete todos los campos.");
        return;
    }

    if (!ValidateEmail()) {
        alert("El correo no es válido.");
        return;
    }

    const nuevaPersona = new Persona(inputNombres.value, inputApellidos.value, inputArea.value, inputUsuario.value, inputEdad.value, inputDireccion.value, inputEmail.value);
    listaPersonas.push(nuevaPersona);
    localStorage.setItem('listaPersonas', JSON.stringify(listaPersonas));
    location.href = "./index.html";
});

function ValidateEmail() {
    const expReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return expReg.test(inputEmail.value);
}



btnAtras.addEventListener("click", () => {
    location.href = "./index.html";
}
);


