import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useFormik } from "formik";
// import * as Yup from "yup"
import axios from "axios";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
};

export const CreateMovieModal = ({ open, handleClose }) => {
  let initialValues = {
    name:"",
    description:"",
    createdAt:"",
    img: ""
  }

  const startLoadingData = async(data) => {
    try {
     const result = await axios.post("http://localhost:5000/movies", data);
     console.log(result)
     handleClose();
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = (data) => {
    startLoadingData({...data, isLiked: false})
  }

  const {handleSubmit, handleChange} = useFormik({
    initialValues,
    onSubmit,
  })

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} onSubmit={handleSubmit}>
          <Box
            component={"form"}
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",
              alignItems: "center",
              height: "400px",
              gap: 1
            }}
          >
            <Typography variant="h6" color={"primary"} >Agregar Pelicula</Typography>
            <TextField
              id="name"
              name="name"
              label="titulo de la pelicula"
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />

            <TextField
              id="createdAt"
              name="createdAt"
              label="fecha de creacion"
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />

            <TextField
              id="description"
              name="description"
              label="descripcion"
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />

            <TextField
              id="img"
              name="img"
              label="url de la imagen"
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
            <Button type="submit" variant="contained" >Agregar</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

CreateMovieModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};
