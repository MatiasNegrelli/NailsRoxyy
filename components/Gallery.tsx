import React from "react";

const galleryImages = [
  // This new layout is mathematically calculated to fill a 4x4 grid on medium screens and up.
  // Total cells = 16 (4+2+2+1+2+1+2+2) which is a multiple of 4 (md:grid-cols-4).
  // On mobile (grid-cols-2), no spans apply, resulting in a simple 2-column layout.
  {
    src: "../Public/img1.jpg",
    alt: "Diseño de uñas 1",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "../Public/img2.jpg",
    alt: "Diseño de uñas 2",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    src: "../Public/img4.webp",
    alt: "Diseño de uñas 3",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    src: "../Public/img3.jpg",
    alt: "Diseño de uñas 4",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "../Public/img6.webp",
    alt: "Diseño de uñas 5",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    src: "../Public/img5.webp",
    alt: "Diseño de uñas 6",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "../Public/img7.jpg",
    alt: "Diseño de uñas 7",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    src: "../Public/img8.jpg",
    alt: "Diseño de uñas 8",
    span: "md:col-span-2 md:row-span-1",
  },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-brand-text">
            Galería de Trabajos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-text/70">
            Inspírate con algunos de nuestros diseños más recientes y creativos.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`w-full h-full overflow-hidden rounded-lg shadow-lg ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
