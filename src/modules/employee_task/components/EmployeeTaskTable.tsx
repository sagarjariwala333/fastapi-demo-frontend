// EmployeeTable.tsx
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
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Employee Name</TableCell>
            <TableCell>Task Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeTasks?.map((employeeTask, index) => (
            <TableRow
              key={`${index}${employeeTask.task}${employeeTask.employee}`}
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
