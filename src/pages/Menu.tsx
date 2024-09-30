import { useEffect, useState } from "react";
import { Plato, CategoriaPlato } from "../types/platos";
import { getMenu } from "../controllers/apiController";

function Menu() {
  const [menu, setMenu] = useState<Plato[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const menuApi = await getMenu();
      setMenu(menuApi);
    };

    fetchMenu();
  }, []);

  const entrantes = menu.filter(
    (plato) => plato.Categoria === CategoriaPlato.ENTRANTE
  );
  const principales = menu.filter(
    (plato) => plato.Categoria === CategoriaPlato.PRINCIPAL
  );
  const postres = menu.filter(
    (plato) => plato.Categoria === CategoriaPlato.POSTRE
  );

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
        Menú del Día
      </h2>

      {/* Entrantes */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-red-800">Entrantes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {entrantes.map((plato) => (
            <div
              key={plato.Id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={plato.Photo}
                alt={plato.Nombre}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-orange-700">
                  {plato.Nombre}
                </h4>
                <p className="text-gray-500 mt-2">{plato.Precio}€</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platos principales */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-red-800">Platos Principales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principales.map((plato) => (
            <div
              key={plato.Id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={plato.Photo}
                alt={plato.Nombre}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-orange-700">
                  {plato.Nombre}
                </h4>
                <p className="text-gray-500 mt-2">{plato.Precio}€</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Postres */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-red-800">Postres</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {postres.map((plato) => (
            <div
              key={plato.Id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={plato.Photo}
                alt={plato.Nombre}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-orange-700">
                  {plato.Nombre}
                </h4>
                <p className="text-gray-500 mt-2">{plato.Precio}€</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
