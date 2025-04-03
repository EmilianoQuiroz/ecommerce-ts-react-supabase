import { Brands } from "../../components/home/brands/Brands";
import { FeatureGrid } from "../../components/home/featuregrid/FeatureGrid";
import { ProductGrid } from "../../components/home/productgrid/ProductGrid";
import { ProductGrindSkeleton } from "../../components/skeletons/product_grids_keleton/ProductGrindSkeleton";
import { prepareProducts } from "../../helpers";
import { useHomeProducts } from "../../hooks";

export const HomePage = () => {
  // Custom Hook para utilizar Tanstack Query de manera sencilla
  const { recentProducts, randomProducts, isLoading } = useHomeProducts();

  //Productos mas recientes
  const preparedRecentProducts = prepareProducts(recentProducts);
  //Productos destacados (productos random)
  const preparedPopularProducts = prepareProducts(randomProducts);

  return (
    <div>
      <FeatureGrid />
      {isLoading ? (
        <ProductGrindSkeleton numberOfProducts={4} />
      ) : (
        <ProductGrid
          title="Nuevos productos"
          products={preparedRecentProducts}
        />
      )}

      {isLoading ? (
        <ProductGrindSkeleton numberOfProducts={4} />
      ) : (
        <ProductGrid
          title="Productos destacados"
          products={preparedPopularProducts}
        />
      )}

      <Brands />
    </div>
  );
};
