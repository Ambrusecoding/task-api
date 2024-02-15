import { TextField } from "@mui/material";
import React from "react";
import { useSearchContext } from "../../context/searchContext";

const Filters = () => {
  const { search, setSearch } = useSearchContext();
  return (
    <>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        value={search}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearch(event.target.value);
        }}
      />
    </>
  );
};

export default Filters;
