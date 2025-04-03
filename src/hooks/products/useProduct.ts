import { useQuery } from "@tanstack/react-query";
import { getProductBySlug } from "../../actions";

export const useProduct = (slug: string) => {
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", slug],
    queryFn: () => getProductBySlug(slug),
    retry: false,
  });

  return {
    product,
    isError,
    isLoading,
  };
};
