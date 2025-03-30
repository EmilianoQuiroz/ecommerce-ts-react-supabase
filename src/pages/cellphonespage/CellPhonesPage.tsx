import { CardProducts } from "../../components/products/CardProducts";
import { ContainerFilter } from "../../components/products/containerfilter/ContainerFilter";
import { allCelulares } from "../../data/initialData";
import { prepareProducts } from "../../helpers";

export const CellPhonesPage = () => {
  const preparedProducts = prepareProducts(allCelulares);

  return (
    <>
      <h1 className="text-5xl font-semibold text-center md-12">Celulares</h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {/** Filtros */}
        <ContainerFilter />
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
        </div>
      </div>
    </>
  );
};
