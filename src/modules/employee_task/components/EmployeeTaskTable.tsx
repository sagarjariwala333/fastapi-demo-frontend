import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// types.ts
export interface IEmployeeTask {
  id: number;
  task: string;
  employee: string;
}

interface EmployeeTaskTableProps {
  employeeTasks: IEmployeeTask[];
}

const EmployeeTaskTable = (props: EmployeeTaskTableProps) => {
  const { employeeTasks } = props;

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
              Employee Name
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                backgroundColor: "primary.main",
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              Task Name
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeTasks?.map((employeeTask, index) => (
            <TableRow
              key={`${index}${employeeTask.task}${employeeTask.employee}`}
              sx={{ "&:nth-of-type(odd)": { backgroundColor: "action.hover" } }}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>{employeeTask.employee}</TableCell>
              <TableCell>{employeeTask.task}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTaskTable;
