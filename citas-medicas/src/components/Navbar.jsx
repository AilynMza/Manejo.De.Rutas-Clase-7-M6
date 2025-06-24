import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/citas" end>
            Citas
          </NavLink>
        </li>
        <li>
          <NavLink to="/citas/detalle" end>
            Detalles Citas
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
