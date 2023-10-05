import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import PropTypes from "prop-types"

export const Header = ( {setFavorite} ) => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "space-between",
        width:"100%",
        padding: "10px",
        alignItems: "center"


      }}
    >
      <Typography color={"#fff"} variant="h6"> Peliculas </Typography>
      <Box sx={{display: "flex", justifyContent:"center", gap:"10px"}}>
        <Button variant="contained" onClick={() => setFavorite(false)} >Todos</Button>
        <Button variant="contained" onClick={() => setFavorite(true)} >Favoritos</Button>
    </Box>
    </Box>
  )
}



Header.propTypes = {
  setFavorite: PropTypes.func
}

