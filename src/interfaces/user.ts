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
  

export interface mail {
  correo: string;
}

export interface forgotPassword {
  correo: string;
}

export interface User{
  nombre: string;
    apellido: string;
    correo: string;
    genero: string;
    telefono: string;
    fecha_nacimiento: string;
    imagen_url: string;
}
export interface EditPerfilProps {
  userEmail: string;
}