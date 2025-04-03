interface Props {
  totalItems: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
export const Pagination = ({ totalItems, page, setPage }: Props) => {
  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const itemsPerPage = 10;
  const totalPages = totalItems ? Math.ceil(totalItems / itemsPerPage) : 1;
  const isLastPage = page >= totalPages;
  const startItem = (page - 1) * itemsPerPage + 1;
  const endItem = Math.min(page * itemsPerPage, totalItems);

  return (
    <div className="flex justify-between items-center">
      <p className="text-xs font-medium">
        Mostrando{" "}
        <span className="font-bold">
          {startItem} - {endItem}
        </span>{" "}
        de <span className="font-bold">{totalItems}</span> productos
      </p>

      <div className="flex gap-3">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className="btn-paginated"
        >
          Anterior
        </button>
        <button
          onClick={handleNextPage}
          disabled={isLastPage}
          className="btn-paginated"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
