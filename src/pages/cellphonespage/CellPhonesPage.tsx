import { useState } from "react";
import { CardProducts } from "../../components/products/CardProducts";
import { ContainerFilter } from "../../components/products/containerfilter/ContainerFilter";
import { prepareProducts } from "../../helpers";
import { useFilteredProducts } from "../../hooks";
import { Pagination } from "../../components/shared/pagination/Pagination";

export const CellPhonesPage = () => {
  const [page, setPage] = useState(1);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const {
    data: products = [],
    isLoading,
    totalProducts,
  } = useFilteredProducts({
    page,
    brands: selectedBrands,
  });

  if (isLoading || !products) {
    return <p>Cargando...</p>;
  }

  const preparedProducts = prepareProducts(products);

  return (
    <>
      <h1 className="text-5xl font-semibold text-center md-12">Celulares</h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {/** Filtros */}
        <ContainerFilter
          setSelectedBrands={setSelectedBrands}
          selectedBrands={selectedBrands}
        />

        {isLoading ? (
          <div className="col-span-2 flex items-center justify-center h-[500px]">
            <p>Cargando</p>
          </div>
        ) : (
          <div className="col-span-2 lg:col-span-2 xl:col-span-4 flex flex-col gap-12">
            <div className="grid grid-cols-2 gap-3 gap-y-10 xl:grid-cols-4">
              {preparedProducts.map((product) => (
                <CardProducts
                  img={product.images[0]}
                  name={product.name}
                  price={product.price}
                  slug={product.slug}
                  colors={product.colors}
                  variants={product.variants}
                />
              ))}
            </div>
            {/** TODO: Paginacion */}
            <Pagination 
              totalItems={totalProducts}
              page={page}
              setPage={setPage}
            />
          </div>
        )}
      </div>
    </>
  );
};
