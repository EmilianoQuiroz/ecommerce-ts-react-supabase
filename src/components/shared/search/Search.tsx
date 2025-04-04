import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useGlobalStore } from "../../../store/global/global.store";
import { formatPrice } from "../../../helpers";
import { searchProducts } from "../../../actions";
import { Product } from "../../../interfaces";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchsResults, setSearchResults] = useState<Product[]>([]);
  const closeSheet = useGlobalStore((state) => state.closeSheet);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Comprobacion
    if (searchTerm.trim()) {
      // Buscar productos
      const products = await searchProducts(searchTerm);
      setSearchResults(products);
    }
  };

  return (
    <>
      <div className="py-5 px-7 flex gap-10 items-center border-b border-slate-200">
        <form
          onSubmit={handleSearch}
          className="flex gap-3 items-center flex-1"
        >
          <HiOutlineSearch size={22} />
          <input
            type="text"
            placeholder="Buscar productos, marcas y más..."
            className="outline-none w-full text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <button onClick={closeSheet}>
          <IoMdClose size={25} className="text-black" />
        </button>
      </div>

      {/** Resultados de la busqueda */}
      <div className="p-5">
        {searchsResults.length > 0 ? (
          <ul>
            {searchsResults.map((product) => (
              <li key={product.id} className="flex items-center gap-3">
                <button className="flex items-center gap-3">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-20 w-20 object-contain p-3"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium group-hover:underline">
                      {product.name}
                    </p>
                    <p className="text-[13px] text-gray-600">
                      {product.variants[0].storage} /{" "}
                      {product.variants[0].color_name}
                    </p>
                    <p className="text-sm font-medium text-gray-600">
                      {formatPrice(product.variants[0].price)}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-sm text-gray-600 py-10">
            No se encontraron resultados.
          </p>
        )}
      </div>
    </>
  );
};
