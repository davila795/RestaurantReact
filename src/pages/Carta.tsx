import { useEffect, useState } from "react";
import { CategoriaPlato, Plato, PLATOS_POR_PAGINA } from "../types/platos";

import { getPlatos } from "../controllers/apiController";

function Carta() {
  const [platos, setPlatos] = useState<Plato[]>([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState<string>("Todos");
  const [paginaActual, setPaginaActual] = useState<number>(1);

  const indexOfLastPlato = paginaActual * PLATOS_POR_PAGINA;
  const indexOfFirstPlato = indexOfLastPlato - PLATOS_POR_PAGINA;
  const platosSeleccionados = platos.filter((plato) => {
    if (categoriaSeleccionada === "Todos") return plato;
    return plato.Categoria === categoriaSeleccionada;
  });
  const platosPaginados = platosSeleccionados.slice(
    indexOfFirstPlato,
    indexOfLastPlato
  );
  const totalPaginas = Math.ceil(
    platosSeleccionados.length / PLATOS_POR_PAGINA
  );

  useEffect(() => {
    const fetchPlatos = async () => {
      const platos = await getPlatos();
      setPlatos(platos);
    };

    fetchPlatos();
  }, []);

  return (
    <div className="flex flex-col items-center p-7">
      <h2 className="text-3xl font-bold text-orange-600 mb-6">Nuestra Carta</h2>

      {/* Filtros por categoría */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-2 py-1 text-sm font-medium rounded ${
            categoriaSeleccionada === "Todos"
              ? "bg-orange-500 text-white"
              : "bg-orange-200 text-orange-700"
          } hover:bg-orange-300 transition-colors duration-300`}
          onClick={() => setCategoriaSeleccionada("Todos")}
        >
          Todos
        </button>
        {Object.values(CategoriaPlato).map((categoria) => (
          <button
            key={categoria}
            className={`px-2 py-1  text-sm font-medium rounded ${
              categoriaSeleccionada === categoria
                ? "bg-orange-500 text-white"
                : "bg-orange-200 text-orange-700"
            } hover:bg-orange-300 transition-colors duration-300`}
            onClick={() => {
              setCategoriaSeleccionada(categoria);
              setPaginaActual(1);
            }}
          >
            {categoria}
          </button>
        ))}
      </div>

      {/* Contenedor de las cartas de platos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-8">
        {platosPaginados.map((plato) => (
          <div
            key={plato.Id}
            className="bg-white shadow-lg rounded-lg overflow-hidden relative"
          >
            <img
              src={plato.Photo}
              alt={plato.Nombre}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md font-semibold text-orange-700">
                {plato.Nombre}
              </h3>
              <p className="text-gray-500 mt-2 mb-5">{plato.Precio}€</p>
            </div>
            <div className="p-1 bg-orange-100 text-sm text-gray-700 absolute bottom-0 left-0 right-0">
              {plato.Vegetariana ? "🌿 Vegetariana" : "🍖 No Vegetariana"}
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPaginas }, (_, index) => (
          <button
            key={index}
            className={`mx-1 px-3 py-1 rounded ${
              paginaActual === index + 1
                ? "bg-orange-500 text-white"
                : "bg-orange-200 text-orange-700"
            } hover:bg-orange-300 transition-colors duration-300`}
            onClick={() => setPaginaActual(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Carta;
