export interface RegisterData {
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    genero: string;
    telefono: string;
    correo: string;
    contrasena: string;
}

export interface loginData {
  correo: string;
  contrasena: string;
}

export interface verifyCode {
  correo: string;
  codigoVeri: string;
}
  