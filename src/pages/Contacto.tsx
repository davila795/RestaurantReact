import React, { useState } from "react";
import { Reserva } from "../types/platos";
import { postReserva } from "../controllers/apiController";

function Contacto() {
  const [reserva, setReserva] = useState<Reserva>({
    Nombre: "",
    Email: "",
    Comentario: "",
    Fecha: "",
    Hora: "",
    Telefono: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setReserva({
      ...reserva,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postReserva(reserva);
    setReserva({
      Comentario: "",
      Email: "",
      Fecha: "",
      Hora: "",
      Nombre: "",
      Telefono: "",
    });
  };

  return (
    <div className="p-6 flex justify-center items-center min-h-screen">
      <div className="flex max-w-screen-lg mx-auto md:h-2/3 flex-col md:flex-row gap-4">
        <div className="flex-1 text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            Contacto y Reservas
          </h2>

          {/* Información de contacto */}
          <div className="mb-8">
            <p className="text-lg">📍 Dirección: 123 Sushi St, Tokio</p>
            <p className="text-lg">📞 Teléfono: +81 123 456 789</p>
            <p className="text-lg">✉️ Correo: reservas@sushihouse.com</p>
          </div>

          {/* Google Maps */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4  text-orange-600">
              ¿Dónde estamos?
            </h3>
            <div className="max-w-fit mx-auto">
              {
                <iframe
                  title="Ubicación de Sushi House"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.444342390013!2d2.1569028759378455!3d41.38615567130004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a28bfe214555%3A0x1c549f7487ffc67d!2sCarrer%20del%20Consell%20de%20Cent%2C%20230%2C%20L&#39;Eixample%2C%2008011%20Barcelona!5e0!3m2!1sen!2ses!4v1727692143656!5m2!1sen!2ses"
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              }
            </div>
          </div>
        </div>

        {/* Formulario de reserva */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4  text-orange-600">
            Haz tu reserva
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="Nombre"
              placeholder="Nombre"
              value={reserva.Nombre}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Correo"
              value={reserva.Email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="tel"
              name="Telefono"
              placeholder="Teléfono"
              value={reserva.Telefono}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="date"
              name="Fecha"
              value={reserva.Fecha}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="time"
              name="Hora"
              value={reserva.Hora}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />

            <textarea
              name="Comentario"
              placeholder="Comentarios adicionales (opcional)"
              value={reserva.Comentario}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded h-24"
            />

            <button
              type="submit"
              className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-700 transition duration-300"
            >
              Enviar Reserva
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
