import { Link } from "react-router-dom";
import { socialLinks } from "../../../constants/links";

// Code: Footer Component
const Footer = () => {
  return (
    <footer className="py-16 bg-gray-950 px-12 flex justify-between gap-10 mt-10 text-slate-200 text-sm flex-wrap md:flex-nowrap">
      <Link
        to="/"
        className="text-2xl font-bold tracking-tighter transition-all text-white flex-1"
      >
        Ecommerce Celulares
      </Link>
      <div className="flex flex-col gap-4 flex-1">
        <p className="font-semibold uppercase tracking-tighter">Suscribete</p>

        <div className="border border-gray-800 flex items-center gap-2 px-3 py-2 rounded-md">
          <input
            type="email"
            placeholder="Ingresa tu email"
            className="bg-gray-950 text-white w-full focus:outline-none"
          />
          <button className="bg-cyan-600 px-4 py-2 rounded-md">
            Suscribirme
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <p className="font-semibold uppercase tracking-tighter">Politicas</p>

        <nav className="flex flex-col gap-2 text-xs font-medium">
          <Link to="/celulares">Productos</Link>
          <Link to="#" className="text-slate-300 hover:text-white">
            Politicas de privacidad
          </Link>
          <Link to="#" className="text-slate-300 hover:text-white">
            Terminos de uso
          </Link>
        </nav>
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <p className="font-semibold uppercase tracking-tighter">Siguenos</p>
        <p className="text-xs leading-6">
          No te pierdas nuestras novedades y ofertas especiales
        </p>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 border border-gray-8000 w-full h-full py-3.5 flex items-center justify-center tramsition-all rounded-md hover:bg-white hover:text-gray-950"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
