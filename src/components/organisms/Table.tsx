import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import TableRowMolecule from "../molecules/TableRow";
import useAsync from "../../hooks/useAsync";
import useFetchAndLoad from "../../hooks/useFetchandLoad";
import { getAllOrganizationAPI } from "../../services";
import { DataDOM, DataResponseAPI } from "../../models/global.interface";
import { userGetOneAdapter } from "../../adapters/adapters";
import { useSearchContext } from "../../context/searchContext";

//  revisar este tipado

const TableOrganism: React.FC = () => {
  const limit = 3;
  const { search, page } = useSearchContext();
  const [data, setData] = useState<DataDOM[]>([]);
  const { callEndpoint, loading, error } = useFetchAndLoad();

  const createQuery = (queryKeys: any) => {
    let query = {};
    for (const key in queryKeys) {
      if (queryKeys[key]) {
        query = { ...query, [key]: queryKeys[key] };
      }
    }
    return query;
  };

  const getDataTable: any = async ({
    page,
    search,
  }: {
    page: number;
    search: string;
  }) => {
    console.log(page);
    let query = createQuery({
      name: search,
    });
    query = {
      offset: (page - 1) * limit,
      limit,
      ...query,
    };

    const response = await callEndpoint(getAllOrganizationAPI(query), () => {});
    return response;
  };

  //Crear adaptador
  /*
  const adaptInfo = async (data: DataAPI) => {
   //Save the adapted data and the last page and length for the pagination
   const adaptedData: DataDOM[] = userGetOneAdapter(data?.result);
   setData(adaptedData);
 }
  */

  const adaptInfo = async (data: DataResponseAPI) => {
    // Save the adapted data and the last page and length for the pagination
    const adaptedData: DataDOM[] = userGetOneAdapter(data.result.items);
    setData(adaptedData);
  };

  /* 


Ejemplo:
q
useAsync(
    () => getOneOrganization(id),
    adaptInfo,
    () => {},
    [organization?.id, updatedToggle, userState.id],
  );
*/

  useAsync(
    () => getDataTable({ page, search }),
    adaptInfo,
    () => {},
    [page, search]
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Website</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRowMolecule data={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableOrganism;
export {};
