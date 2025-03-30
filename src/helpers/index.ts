import { Color, Product, VariantProduct } from "../interfaces";

//Funcion para formatear los precios a euros
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

//Funcion para preparar los productos
export const prepareProducts = (products: Product[]) => {
  return products.map((product) => {
    //Agrupar las variantes por color
    const colors = product.variants.reduce(
      (acc: Color[], variant: VariantProduct) => {
        const existingColor = acc.find((item) => item.color == variant.color);
        if (existingColor) {
          //Si ya existe el color, comparamos los precios
          existingColor.price = Math.min(existingColor.price, variant.price);
        } // Mantenemos el precio más bajo
        else {
          acc.push({
            color: variant.color,
            price: variant.price,
            name: variant.color_name,
          });
        }
        //Luego de la comparacion, retornamos el acumulador
        return acc;
      },
      []
    );
    //Obtener el precion mas bajo de las variantes agrupadas
    const price = Math.min(...colors.map((item) => item.price));
    //Devolvemos el producto formateado
    return {
      ...product,
      price,
      colors: colors.map(({ color, name }) => ({
        color,
        name,
      })),
      variants: product.variants,
    };
  });
};
