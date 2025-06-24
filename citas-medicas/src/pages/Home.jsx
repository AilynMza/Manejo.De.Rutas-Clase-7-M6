import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page-content">
      <h1>Bienvenido a Consultas Médicas</h1>
      <p>
        Esta plataforma te permite consultar y gestionar tus citas médicas de forma rápida y sencilla.
      </p>
      <p>
        Aquí podrás ver todas tus citas agendadas, revisar detalles importantes y mantenerte al tanto de tus visitas médicas.
      </p>
      <p>Haz clic abajo para empezar.</p>
      <Link to="/citas" className="btn-back">
        Ver mis citas
      </Link>
    </div>
  );
};

export default Home;
