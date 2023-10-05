import { Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import { useState } from "react";

export const CardMovies = ({movie, handleLike, handleDelete}) => {
  const {name, description, img, createdAt, isLiked} = movie;
  // const [favorite, setFavorite] = useState(isLiked);

  return (
    <>
      <Card sx={{ width: 300, height:500 }}>
      <CardHeader
        title={name}
        subheader={createdAt}
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt={name}
      />
      <CardContent sx={{ height:150 }}>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{display:"flex", justifyContent:"space-between" }} >
        <IconButton aria-label="add to favorites" onClick={() => handleLike(movie)}>
          <FavoriteIcon color={isLiked ? 'error' : 'disabled'} />
        </IconButton>
        <Button variant="contained" color="error" type="button" onClick={() => handleDelete(movie) } >
          Delete
        </Button>
      </CardActions>
    </Card>
    </>
  )
}

CardMovies.propTypes = {
  movie: PropTypes.object,
  handleLike: PropTypes.func
}

