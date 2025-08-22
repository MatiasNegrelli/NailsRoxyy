import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="w-full h-80 md:h-full rounded-lg overflow-hidden shadow-xl">
          <img
            src="/work.png"
            alt="Interior del salón de uñas"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-serif font-bold mb-6 text-brand-text">
            ¡Bienvenida!
          </h2>
          <p className="mb-4 text-brand-text/80 leading-relaxed">
            Soy <strong>Roxana</strong>, especialista en manicura y pedicura con
            una verdadera pasión por el arte de embellecer las uñas. Mi trabajo
            combina <em>precisión técnica</em>, creatividad y años de
            experiencia en el cuidado estético de manos y pies. Cada servicio
            está pensado para ofrecerte un resultado único, elegante y de la más
            alta calidad.
          </p>
          <p className="mb-4 text-brand-text/80 leading-relaxed">
            Mi compromiso es brindarte una experiencia personalizada, donde cada
            detalle cuenta. Más que un tratamiento, quiero que disfrutes un
            momento especial dedicado solo a vos, en un espacio acogedor y
            relajante.
          </p>
          <p className="text-brand-text/80 leading-relaxed">
            Te invito a descubrir la combinación perfecta entre estilo, cuidado
            y bienestar. ¡Acompáñame en este viaje hacia unas manos radiantes y
            pies saludables!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
