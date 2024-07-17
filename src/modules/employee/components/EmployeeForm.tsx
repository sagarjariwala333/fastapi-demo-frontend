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
      sx={{
        mt: 4,
        p: 3,
        maxWidth: "500px",
        mx: "auto",
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
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
            sx={{ mb: 2 }}
          />
        )}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 2,
          mb: 1,
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default EmployeeForm;
