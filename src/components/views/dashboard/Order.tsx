import React from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Chip,
  Typography,
} from "@mui/material";

// Define the types
interface Column {
  id: string;
  label: string;
  sortable: boolean;
  align?: "left" | "right" | "center";
}

interface Device {
  _id: string;
  name: string;
  orderNo: string;
  amount: string;
  status: string;
}

interface ActionFunction {
  (id: string, row: Device, rowIndex: number): React.ReactNode;
}

interface CustomTableProps {
  actions?: ActionFunction;
}

const columns: Column[] = [
  { id: "name", label: "Customer", sortable: true },
  { id: "orderNo", label: "Order No.", sortable: true },
  { id: "amount", label: "Amount", sortable: true },
  { id: "status", label: "Status", sortable: false },
];

const rows = {
  data: [
    {
      _id: "1",
      name: "Sunil Joshi",
      orderNo: "001",
      amount: "3.9",
      status: "Delivered",
    },
    {
      _id: "2",
      name: "Andrew McDownland",
      orderNo: "002",
      amount: "24.5",
      status: "Cancelled",
    },
    {
      _id: "1",
      name: "Sunil Joshi",
      orderNo: "001",
      amount: "3.9",
      status: "Delivered",
    },
    {
      _id: "2",
      name: "Andrew McDownland",
      orderNo: "002",
      amount: "24.5",
      status: "Cancelled",
    },
    {
      _id: "1",
      name: "Sunil Joshi",
      orderNo: "001",
      amount: "3.9",
      status: "Delivered",
    },
    {
      _id: "2",
      name: "Andrew McDownland",
      orderNo: "002",
      amount: "24.5",
      status: "Cancelled",
    },
  ],
};
const statusStyles: Record<string, { backgroundColor: string; color: string }> =
  {
    Complete: { backgroundColor: "#FFC107", color: "#000" },
    Delivered: { backgroundColor: "#4CAF50", color: "#fff" },
    Cancelled: { backgroundColor: "#F44336", color: "#fff" },
  };

const CustomTable: React.FC<CustomTableProps> = ({ actions }) => {
  const [order, setOrder] = React.useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Device | null>(null);

  const handleRequestSort = (property: keyof Device) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const renderCellContent = (column: Column, row: Device) => {
    switch (column.id) {
      case "amount":
        return `$${row[column.id as keyof Device]}k`;
      case "status":
        const status = row[column.id as keyof Device] as string;
        const statusStyle = statusStyles[status] || {
          backgroundColor: "#e0e0e0",
          color: "#000",
        };
        return (
          <Chip
            label={status}
            sx={{
              backgroundColor: statusStyle.backgroundColor,
              color: statusStyle.color,
            }}
          />
        );
      default:
        return row[column.id as keyof Device];
    }
  };

  return (
    <TableContainer sx={{ bgcolor: "transparent" }}>
      <Typography variant="h5">Recent Orders </Typography>
      <Table aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align || "left"}
                sx={{
                  fontWeight: "700",
                  fontSize: "15px",
                  color: "text.secondary",
                }}
              >
                {column.sortable ? (
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : "asc"}
                    onClick={() => handleRequestSort(column.id as keyof Device)}
                  >
                    <strong>{column.label}</strong>
                  </TableSortLabel>
                ) : (
                  <strong>{column.label}</strong>
                )}
              </TableCell>
            ))}
            {actions && (
              <TableCell
                align="center"
                sx={{ fontWeight: "700", fontSize: "15px" }}
              >
                <strong>Action</strong>
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.data.length > 0 ? (
            rows.data.map((row, rowIndex) => (
              <TableRow key={row._id}>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align || "left"}
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      color: "text.secondary",
                    }}
                  >
                    {renderCellContent(column, row)}
                  </TableCell>
                ))}
                {actions && (
                  <TableCell align="center">
                    {actions(row._id, row, rowIndex)}
                  </TableCell>
                )}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length + (actions ? 1 : 0)}
                align="center"
              >
                <Typography>No Data Available</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
