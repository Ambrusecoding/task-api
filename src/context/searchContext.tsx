import { createContext, useContext, useState } from "react";

type SearchContextType = {
  search: string;
  setSearch: (search: string) => void;
  page: number;
  setPage: (page: number) => void;
};

const defaultValues = {
  search: "",
  setSearch: () => {},
  page: 1,
  setPage: () => {},
};

const SearchContext = createContext<SearchContextType>(defaultValues);

const SearchProvider = (props: any) => {
  const { children } = props;
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<string>("");

  const contextValues = {
    search,
    setSearch,
    page,
    setPage,
  };

  return (
    <SearchContext.Provider value={contextValues}>
      {children}
    </SearchContext.Provider>
  );
};
const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error(
      "GlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};

export { useSearchContext, SearchProvider };
