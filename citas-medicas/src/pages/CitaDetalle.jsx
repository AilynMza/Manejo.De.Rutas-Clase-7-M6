import { useParams, Link } from "react-router-dom";

const CitaDetalle = () => {
  const { id } = useParams();

  return (
    <div className="page-content">
      {!id ? (
        <>
          <h1>Seleccione un paciente</h1>
          <p>No has seleccionado ninguna cita para ver los detalles.</p>
        </>
      ) : (
        <>
          <h1>Detalle de la cita</h1>
          <p>ID de la cita: {id}</p>
        </>
      )}

      <Link to="/citas" className="btn-back">
        Volver a Citas
      </Link>
    </div>
  );
};

export default CitaDetalle;
