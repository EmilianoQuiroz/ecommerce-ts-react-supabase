import { PreparedProducts } from "../../../interfaces";
import { CardProducts } from "../products/CardProducts";

interface Props {
  title: string;
  products: PreparedProducts[];
}
export const ProductGrid = ({title, products}: Props) => {
  return (
    <div className="my-32">
        <h2 className="text-3xl font-semibold text-center mb-8 md:text-4xl lg:text-5xl">
            {title}
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8">
            {products.map((product) => (
              <div className="flex flex-col gap-6 relative" key={product.id}>
                  <CardProducts
                      img={product.images[0]}
                      name={product.name}
                      price={product.price}
                      slug={product.slug}
                      colors={product.colors}
                      variants={product.variants}
                  />
              </div>
            ))}
        </div>
    </div>
  )
}
