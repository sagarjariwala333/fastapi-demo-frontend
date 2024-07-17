import { useForm, Controller } from "react-hook-form";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Box,
  Checkbox,
  ListItemText,
  Typography,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getEmployees, getTasks } from "../../../services/dataService";
import axios from "axios";

interface IPropsType {
  fetchData: () => void;
}

const EmployeeTaskForm = (props: IPropsType) => {
  const { fetchData } = props;
  const { control, handleSubmit, reset } = useForm();
  const [taskState, setTaskState] = useState([]);
  const [employeeState, setEmployeeState] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTaskState(data.getTasks);
    };
    const fetchEmployees = async () => {
      const data = await getEmployees();
      setEmployeeState(data.getEmployees);
    };
    fetchTasks();
    fetchEmployees();
  }, []);

  const url = import.meta.env.VITE_API_BASE_URL;

  const onSubmit = async (data) => {
    const req = {
      employees: data.employees,
      tasks: data.tasks,
    };
    const res = await axios.post(`${url}employeetask/employee_task`, req, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    reset();
    fetchData();
  };

  return (
    <Paper
      elevation={3}
      sx={{ padding: 4, maxWidth: 600, margin: "0 auto", mt: 4 }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Assign Tasks to Employees
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ mt: 1 }}
      >
        <FormControl fullWidth margin="normal">
          <InputLabel id="employee-select-label">Select Employees</InputLabel>
          <Controller
            name="employees"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <Select
                {...field}
                labelId="employee-select-label"
                multiple
                renderValue={(selected) =>
                  selected
                    .map((id) => employeeState.find((e) => e.id === id)?.name)
                    .join(", ")
                }
              >
                {employeeState.map((employee) => (
                  <MenuItem key={employee.id} value={employee.id}>
                    <Checkbox checked={field.value.includes(employee.id)} />
                    <ListItemText primary={employee.name} />
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="task-select-label">Select Tasks</InputLabel>
          <Controller
            name="tasks"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <Select
                {...field}
                labelId="task-select-label"
                multiple
                renderValue={(selected) =>
                  selected
                    .map((id) => taskState.find((t) => t.id === id)?.name)
                    .join(", ")
                }
              >
                {taskState.map((task) => (
                  <MenuItem key={task.id} value={task.id}>
                    <Checkbox checked={field.value.includes(task.id)} />
                    <ListItemText primary={task.name} />
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Paper>
  );
};

export default EmployeeTaskForm;
