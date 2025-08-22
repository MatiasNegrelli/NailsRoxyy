import React from "react";

// SVG Icon Components defined outside to prevent re-creation on re-renders
const BrushIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="h-10 w-10 text-brand-primary"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
    />
  </svg>
);
const SparklesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="h-10 w-10 text-brand-primary"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
    />
  </svg>
);
const ShieldCheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="h-10 w-10 text-brand-primary"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

const servicesData = [
  {
    icon: <BrushIcon />,
    title: "Manicura Tradicional",
    description:
      "Cuidado clásico de uñas, cutículas e hidratación para unas manos impecables.",
  },
  {
    icon: <SparklesIcon />,
    title: "Esmaltado Semipermanente",
    description:
      "Color y brillo perfectos por semanas con una amplia gama de tonos a elegir.",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Kapping y Uñas Esculpidas",
    description:
      "Refuerza y alarga tus uñas naturales con acrílico o gel para un look duradero y resistente.",
  },
  {
    icon: <SparklesIcon />,
    title: "Decoración y Diseños",
    description:
      "Desde diseños sutiles hasta nail art elaborado. ¡Tu imaginación es el límite!",
  },
  {
    icon: <BrushIcon />,
    title: "Mantenimiento y Retirado",
    description:
      "Cuidamos tus uñas en cada paso, asegurando un retirado seguro y un mantenimiento perfecto.",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Cuidado de Cutículas",
    description:
      "Tratamientos especializados para mantener tus cutículas sanas e hidratadas.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-brand-primary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-brand-text">
            Nuestros Servicios
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-text/70">
            Ofrecemos una gama completa de servicios para que tus uñas luzcan
            siempre perfectas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-brand-bg p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="inline-block mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-brand-text">
                {service.title}
              </h3>
              <p className="text-brand-text/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
