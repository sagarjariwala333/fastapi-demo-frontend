import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IEmployee } from "../../../types";

interface EmployeeTableProps {
  employees: IEmployee[];
}

const EmployeeTable = (props: EmployeeTableProps) => {
  const { employees } = props;

  return (
    <TableContainer
      component={Paper}
      sx={{ mt: 4, boxShadow: 3, borderRadius: 2 }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: "bold",
                backgroundColor: "primary.main",
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              ID
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                backgroundColor: "primary.main",
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              Name
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee, index) => (
            <TableRow
              key={employee.id}
              sx={{ "&:nth-of-type(odd)": { backgroundColor: "action.hover" } }}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>{employee.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
