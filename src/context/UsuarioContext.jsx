import { createContext, useEffect, useState } from "react";

export const UsuarioContext = createContext();

const USUARIO_DEFAULT = {
  nombre: "Juan Pérez",
  rol: "Administrador",
  institucion: "Facultad de Ingeniería",
  carrera: "Analista Programador Universitario"
};

const CLAVE_LOCAL_STORAGE = "usuario";

const obtenerUsuarioInicial = () => {
  const guardado = localStorage.getItem(CLAVE_LOCAL_STORAGE);

  if (guardado) {
    try {
      return JSON.parse(guardado);
    } catch {
      return USUARIO_DEFAULT;
    }
  }

  return USUARIO_DEFAULT;
};

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(obtenerUsuarioInicial);

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
    <UsuarioContext.Provider
      value={{
        usuario,
        actualizarPerfil,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};