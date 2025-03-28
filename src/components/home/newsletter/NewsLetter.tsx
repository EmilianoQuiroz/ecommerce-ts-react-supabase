export const NewsLetter = () => {
  return (
    <div className="relative bg-gray500 text-white py-20">
      {/** Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover opacity-70 h-full"
        style={{ backgroundImage: "url(/img/background-newsletter.webp)" }}
      />
      {/** Contenido del newsletter */}
      <div className="container z-10 relative p-5 md:p-0">
        <div className="w-full text-black bg-white p-12 space-y-5 md:w-[50%] lg:w-[40%]">
          <p className="text-xs uppercase font-semibold">
            Subscribe to our newsletter
          </p>
          <p className="text-xs font-medium w-[%80]leading-5">
            Get the latest news and updates about our products, promotions, and
            more. Don't miss out on exclusive offers and discounts. Subscribe
            now!
          </p>
          <form className="flex flex-col gap-5 xl:flex-row">
            <input
              type="email"
              className="border border-slate-200 focus:outline-none rounded-md py-5 w-full text-xs font-medium"
              placeholder="Enter your email address"
            />
            <button className="bg-cyan-600 px-4 py-3 rounded-md text-white uppercase xl:py-5">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
