class Persona {
    nombres;
    apellidos;
    area;
    usuario;
    edad;
    direccion;
    email;
    constructor(nombres, apellidos, area, usuario, edad, direccion, email) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.edad = edad;
        this.area = area;
        this.usuario = usuario;
        this.direccion = direccion;
        this.email = email;
    }
    nombreCompleto() {
        let nombreCompleto = (`${this.nombres} ${this.apellidos}`);
        return nombreCompleto;
    }
}
export default Persona;