import React from "react";
import TableCell from "@mui/material/TableCell";

interface TableCellAtomProps {
  value: string | number;
}

const TableCellAtom: React.FC<TableCellAtomProps> = ({ value }) => (
  <TableCell>{value}</TableCell>
);

export default TableCellAtom;
