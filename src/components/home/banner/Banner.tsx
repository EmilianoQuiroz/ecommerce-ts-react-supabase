import { Link } from "react-router-dom"

export const Banner = () => {
  return (
    <div className="relative bg-gray-900 text-white">
        
        {/* Imagen de fondo */}
        <div
            className="absolute inset-0 bg-cover bg-center opacity-70 h-full"
            style={{ backgroundImage: 'url(/img/background-newsletter.webp)' }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"/>
        
        {/* Contenido */}
        <div className='relative z-10 flex flex-col items-center justify-center py-20 px-4 text-center lg:py-40 lg:px-8'>
        <h1 className="text-4xl font-bold mb-4 lg:text-6xl">Welcome to our store</h1>
        <p className="mt-4 text-lg lg:text-2xl">The best place to buy your electronics</p>
        <Link to="/celulares" className="mt-8 bg-cyan-600 text-white font-semibold px-6 py-2 rounded-full">Shop Now</Link>
      </div>
    </div>
  )
}
