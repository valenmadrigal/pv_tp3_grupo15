import { NavLink } from 'react-router-dom';

function nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/dashboard">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/proyectos">Proyectos</NavLink>
        </li>
        <li>
          <NavLink to="/perfil">Perfil</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default nav;