import { Link } from "react-router-dom";

const citasMock = [
  { id: 1, paciente: "Juan Pérez", fecha: "2025-06-25", hora: "10:00 AM" },
  { id: 2, paciente: "María López", fecha: "2025-06-26", hora: "12:30 PM" },
  { id: 3, paciente: "Carlos Ramírez", fecha: "2025-06-27", hora: "09:15 AM" },
];

function Citas() {
  return (
    <div>
      <h1>Lista de Citas</h1>
      <ul>
        {citasMock.map((cita) => (
          <li key={cita.id} style={{ marginBottom: "1rem" }}>
            <strong>{cita.paciente}</strong> — {cita.fecha} a las {cita.hora}
            <br />
            <Link to={`/citas/${cita.id}`}>Ver detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Citas;
