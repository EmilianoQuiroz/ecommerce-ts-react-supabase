import { supabase } from "../supabase/client";

// Funcion para acceder a todos los productos de la base de datos
export const getProducts = async () => {
  const {data: products, error} = await supabase
    .from("products")
    .select("*, variants(*)")
    .order("created_at", { ascending: false });

    if (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
    return products;
};
