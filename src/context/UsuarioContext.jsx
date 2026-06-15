import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({
    nombre: "Juan Pérez",
    rol: "Administrador",
  });

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