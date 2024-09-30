import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-64 min-h-screen bg-orange-100 flex flex-col justify-between shadow-lg">
      <div className="flex flex-col p-6 space-y-4">
        <h1 className="text-2xl font-bold text-red-600">🍣 Sushi House</h1>

        <nav className="flex flex-col space-y-3">
          <Link
            to="/"
            className="text-lg text-orange-700 hover:bg-orange-300 p-2 rounded transition duration-300 ease-in-out"
          >
            🏠 Home
          </Link>
          <Link
            to="/carta"
            className="text-lg text-orange-700 hover:bg-orange-300 p-2 rounded transition duration-300 ease-in-out"
          >
            📜 Carta
          </Link>
          <Link
            to="/menu"
            className="text-lg text-orange-700 hover:bg-orange-300 p-2 rounded transition duration-300 ease-in-out"
          >
            🍱 Menú
          </Link>
          <Link
            to="/contacto"
            className="text-lg text-orange-700 hover:bg-orange-300 p-2 rounded transition duration-300 ease-in-out"
          >
            📞 Contacto
          </Link>
        </nav>
      </div>

      <footer className="p-4 bg-orange-200 text-center">
        <p className="text-sm text-orange-600">© 2024 Sushi House</p>
      </footer>
    </div>
  );
};

export default Sidebar;
