import Pagination from "@mui/material/Pagination";
import { useSearchContext } from "../../context/searchContext";

export default function PaginationComponent() {
  const tablePages = 5;
  const { page, setPage } = useSearchContext();
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    // Aquí puedes cargar los datos de la nueva página
  };
  return (
    <Pagination count={tablePages} page={page} onChange={handlePageChange} />
  );
}
