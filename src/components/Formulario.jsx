import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Formulario = () => {

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      nombre:'',
      email:'',
      password:''

    },

    validationSchema: Yup.object({
      nombre: Yup.string().required("Debes ingresar un nombre"),
      email: Yup.string().required("el email es requerido"),
      password: Yup.string().required('la contraseña es requerido'),
    }),

    onSubmit: (data) => {
      console.log(data);
    }
  })

  return (
    <>
      <Grid
        container
        spacing={0}
        direction={"column"}
        justifyContent={"center"}
        alignContent={"center"}
        sx={{
          minHeight: "100vh",
          padding: "4",
        }}
      >
        <Grid>
          {" "}
          <Typography
            variant="h4"
            fontWeight={"bold"}
            color={"blue"}
            textAlign={"center"}
          >
            Formulario
          </Typography>{" "}
        </Grid>
        <Grid item>
          <Paper
            elevation={3}
            square={false}
            sx={{
              minHeight: 200,
              width: 300,
              // border:"none"
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                direction: "column",
                width: "100%",
                // flexWrap: "nowrap"
              }}
            >
              <Box component={"form"} onSubmit={handleSubmit}>
                <Box sx={{ mt: 3 }}>
                  <TextField 
                    fullWidth 
                    type="text"
                    id="nombre"
                    label="ingrese Nombre"
                    placeholder="centurion"
                    name="nombre"
                    onChange={handleChange}
                    value={values.nombre}
                    error={errors.nombre}
                    helperText={errors.nombre}
                  />
                </Box>

                <Box sx={{ mt: 3 }}>
                  <TextField 
                    fullWidth
                    type="email" 
                    id="email"
                    label="ingrese email"
                    placeholder="email@gmail.com"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    error={errors.email}
                    helperText={errors.email}
                  />
                </Box>

                <Box sx={{ mt: 3 }}>
                  <TextField 
                    fullWidth
                    type="password" 
                    id="password"
                    label="ingrese password"
                    placeholder="**********"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    error={errors.password}
                    helperText={errors.password}
                  />
                </Box>

                <Box sx={{ mt: 1 }}>
                  <Button
                    variant="contained"
                    sx={{ width: "100%" }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
