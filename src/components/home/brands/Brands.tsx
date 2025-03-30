import { brandsLinks } from "../../../constants/links";

export const Brands = () => {
  return (
    <div className="flex flex-col items-center gap-3 pt-16 pb-12">
      <h2 className="font-bold text-2xl">Nuestras marcas</h2>
      <p className="w-2/3 text-center text-sm md:text-base">
        Trabajamos con las mejores marcas para ofrecerte productos de alta
        calidad y durabilidad. Desde tecnología hasta moda, tenemos todo lo que
        necesitas.
      </p>

      <div className="grid grid-cols-3 gap-6 mt-8 items-center md:grid-cols-6">
        {brandsLinks.map((link) => (
          <div key={link.id}>
            <img src={link.image} alt={link.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
