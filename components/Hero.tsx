import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/portada.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white p-6">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 drop-shadow-lg">
          Arte en Cada Detalle
        </h1>
        <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto drop-shadow-md">
          Experimenta la belleza y el cuidado que tus manos merecen. Diseños
          únicos para un estilo inolvidable.
        </p>
        <a
          href="#contact"
          className="bg-brand-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Agenda tu Cita
        </a>
      </div>
    </section>
  );
};

export default Hero;
