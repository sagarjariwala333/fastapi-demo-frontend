import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";

interface IEmployeeFormInput {
  name: string;
}

interface IPropsType {
  addTask: (task: IEmployeeFormInput) => void;
}

const TaskForm = (props: IPropsType) => {
  const { addTask } = props;
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IEmployeeFormInput>();

  const url = import.meta.env.VITE_API_BASE_URL;

  const onSubmit = async (data: IEmployeeFormInput) => {
    console.log(data);
    // Handle form submission logic
    const res = await axios.post(`${url}task`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    reset();
    addTask(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ maxWidth: 400, margin: "auto" }}
    >
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{
          required: "Name is required",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters long",
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ""}
          />
        )}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 2, backgroundColor: "#3f51b5", color: "white" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default TaskForm;
