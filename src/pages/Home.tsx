function Home() {
  return (
    <div
      className="relative h-screen"
      style={{
        background:
          "url(https://res.cloudinary.com/dyzrlulxn/image/upload/v1727696485/pexels-cottonbro-3296280_ohunpi.jpg) center 40% / cover  no-repeat",
      }}
    >
      {/* Capa oscura para hacer el texto más legible */}
      <div className="absolute inset-0 bg-orange-500 opacity-15"></div>

      {/* Contenido del hero */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white p-6">
        <h1 className="text-5xl font-bold mb-4 text-orange-100">
          Bienvenido a Sushi House
        </h1>
        <p className="text-2xl italic mb-6 text-orange-100">
          "Un viaje gastronómico a Japón en cada bocado"
        </p>
        <p className="absolute bottom-20 right-10 text-md max-w-xs text-orange-200">
          En Sushi House, fusionamos la tradición milenaria de la cocina
          japonesa con ingredientes frescos y técnicas contemporáneas. Nuestro
          compromiso es brindarte una experiencia culinaria única y auténtica,
          llena de sabores y aromas que te transportan directamente a Japón.
        </p>
      </div>
    </div>
  );
}

export default Home;
