import { supabase } from "../supabase/client";

// Funcion para acceder a todos los productos de la base de datos
export const getProducts = async () => {
  const { data: products, error } = await supabase
    .from("products")
    .select("*, variants(*)")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
  return products;
};

export const getFilteredProducts = async ({
  page = 1,
  brands = [],
}: {
  page: number;
  brands: string[];
}) => {
  const itemsPerPage = 10;
  const from = (page - 1) * itemsPerPage;
  const to = from + itemsPerPage - 1;
  //Paginacion de productos
  let query = supabase
    .from("products")
    .select("*, variants(*)", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(from, to);
  //Validacion
  if (brands.length > 0) {
    query = query.in("brand", brands);
  }
  //Resolucion de la promesa
  const { data, error, count } = await query;
  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
  return { data, count };
};

// Consulta directa a nuestra base de datos supabase para obtener los ultimos 4 productos
export const getRecentProducts = async () => {
  const { data: products, error } = await supabase
    .from("products")
    .select("*, variants(*)")
    .order("created_at", { ascending: false })
    .limit(4);

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
  return products;
};

// Funcion para obtener productos random de la base de datos
export const getRandomProducts = async () => {
  const { data: products, error } = await supabase
    .from("products")
    .select("*, variants(*)")
    .limit(20);

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  // Seleccionar 4 productos al azar
  const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 4);

  return randomProducts;
};
