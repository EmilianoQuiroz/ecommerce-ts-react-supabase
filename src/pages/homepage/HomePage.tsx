import { Brands } from "../../components/home/brands/Brands";
import { FeatureGrid } from "../../components/home/featuregrid/FeatureGrid";
import { ProductGrid } from "../../components/home/productgrid/ProductGrid";
import { popularCelulares, recentCelulares } from "../../data/initialData";
import { prepareProducts } from "../../helpers";

export const HomePage = () => {
  const preparedRecentProducts = prepareProducts(recentCelulares);
  const preparedPopularProducts = prepareProducts(popularCelulares);

  return (
    <div>
      <FeatureGrid />
      <ProductGrid title="Nuevos productos" products={preparedRecentProducts} />
      <ProductGrid
        title="Productos destacados"
        products={preparedPopularProducts}
      />

      <Brands />
    </div>
  );
};
