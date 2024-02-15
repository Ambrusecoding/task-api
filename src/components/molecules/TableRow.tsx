import React from "react";
import TableRow from "@mui/material/TableRow";
import { DataDOM } from "../../models/global.interface";
import TableCellAtom from "../atoms/TableCell";

interface TableRowMoleculeProps {
  data: DataDOM;
}

enum suspendedStatus {
  Inactive = "Inactive",
  Active = "Active",
}

const TableRowMolecule: React.FC<TableRowMoleculeProps> = ({ data }) => (
  <TableRow key={data.id}>
    <TableCellAtom value={data.nameOrg} />
    <TableCellAtom value={data.websiteUrl} />
    <TableCellAtom value={data.isSuspended ? "Inactive" : "Active"} />
  </TableRow>
);

export default TableRowMolecule;
