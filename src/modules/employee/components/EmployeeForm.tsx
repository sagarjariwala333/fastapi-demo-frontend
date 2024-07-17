import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";

interface IEmployeeFormInput {
  name: string;
}

interface IPropType {
  addEmployee: (data: IEmployeeFormInput) => void;
}

const EmployeeForm = (props: IPropType) => {
  const { addEmployee } = props;
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
    const res = await axios.post(`${url}employee`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res) {
      reset();
      addEmployee(data);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mt-4"
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
            className="bg-white"
          />
        )}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        className="mt-3 mb-2 bg-blue-500 hover:bg-blue-700 text-white"
      >
        Submit
      </Button>
    </Box>
  );
};

export default EmployeeForm;
