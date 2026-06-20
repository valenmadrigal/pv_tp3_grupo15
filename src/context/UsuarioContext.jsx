import { createContext, useState, useEffect } from "react";
 
export const UsuarioContext = createContext();
 
const CLAVE_LOCAL_STORAGE = "usuario";
 
const USUARIO_DEFAULT = {
  nombre: "Juan Pérez",
  dni: "12345678",
  rol: "Docente", 
  institucion: "Facultad de Ingeniería",
  carrera: "Analista Programador Universitario",
};
 
export const UsuarioProvider = ({ children }) => {
 
  const [usuario, setUsuario] = useState(() => {
    try {
      const guardado = localStorage.getItem(CLAVE_LOCAL_STORAGE);
      return guardado ? JSON.parse(guardado) : USUARIO_DEFAULT;
    } catch (error) {
      
      console.error("No se pudo leer el usuario desde localStorage:", error);
      return USUARIO_DEFAULT;
    }
  });
 

  useEffect(() => {
    localStorage.setItem(CLAVE_LOCAL_STORAGE, JSON.stringify(usuario));
  }, [usuario]);
 
  const actualizarPerfil = (nuevosDatos) => {
    setUsuario((prev) => ({
      ...prev,
      ...nuevosDatos,
    }));
  };
 
  return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
};
 