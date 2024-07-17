// EmployeeTable.tsx
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// types.ts
export interface ITask {
  id: number;
  name: string;
  employee: string;
}

interface TaskTableProps {
  tasks: ITask[];
}

const TaskTable = (props: TaskTableProps) => {
  const { tasks } = props;

  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: 4, borderRadius: 8, overflow: "hidden" }}
    >
      <Table sx={{ minWidth: 650 }}>
        <TableHead sx={{ backgroundColor: "#f3f4f6" }}>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks?.map((task, index) => (
            <TableRow
              key={`${index}${task.name}`}
              sx={{ "&:hover": { backgroundColor: "#edf2f7" } }}
            >
              <TableCell sx={{ py: 2, px: 4 }}>{index + 1}</TableCell>
              <TableCell sx={{ py: 2, px: 4 }}>{task.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
