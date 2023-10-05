import { Box, Button } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { CardMovies, CreateMovieModal, Header } from "../../common"
import confetti from "canvas-confetti"

export const Movies = () => {
  const [movies, setMovies] = useState([])
  const [favorite, setFavorite] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const getMovies = async() => {
    try {
      const {data} = await axios.get("http://localhost:5000/movies");
      setMovies(data);
    } catch (error) {
      console.log(error)
    }
  }

  const handleLike = async(movie) => {
    // const {isLiked} = movie;
    if(!movie.isLiked){
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle:-100,
        origin: {
          x:0,
          y:0,
        }
      })
    }

    try {
      await axios.patch(`http://localhost:5000/movies/${movie.id}`, {isLiked: !movie.isLiked })
    } catch (error) {
      console.log(error)
    }
  }
  const handleDelete = async(movie) => {

    
    try {
      const result = await axios.delete(`http://localhost:5000/movies/${movie.id}`);
      console.log(result);
      const data = movies.filter(element => element.id != movie.id);
      setMovies(data);
      
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getMovies();
  }, [movies])
  
  const moviesFiltered = movies.filter(movie => movie.isLiked == true);
  
  return (
    <>
    <Header setFavorite = {setFavorite} />
    <Button onClick={handleOpen}>Open modal</Button>
    <CreateMovieModal open = {open} handleClose = {handleClose} />
      <Box 
        sx={{
          backgroundColor:"#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          minHeight: "100vh",
          padding: "20px",
          flexWrap: "wrap"
        }}
      >
        {
          !favorite 
          ? 
          movies.map(movie => (
            <CardMovies key = {movie.id} movie = {movie} handleLike={handleLike} handleDelete={handleDelete} />
          ))
          :
          moviesFiltered.map(movie => (
            <CardMovies key = {movie.id} movie = {movie} handleLike={handleLike} />
          ))

        }
      </Box>
    </>
  )
}
