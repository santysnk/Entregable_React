import { useEffect, useState } from "react";
import "./Usuarios.css";

const URL_API = "https://jsonplaceholder.typicode.com/users";

export function Usuarios() {
   const [usuarios, setUsuarios] = useState([]);
   const [busqueda, setBusqueda] = useState("");

   // Carga inicial de datos
   useEffect(() => {
      fetch(URL_API)
         .then((res) => res.json())
         .then((data) => setUsuarios(data))
         .catch(() => alert("Error al cargar los usuarios"));
   }, []);

   // Eliminar usuario (solo localmente)
   const eliminarUsuario = (id) => {
      const filtrados = usuarios.filter((u) => u.id !== id);
      setUsuarios(filtrados);
   };

   // Filtrado en tiempo real
   const usuariosFiltrados = usuarios.filter((u) =>
      u.name.toLowerCase().includes(busqueda.toLowerCase())
   );

   return (
      <div className="contenedor-usuarios">
         <h2>Lista de Usuarios</h2>

         <input
            type="text"
            placeholder="Buscar por nombre..."
            className="input-busqueda"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
         />

         <table className="tabla-usuarios">
            <thead>
               <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Ciudad</th>
                  <th>Acción</th>
               </tr>
            </thead>

            <tbody>
               {usuariosFiltrados.map((usuario) => (
                  <tr key={usuario.id}>
                     <td>{usuario.id}</td>
                     <td>{usuario.name}</td>
                     <td>{usuario.email}</td>
                     <td>{usuario.address.city}</td>
                     <td>
                        <button className="btn-eliminar" onClick={() => eliminarUsuario(usuario.id)}>
                           Eliminar
                        </button>
                     </td>
                  </tr>
               ))}

               {usuariosFiltrados.length === 0 && (
                  <tr>
                     <td colSpan="5" style={{ textAlign: "center", opacity: 0.7 }}>
                        No se encontraron usuarios
                     </td>
                  </tr>
               )}
            </tbody>
         </table>
      </div>
   );
}
