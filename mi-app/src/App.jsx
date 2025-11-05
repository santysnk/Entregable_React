import "./App.css";
import { Usuarios } from "./components/Usuarios/Usuarios";

function App() {
   return (
      <div className="pagina">
         <h1>Ejercicio Entregable — useState + useEffect</h1>
			<ol>
				<li>Carga la lista de usuarios desde la API al iniciar la aplicación.</li>
				<li>Muestra los usuarios en una tabla con columnas para ID, Nombre, Email y Ciudad.</li>
				<li>Incluye un campo de búsqueda para filtrar usuarios por nombre en tiempo real.</li>
				<li>Agrega un botón para eliminar usuarios de la lista (solo localmente).</li>	
			</ol>
         <Usuarios />
      </div>
   );
}

export default App;
