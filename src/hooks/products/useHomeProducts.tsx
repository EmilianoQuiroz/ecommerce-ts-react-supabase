import { useQueries } from "@tanstack/react-query";
import { getRandomProducts, getRecentProducts } from "../../actions";

export const useHomeProducts = () => {
  const results = useQueries({
    queries: [
      {
        queryKey: ["recentProducts"],
        queryFn: getRecentProducts,
      },
      {
        queryKey: ["randomProducts"],
        queryFn: getRandomProducts,
      },
    ],
  });

  const [recentProductsResult, randomProductsResult] = results;

  //Conbinar los estados de las consultas
  const isLoading =
    recentProductsResult.isLoading || randomProductsResult.isLoading;
  const isError = recentProductsResult.isError || randomProductsResult.isError;
  return {
    recentProducts: recentProductsResult.data || [],
    randomProducts: randomProductsResult.data || [],
    isLoading,
    isError,
  };
};
