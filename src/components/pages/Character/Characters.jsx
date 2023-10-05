import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"

export const Characters = () => {
  const [characterss, setCharacterss] = useState([]);

  const obtenerCharacter = async() => {
    try {
      const {data} = await axios.get('https://rickandmortyapi.com/api/character');
      setCharacterss(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obtenerCharacter()
    
  }, [ ])
  
  console.log(characterss);

  return (
    <>
      <Typography variant="h4" align="center" gutterBottom >Personajes</Typography>

      <Grid container spacing={2} justifyContent={"center"} >
        {
          characterss.map( element => (
              <Grid item key = {element.id}>
                <Card sx={{width: 300}} >
                  <CardMedia 
                    sx={{height: 140 }}
                    image={element.image}
                    title={element.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component={"div"}>{element.name}</Typography>
                    <Typography variant="body2" color={"text.secondary"} >{element.status}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          )
        }
      </Grid>
    </>

  )
}
