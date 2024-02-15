import "./App.css";
import TableOrganism from "./components/organisms/Table";
import Filters from "./components/molecules/Filters";
import { SearchProvider } from "./context/searchContext";
import PaginationComponent from "./components/molecules/PaginationComponent";

function App() {
  return (
    <>
      <SearchProvider>
        <>
          <Filters />
          <TableOrganism />
          <PaginationComponent />
        </>
      </SearchProvider>
    </>
  );
}

export default App;
